export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          { value: "Personal", title: "Personal" },
          { value: "Client", title: "Client" },
          { value: "Practice", title: "Practice" },
        ],
      },
    },
    {
      name: "link",
      type: "url",
    },

    {
      name: "description",
      type: "text",
    },
    {
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
