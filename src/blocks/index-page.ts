import { block } from "@keystatic/core/content-components";
import { fields, singleton } from "@keystatic/core";
import {
  sectionWrapper,
  heroSectionWrapper,
  getHeroBlock,
} from "./common/sections";
import {
  experience,
  experienceItem,
  projectItem,
  projects,
  coreStrengths,
  recentTraining,
  whatIAmLookingFor,
} from "./common/work";

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
  hero: getHeroBlock({ imagePath: "src/assets/images/index" }),
  experience,
  experienceItem,
  skills,
  projects,
  projectItem,
  coreStrengths,
  recentTraining,
  whatIAmLookingFor,
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
