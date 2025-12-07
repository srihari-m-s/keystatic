import { block } from "@keystatic/core/content-components";
import { fields, singleton } from "@keystatic/core";
import { sectionWrapper, heroSectionWrapper } from "./common/sections";
import {
  experience,
  experienceItem,
  projectItem,
  projects,
} from "./common/work";

// Hero section block - wrapper component with title, subtitle, and image
export const hero = block({
  label: "Hero Section",
  schema: {
    title: fields.text({
      label: "Title",
      description: "Main heading for the hero section",
    }),
    subtitle: fields.text({
      label: "Subtext",
      description: "Brief description or tagline",
      multiline: true,
    }),
    image: fields.image({
      label: "Hero Image",
      directory: "src/assets/images/hero",
      publicPath: "/src/assets/images/hero",
    }),
  },
});

// Skills block - block component for skills展示
export const skills = block({
  label: "Skills",
  schema: {
    title: fields.text({
      label: "Section Title",
      defaultValue: "Skills",
    }),
    skillsList: fields.array(fields.text({ label: "Skill" }), {
      label: "Skills",
      itemLabel: (item) => item.value || "New skill",
    }),
  },
});

// Export all blocks as a single object
export const indexPageBlocks = {
  sectionWrapper,
  heroSectionWrapper,
  hero,
  experience,
  experienceItem,
  skills,
  projects,
  projectItem,
};

// Index page singleton definition
export const indexPageSingleton = singleton({
  label: "Index Page",
  path: "src/content/index-page/",
  format: { data: "yaml", contentField: "content" },
  schema: {
    title: fields.text({
      label: "Page Title",
      description: "Main title for the index page",
    }),
    description: fields.text({
      label: "Description",
      description: "Brief description or tagline for the page",
    }),
    content: fields.markdoc({
      label: "Content",
      options: {
        image: {
          directory: "src/assets/images/index",
          publicPath: "/src/assets/images/index",
        },
      },
      components: indexPageBlocks,
    }),
  },
  entryLayout: "content",
});
