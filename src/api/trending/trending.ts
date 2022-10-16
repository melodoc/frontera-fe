import { Card } from 'interfaces/interfaces';

const imgURL: string = window.SPA_CONFIG.IMG_URL || '';

export const trendingRes = {
  status: {
    code: 0
  },
  themes: [
    {
      id: '1',
      label: 'Ресурсы',
      imageSrc: `${imgURL}/remote-assets/images/courses/bg-widget-m-1.jpg`
    },
    {
      id: '2',
      label: 'Angular',
      imageSrc: `${imgURL}/remote-assets/images/courses/bg-widget-m-2.jpg`
    },
    {
      id: '3',
      label: 'SSR',
      imageSrc: `${imgURL}/remote-assets/images/courses/bg-widget-m-3.jpg`
    },
    {
      id: '4',
      label: 'Web-дизайн',
      imageSrc: `${imgURL}/remote-assets/images/courses/bg-widget-m-4.jpg`
    },
    {
      id: '5',
      label: 'Сети',
      imageSrc: `${imgURL}/remote-assets/images/courses/bg-widget-m-5.jpg`
    }
  ] as Array<Card>
};

export const trendingErr = {
  status: {
    code: 2
  },
  errors: [
    {
      field: 'trending',
      text: 'Failed to set values'
    }
  ]
};
