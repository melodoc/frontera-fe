export interface Card {
  id: string;
  label: string;
  imageSrc: string;
}

export interface CourseTheme {
  id: string;
  name: string;
  checked: boolean;
}

export interface Info {
  authors: Array<string>;
  language: string;
  lastUpdate: string;
  duration: string;
}

export interface Video {
  id: string;
  label: string;
  imageSrc: string;
  videoSrc: string;
}

export interface Data {
  id: string;
  title: string;
  description: string;
  info: Info;
  videoList: Array<Video>;
}
export interface User {
  login: string;
  password: string;
  email?: string;
}

export interface Course {
  id: string;
  label: string;
  imageSrc: string;
}
