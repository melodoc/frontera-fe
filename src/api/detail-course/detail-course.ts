import { Data } from 'interfaces/interfaces';

const imgURL: string = window.SPA_CONFIG.IMG_URL || '';

export const detailCourseRes = {
  id: '1',
  title: 'Изучаем JS',
  description:
    'Узнайте, как создать высокопроизводительное веб-приложение с помощью react. Хуки, Redux, React Routing, useContext, Fireabase и др. Узнайте, как создать высокопроизводительное веб-приложение с помощью react. Хуки, Redux, React Routing, useContext, Fireabase и др. Узнайте, как создать высокопроизводительное веб-приложение с помощью react. Хуки, Redux, React Routing, useContext, Fireabase и др.',
  info: {
    authors: ['Ким Чен'],
    language: 'Русский',
    lastUpdate: '7/2020',
    duration: '5ч 18м',
  },
  videoList: [
    {
      id: '1',
      label: 'React',
      imageSrc: `${imgURL}/remote-assets/images/courses/bg-widget-m-1.jpg`,
      videoSrc: '',
    },
    {
      id: '2',
      label: 'CI/CD',
      imageSrc: `${imgURL}/remote-assets/images/courses/bg-widget-m-2.jpg`,
      videoSrc: '',
    },
    {
      id: '3',
      label: 'Отрисовка на стороне сервера',
      imageSrc: `${imgURL}/remote-assets/images/courses/bg-widget-m-3.jpg`,
      videoSrc: '',
    },
    {
      id: '4',
      label: 'ES2021',
      imageSrc: `${imgURL}/remote-assets/images/courses/bg-widget-m-4.jpg`,
      videoSrc: '',
    },
    {
      id: '5',
      label: 'git',
      imageSrc: `${imgURL}/remote-assets/images/courses/bg-widget-m-5.jpg`,
      videoSrc: '',
    },
  ],
} as Data;
