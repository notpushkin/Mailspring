import React from 'react';
import { PropTypes, MailspringAPIRequest } from 'mailspring-exports';
import { Webview } from 'mailspring-component-kit';
import * as OnboardingActions from './onboarding-actions';

export default class AuthenticatePage extends React.Component {
  static displayName = 'AuthenticatePage';

  static propTypes = {
    account: PropTypes.object,
  };

  _src() {
    /*  */
    return `data:text/html,
      <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center">
        <!-- By Sam Herbert, for everyone. More @ https://samherbert.net/svg-loaders/ -->
        <svg width="120" height="30" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="#333">
          <circle cx="15" cy="15" r="15">
            <animate
              attributeName="r" from="15" to="15"
              begin="0s" dur="0.8s"
              values="15;9;15" calcMode="linear"
              repeatCount="indefinite" />
            <animate
              attributeName="fill-opacity" from="1" to="1"
              begin="0s" dur="0.8s"
              values="1;.5;1" calcMode="linear"
              repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="15" r="9" fill-opacity="0.3">
              <animate
                attributeName="r" from="9" to="9"
                begin="0s" dur="0.8s"
                values="9;15;9" calcMode="linear"
                repeatCount="indefinite" />
              <animate
                attributeName="fill-opacity" from="0.5" to="0.5"
                begin="0s" dur="0.8s"
                values=".5;1;.5" calcMode="linear"
                repeatCount="indefinite" />
          </circle>
          <circle cx="105" cy="15" r="15">
            <animate
              attributeName="r" from="15" to="15"
              begin="0s" dur="0.8s"
              values="15;9;15" calcMode="linear"
              repeatCount="indefinite" />
            <animate
              attributeName="fill-opacity" from="1" to="1"
              begin="0s" dur="0.8s"
              values="1;.5;1" calcMode="linear"
              repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    `;
  }

  _onDidFinishLoad = webview => {
    OnboardingActions.identityJSONReceived({
      id: 'ffffffff-ffff-ffff-ffff-ffffffffffff',
      token: 'ffffffff-ffff-ffff-ffff-fffffffffff1',
      firstName: '',
      lastName: '',
      emailAddress: '',
      object: 'identity',
      createdAt: '2020-01-24T18:41:25.000Z',
      stripePlan: 'Basic',
      stripePlanEffective: 'Basic',
      stripeCustomerId: 'cus_Gbkb1jjCVyCu1W',
      stripePeriodEnd: null,
      featureUsage: {
        snooze: {
          quota: 15,
          period: 'weekly',
          usedInPeriod: 0,
          featureLimitName: 'basic-limit',
        },
        'send-later': {
          quota: 5,
          period: 'weekly',
          usedInPeriod: 0,
          featureLimitName: 'basic-limit',
        },
        'thread-sharing': {
          quota: 3,
          period: 'weekly',
          usedInPeriod: 0,
          featureLimitName: 'basic-limit',
        },
        'link-tracking': {
          quota: 5,
          period: 'weekly',
          usedInPeriod: 0,
          featureLimitName: 'basic-limit',
        },
        'open-tracking': {
          quota: 5,
          period: 'weekly',
          usedInPeriod: 0,
          featureLimitName: 'basic-limit',
        },
        'contact-profiles': {
          quota: 3,
          period: 'weekly',
          usedInPeriod: 0,
          featureLimitName: 'basic-limit',
        },
        'send-reminders': {
          quota: 5,
          period: 'weekly',
          usedInPeriod: 0,
          featureLimitName: 'basic-limit',
        },
        translation: {
          quota: 50,
          period: 'weekly',
          usedInPeriod: 0,
          featureLimitName: 'basic-limit',
        },
      },
    });
  };

  render() {
    return (
      <div className="page authenticate">
        <Webview src={this._src()} onDidFinishLoad={this._onDidFinishLoad} />
      </div>
    );
  }
}
