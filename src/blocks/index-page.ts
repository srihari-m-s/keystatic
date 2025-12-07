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
  skills,
} from "./common/work";
import { createPageSingleton } from "./common/pageSingleton";

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
export const indexPageSingleton = createPageSingleton({
  label: "Index Page",
  path: "src/content/index-page/",
  imageDirectory: "src/assets/images/index",
  imagePublicPath: "/src/assets/images/index",
  components: indexPageBlocks,
});
