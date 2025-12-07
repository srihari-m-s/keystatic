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
export const resumePageBlocks = {
  sectionWrapper,
  heroSectionWrapper,
  hero: getHeroBlock({ imagePath: "src/assets/images/resume" }),
  experience,
  experienceItem,
  skills,
  projects,
  projectItem,
};

// Index page singleton definition
export const resumePageSingleton = singleton({
  label: "Resume Page",
  path: "src/content/resume-page/",
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
          directory: "src/assets/images/resume",
          publicPath: "/src/assets/images/resume",
        },
      },
      components: resumePageBlocks,
    }),
  },
  entryLayout: "content",
});
