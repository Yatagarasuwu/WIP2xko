export type ResourceType =
  | "combo"
  | "mixup"
  | "oki"
  | "neutral"
  | "pressure"
  | "punish";

export type Video = {
  url: string;
  label?: string;
};

export type Resource = {
  id: string;
  title: string;
  championId: string;
  type: ResourceType;
  tags: string[];
  description?: string;
  videos: Video[];
};