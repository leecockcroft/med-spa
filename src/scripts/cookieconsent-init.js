import 'vanilla-cookieconsent/dist/cookieconsent.css';
import { CookieConsent } from 'vanilla-cookieconsent';

CookieConsent.run({
  guiOptions: {
    consentModal: {
      layout: 'cloud',
      position: 'bottom center',
      transition: 'slide',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      transition: 'slide',
    },
  },
  categories: {
    necessary: {
      enabled: true,
      readOnly: true,
    },
    analytics: {
      enabled: false,
      autoClear: true,
      services: {
        ga: {
          id: 'G-TVZ5E3Z7MN',
        },
      },
    },
  },
  language: {
    default: 'en',
    translations: {
      en: {
        consentModal: {
          title: 'We use cookies!',
          description: 'This website uses cookies to improve your experience.',
          acceptAllBtn: 'Accept all',
          rejectAllBtn: 'Reject all',
          managePreferencesBtn: 'Manage preferences',
        },
      },
    },
  },
});
