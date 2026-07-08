export type VideoType =
  | "youtube"
  | "mp4"
  | "twitter";


export type Video = {

  id: string;

  type: VideoType;

  url: string;

  title?: string;

  startTime?: number;

};