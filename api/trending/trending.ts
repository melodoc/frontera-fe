export const trendingRes = {
  status: {
    code: 0,
  },
  themes: [
    {
      label: 'Ресурсы',
      imageSrc: 'remote-assets/images/courses/bg-widget-m-1.jpg',
    },
    {
      label: 'Angular',
      imageSrc: 'remote-assets/images/courses/bg-widget-m-2.jpg',
    },
    {
      label: 'SSR',
      imageSrc: 'remote-assets/images/courses/bg-widget-m-3.jpg',
    },
    {
      label: 'Web-дизайн',
      imageSrc: 'remote-assets/images/courses/bg-widget-m-4.jpg',
    },
    {
      label: 'Сети',
      imageSrc: 'remote-assets/images/courses/bg-widget-m-5.jpg',
    },
  ],
};

export const trendingErr = {
  status: {
    code: 2,
  },
  errors: [
    {
      field: 'trending',
      text: 'Failed to set values',
    },
  ],
};
