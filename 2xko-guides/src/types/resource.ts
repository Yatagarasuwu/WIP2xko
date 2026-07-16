import { Video } from "./video";

export type ResourceType =
  | "combo"
  | "mixup"
  | "oki"
  | "pressure"
  | "neutral"
  | "flash";

export type Resource = {

  id: string;

  guideId: string;

  title: string;

  type: ResourceType;

  description: string;

  order: number;

  videos: Video[];

};