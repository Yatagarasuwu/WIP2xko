export type VideoType = "youtube" | "twitter" | "mp4";

export interface Video {
  id: string;

  type: VideoType;

  url: string;

  startTime?: number;

  endTime?: number;
}