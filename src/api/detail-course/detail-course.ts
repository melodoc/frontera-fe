const imgURL: string = window.SPA_CONFIG.IMG_URL || "";

export const detailCourseRes = {
  status: {
    code: 0,
  },
  data: {
    title: "Изучаем JS",
    id: 1,
    info: {
      authors: ["Ким Чен"],
      language: "Русский",
      lastUpdate: "7/2020",
      duration: "5ч 18м",
    },
    description:
      "Узнайте, как создать высокопроизводительное веб-приложение с помощью react. Хуки, Redux, React Routing, useContext, Fireabase и др. Узнайте, как создать высокопроизводительное веб-приложение с помощью react. Хуки, Redux, React Routing, useContext, Fireabase и др. Узнайте, как создать высокопроизводительное веб-приложение с помощью react. Хуки, Redux, React Routing, useContext, Fireabase и др.",
    videoList: [
      {
        label: "React",
        imageSrc: `${imgURL}/remote-assets/images/courses/bg-widget-m-1.jpg`,
        id: 1,
        videoSrc: "",
      },
      {
        label: "CI/CD",
        imageSrc: `${imgURL}/remote-assets/images/courses/bg-widget-m-2.jpg`,
        id: 2,
        videoSrc: "",
      },
      {
        label: "Отрисовка на стороне сервера",
        imageSrc: `${imgURL}/remote-assets/images/courses/bg-widget-m-3.jpg`,
        id: 3,
        videoSrc: "",
      },
      {
        label: "ES2021",
        imageSrc: `${imgURL}/remote-assets/images/courses/bg-widget-m-4.jpg`,
        id: 4,
        videoSrc: "",
      },
      {
        label: "git",
        imageSrc: `${imgURL}/remote-assets/images/courses/bg-widget-m-5.jpg`,
        id: 5,
        videoSrc: "",
      },
    ],
  },
};
