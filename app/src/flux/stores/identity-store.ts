import MailspringStore from 'mailspring-store';
import { remote } from 'electron';
import url from 'url';

import * as Utils from '../models/utils';
import * as Actions from '../actions';
import KeyManager from '../../key-manager';
import { Disposable } from 'event-kit';

// Note this key name is used when migrating to Mailspring Pro accounts from old N1.
const KEYCHAIN_NAME = 'Mailspring Account';

export interface IIdentity {
  id: string;
  token: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  stripePlan: string;
  stripePlanEffective: string;
}

class _IdentityStore extends MailspringStore {
  _identity: IIdentity = null;
  _disp: Disposable;

  constructor() {
    super();

    if (AppEnv.isEmptyWindow()) {
      /*
      Hot windows don't receive any action-bridge-messages, which include DB updates.
      Since the hot window loads first, it may have a stale verison of the Identity.
      */
      AppEnv.onWindowPropsReceived(() => {
        this._onIdentityChanged();
      });
      return;
    }

    AppEnv.config.onDidChange('identity', this._onIdentityChanged);
    this._onIdentityChanged();

    this.listenTo(Actions.logoutMailspringIdentity, this._onLogoutMailspringIdentity);
    this._fetchAndPollRemoteIdentity();
  }

  deactivate() {
    if (this._disp) this._disp.dispose();
    this.stopListeningToAll();
  }

  identity() {
    if (!this._identity || !this._identity.id) return null;
    return Utils.deepClone(this._identity);
  }

  identityId() {
    if (!this._identity) {
      return null;
    }
    return this._identity.id;
  }

  hasProFeatures() {
    return this._identity && this._identity.stripePlanEffective !== 'Basic';
  }

  _fetchAndPollRemoteIdentity() {
    if (!AppEnv.isMainWindow()) return;
    setTimeout(() => {
      this.fetchIdentity();
    }, 1000);
    setInterval(() => {
      this.fetchIdentity();
    }, 1000 * 60 * 10); // 10 minutes
  }

  async saveIdentity(identity) {
    if (!identity) {
      this._identity = null;
      await KeyManager.deletePassword(KEYCHAIN_NAME);
      AppEnv.config.set('identity', null);
      return;
    }

    const { token, ...rest } = identity;

    // allow someone to call saveIdentity without the token,
    // and only save it if it's been changed (expensive call.)
    const oldToken = this._identity ? this._identity.token : null;
    const nextToken = token || oldToken;

    if (nextToken && nextToken !== oldToken) {
      // Note: We /must/ await this because calling config.set below
      // will try to retrieve the password via getPassword.
      // If this fails, the app may quit here.
      await KeyManager.replacePassword(KEYCHAIN_NAME, nextToken);
    }

    this._identity = identity;
    this._identity.token = nextToken;
    AppEnv.config.set('identity', rest);

    // Setting AppEnv.config will trigger our onDidChange handler,
    // no need to trigger here.
  }

  /**
   * When the identity changes in the database, update our local store
   * cache and set the token from the keychain.
   */
  _onIdentityChanged = async () => {
    const next = Object.assign({}, AppEnv.config.get('identity') || {});
    next.token = await KeyManager.getPassword(KEYCHAIN_NAME);
    this._identity = next;
    this.trigger();
  };

  _onLogoutMailspringIdentity = async () => {
    await this.saveIdentity(null);
    // We need to relaunch the app to clear the webview session
    // and prevent the webview from re signing in with the same MailspringID
    remote.app.relaunch();
    remote.app.quit();
  };

  /**
   * This passes utm_source, utm_campaign, and utm_content params to the
   * Mailspring billing site. Please reference:
   * https://paper.dropbox.com/doc/Analytics-ID-Unification-oVDTkakFsiBBbk9aeuiA3
   * for the full list of utm_ labels.
   */
  async fetchSingleSignOnURL(path, params) {
    return `data:text/html,Mailspring ID server is disabled in this build.`;
  }

  async fetchIdentity() {
    if (!this._identity || !this._identity.token) {
      return null;
    }

    return this._identity;
  }
}

export const IdentityStore = new _IdentityStore();
