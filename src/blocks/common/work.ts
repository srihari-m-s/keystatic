import { fields } from "@keystatic/core";
import { block, repeating } from "@keystatic/core/content-components";

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

export const experienceItem = block({
  label: "Experience Item",
  schema: {
    company: fields.text({ label: "Company" }),
    position: fields.text({ label: "Position" }),
    duration: fields.text({ label: "Duration" }),
    description: fields.text({
      label: "Description",
      multiline: true,
    }),
    isPresent: fields.checkbox({
      label: "Currently Working Here",
      defaultValue: false,
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

export const projectItem = block({
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

// Core Strengths block - single block with editable strengths list
export const coreStrengths = block({
  label: "Core Strengths",
  schema: {
    title: fields.text({
      label: "Section Title",
      defaultValue: "Core Strengths",
    }),
    items: fields.array(fields.text({ label: "Strength" }), {
      label: "Strengths",
      itemLabel: (item) => item.value || "New strength",
    }),
  },
});

// Recent Training & Applied Work block
export const recentTraining = block({
  label: "Recent Training & Applied Work",
  schema: {
    title: fields.text({
      label: "Section Title",
      defaultValue: "Recent Training & Applied Work",
    }),
    description: fields.text({
      label: "Description",
      multiline: true,
    }),
    items: fields.array(fields.text({ label: "Item" }), {
      label: "Recent Work Items",
      itemLabel: (item) => item.value || "New item",
    }),
  },
});

// What I am looking for block
export const whatIAmLookingFor = block({
  label: "What I am looking for",
  schema: {
    title: fields.text({
      label: "Section Title",
      defaultValue: "What I am looking for",
    }),
    badges: fields.array(fields.text({ label: "Badge" }), {
      label: "Badges",
      itemLabel: (item) => item.value || "New badge",
    }),
    description: fields.text({
      label: "Description",
      multiline: true,
    }),
  },
});
