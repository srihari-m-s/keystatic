import { fields } from "@keystatic/core";
import { block, wrapper } from "@keystatic/core/content-components";

export const sectionWrapper = wrapper({
  label: "Section Wrapper",
  schema: {},
});

export const heroSectionWrapper = wrapper({
  label: "Hero Section Wrapper",
  schema: {},
});

// Hero section block - wrapper component with title, subtitle, and image
export const getHeroBlock = ({ imagePath }: { imagePath: string }) =>
  block({
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
        directory: imagePath,
        publicPath: `/${imagePath}`,
      }),
      cta: fields.array(
        fields.object({
          label: fields.text({ label: "Button label" }),
          link: fields.text({ label: "Button link" }),
        }),
        {
          label: "Call to Action Buttons",
          itemLabel: (item) => item.fields.label.value || "New button",
          validation: { length: { min: 0, max: 2 } },
        }
      ),
    },
  });
