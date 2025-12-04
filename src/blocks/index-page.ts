import { wrapper, repeating, block } from "@keystatic/core/content-components";
import { fields, singleton } from "@keystatic/core";

// Hero section block - wrapper component with title, subtitle, and image
export const hero = wrapper({
  label: "Hero Section",
  schema: {
    title: fields.text({
      label: "Title",
      description: "Main heading for the hero section",
    }),
    subtitle: fields.text({
      label: "Subtitle",
      description: "Brief description or tagline",
    }),
    image: fields.image({
      label: "Hero Image",
      directory: "src/assets/images/hero",
      publicPath: "/src/assets/images/hero",
    }),
  },
});

// Experience block - repeating component for work experience entries
export const experience = repeating({
  label: "Experience",
  children: ["experienceItem"],
  schema: {
    title: fields.text({
      label: "Section Title",
      defaultValue: "Experience",
    }),
  },
});

export const experienceItem = wrapper({
  label: "Experience Item",
  schema: {
    company: fields.text({ label: "Company" }),
    position: fields.text({ label: "Position" }),
    duration: fields.text({ label: "Duration" }),
    description: fields.text({
      label: "Description",
      multiline: true,
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

// Projects block - repeating component for portfolio projects
export const projects = repeating({
  label: "Projects",
  children: ["projectItem"],
  schema: {
    title: fields.text({
      label: "Section Title",
      defaultValue: "Projects",
    }),
  },
});

export const projectItem = wrapper({
  label: "Project Item",
  schema: {
    title: fields.text({ label: "Project Title" }),
    description: fields.text({
      label: "Description",
      multiline: true,
    }),
    link: fields.url({
      label: "Project Link",
      validation: { isRequired: false },
    }),
    technologies: fields.array(fields.text({ label: "Technology" }), {
      label: "Technologies",
      itemLabel: (item) => item.value || "New technology",
    }),
  },
});

// Export all blocks as a single object
export const indexPageBlocks = {
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
    subtitle: fields.text({
      label: "Subtitle",
      description: "Brief description or tagline for the page",
    }),
    heroImage: fields.image({
      label: "Hero Image",
      directory: "src/assets/images/hero",
      publicPath: "/src/assets/images/hero",
      validation: { isRequired: false },
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
});
