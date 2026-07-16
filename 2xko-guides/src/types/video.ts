export type VideoType =
  | "youtube"
  | "twitter"
  | "medal";

export type VideoLink = {

  id: string;

  label: string;

  targetResourceId: string;

};


export type Video = {

  id: string;

  resourceId: string;

  type: VideoType;

  url: string;

  title: string | null;

  description: string | null;

  startTime: number | null;

  links: VideoLink[];

};