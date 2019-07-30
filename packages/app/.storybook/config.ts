import { addParameters, configure } from '@storybook/react';

const req = require.context('../src', true, /.story.tsx$/);

configure(() => {
  addParameters({
    viewport: {
      defaultViewport: 'mobile480x800',
      viewports: {
        desktop1280x1024: {
          name: 'Desktop 1280x1024',
          styles: { height: '1024px', width: '1280px' },
          type: 'desktop'
        },
        desktop1600x900: {
          name: 'Desktop 1600x900',
          styles: { height: '900px', width: '1600px' },
          type: 'desktop'
        },
        desktop1920x1080: {
          name: 'Desktop Big 1920x1080',
          styles: { height: '1080px', width: '1920px' },
          type: 'desktop'
        },
        mobile480x800: {
          name: 'Mobile 480x800',
          styles: { height: '800px', width: '480px' },
          type: 'mobile'
        },
        tablet1024x768: {
          name: 'Tablet Landscape 1024x768',
          styles: { height: '768px', width: '1024px' },
          type: 'tablet'
        },
        tablet720x1280: {
          name: 'Tablet Portrait 720x1280',
          styles: { height: '1280px', width: '720px' },
          type: 'tablet'
        },
        tablet768x1024: {
          name: 'Tablet Portrait 768x1024',
          styles: { height: '1024px', width: '768px' },
          type: 'tablet'
        }
      }
    }
  });

  req.keys().forEach(filename => req(filename));
}, module);
