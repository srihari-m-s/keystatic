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
    sectionWrapper: {
      render: component('./src/components/SectionWrapper.astro'),
      attributes: {},
    },
    heroSectionWrapper: {
      render: component('./src/components/HeroSectionWrapper.astro'),
      attributes: {},
    },
  },
});
