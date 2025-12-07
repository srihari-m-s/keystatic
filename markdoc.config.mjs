import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  tags: {
    hero: {
      render: component("./src/components/Hero.astro"),
      attributes: {
        title: { type: String },
        subtitle: { type: String },
        image: { type: String },
        cta: { type: Array },
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
    projects: {
      render: component("./src/components/Projects.astro"),
      attributes: {
        title: { type: String },
      },
    },
    projectItem: {
      render: component("./src/components/ProjectItem.astro"),
      attributes: {
        title: { type: String },
        description: { type: String },
        link: { type: String },
        technologies: { type: Array },
      },
    },
  },
});
