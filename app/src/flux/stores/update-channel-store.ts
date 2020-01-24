import MailspringStore from 'mailspring-store';
import { remote } from 'electron';

const autoUpdater = remote.getGlobal('application').autoUpdateManager;
const preferredChannel = autoUpdater.preferredChannel;

class UpdateChannelStore extends MailspringStore {
  _current = { name: 'Loading...' };
  _available = [{ name: 'Loading...' }];

  constructor() {
    super();
    if (AppEnv.isMainWindow()) {
      this.refreshChannel();
    }
  }

  current() {
    return this._current;
  }

  currentIsUnstable() {
    return this._current && this._current.name.toLowerCase() === 'beta';
  }

  available() {
    return this._available;
  }

  async refreshChannel() {
    // TODO BG
    try {
      this._current = { name: 'Builtin updater disabled in this build' };
      this._available = [];
      this.trigger();
    } catch (err) {
      // silent
    }
    return;
  }

  async setChannel(channelName) {
    try {
      this._current = { name: 'Builtin updater disabled in this build' };
      this._available = [];
      this.trigger();
    } catch (err) {
      AppEnv.showErrorDialog(err.toString());
      this.trigger();
    }
    return null;
  }
}

export default new UpdateChannelStore();
