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
  skills,
} from "./common/work";
import { createPageSingleton } from "./common/pageSingleton";

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

// Resume page singleton definition
export const resumePageSingleton = createPageSingleton({
  label: "Resume Page",
  path: "src/content/resume-page/",
  imageDirectory: "src/assets/images/resume",
  imagePublicPath: "/src/assets/images/resume",
  components: resumePageBlocks,
});
