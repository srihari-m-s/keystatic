import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  tags: {
    hero: {
      render: component("./src/components/Hero.astro"),
      attributes: {
        title: { type: String },
        subtitle: { type: String },
        image: { type: String },
      },
    },
    sectionWrapper: {
      render: component("./src/components/SectionWrapper.astro"),
      attributes: {},
    },
    heroSectionWrapper: {
      render: component("./src/components/HeroSectionWrapper.astro"),
      attributes: {},
    },
    experience: {
      render: component("./src/components/Experience.astro"),
      attributes: {
        title: { type: String },
      },
    },
    experienceItem: {
      render: component("./src/components/ExperienceItem.astro"),
      attributes: {
        company: { type: String },
        position: { type: String },
        duration: { type: String },
        description: { type: String },
        isPresent: { type: Boolean },
      },
    },
  },
});
