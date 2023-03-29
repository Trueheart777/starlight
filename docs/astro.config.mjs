import { defineConfig } from 'astro/config';
import starbook from 'starbook';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starbook({
      title: 'StarBook',
      tagline: 'Launch your next docs with Astro',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        de: {
          label: 'Deutsch',
          lang: 'de',
        },
        'fr-ca': {
          label: 'Français canadien',
          lang: 'fr-CA',
        },
      },
    }),
  ],
});
