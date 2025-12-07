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
