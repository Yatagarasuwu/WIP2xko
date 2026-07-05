export type VideoType = "youtube" | "mp4" | "twitter";

export type Video = {
  id: string;
  type: VideoType;
  url: string;

  // optional features
  title?: string;
  startTime?: number; // seconds
};