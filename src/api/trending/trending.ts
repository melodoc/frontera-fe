const imgURL: string = window.SPA_CONFIG.IMG_URL || "";

export const trendingRes = {
  status: {
    code: 0,
  },
  themes: [
    {
      label: "Ресурсы",
      imageSrc: `${imgURL}/remote-assets/images/courses/bg-widget-m-1.jpg`,
    },
    {
      label: "Angular",
      imageSrc: `${imgURL}/remote-assets/images/courses/bg-widget-m-2.jpg`,
    },
    {
      label: "SSR",
      imageSrc: `${imgURL}/remote-assets/images/courses/bg-widget-m-3.jpg`,
    },
    {
      label: "Web-дизайн",
      imageSrc: `${imgURL}/remote-assets/images/courses/bg-widget-m-4.jpg`,
    },
    {
      label: "Сети",
      imageSrc: `${imgURL}/remote-assets/images/courses/bg-widget-m-5.jpg`,
    },
  ],
};

export const trendingErr = {
  status: {
    code: 2,
  },
  errors: [
    {
      field: "trending",
      text: "Failed to set values",
    },
  ],
};
