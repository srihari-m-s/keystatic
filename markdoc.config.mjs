import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  tags: {
    hero: {
      render: component('./src/components/Hero.astro'),
      attributes: {
        title: { type: String },
        subtitle: { type: String },
        image: { type: String },
      },
    },
  },
});