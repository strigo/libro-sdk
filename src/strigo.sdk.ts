import { isRecordingMode } from './modules/assessment-recorder/assessment-recorder';
import * as urlTools from './modules/url/url';
import { Strigo } from './strigo';

window.Strigo = Strigo;

function setupSdk(): void {
  console.log('Setting up SDK...');

  chrome?.storage?.sync.get(['orgId', 'apiKey', 'email', 'shouldSetup'], ({ orgId, apiKey, email, shouldSetup }) => {
    console.log('Received data from storage:', { orgId, apiKey, email, shouldSetup });

    // The SDK will not be available in all Windows (e.g, the iframes we create using the SDK).
    // The only window in which it should be available is the one before the SDK is setup.
    console.log('current WINDOW:', window);

    if (!window.Strigo) {
      console.log('Missing Strigo object on window!');

      return;
    }

    console.log('current CONFIG:', window.Strigo.config);

    if (window.Strigo.config.initialized) {
      console.log('already initialized with academy user');

      return;
    }

    console.log('Fetching Strigo credentials...', { orgId, apiKey, email });

    if (orgId && apiKey && email) {
      // Can't use await here. There's a weird Promise implementation here that doesn't allow it.
      chrome.runtime.sendMessage(
        { request: 'generateToken', payload: { orgId, apiKey, email, development: true } },
        (response) => {
          console.log('Received generate token response');
          const { token, expiration } = response;

          if (email && token && expiration) {
            console.log('Removing Strigo config and session...');
            // We want to clean things up to make sure it starts afresh.
            // window.Strigo.destroy(); // TODO: Check if we can really remove this line
            // We manually modified the SDK not to init itself, and then we do it here manually.
            window.Strigo.init();
            window.Strigo.setup({
              version: 'v1.1.12',
              email,
              token: { token, expiration },
            });
          }

          // If we managed to set the SDK up once, we want to make sure that no other tab / window will try to
          // set it up again.
          chrome?.storage?.sync.set({ shouldSetup: false }, () => {});
          // 4000 is a magic number. We assume that the overlay will not be collapsed before it disappears.
        }
      );
    }
  });
}

if (isRecordingMode()) {
  console.log('Strigo recorder mode');
  window.Strigo.assessmentRecorder();
} else {
  setupSdk();
}
