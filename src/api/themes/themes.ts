export const themesRes = {
  status: {
    code: 0,
  },
  themes: [
    {
      name: "HTML",
      checked: true,
    },
    {
      name: "CSS",
      checked: false,
    },
    {
      name: "JavaScript",
      checked: false,
    },
    {
      name: "git",
      checked: true,
    },
    {
      name: "webpack",
      checked: false,
    },
    {
      name: "TypeScript",
      checked: false,
    },
  ],
};

export const themesErr = {
  status: {
    code: 2,
  },
  errors: [
    {
      field: "suggestions",
      text: "Failed to set values",
    },
  ],
};
