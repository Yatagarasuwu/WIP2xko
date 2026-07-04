import { CharacterId } from "./champion";
import { Video } from "./video";

export type ResourceType =
  | "combo"
  | "mixup"
  | "oki"
  | "neutral"
  | "pressure"
  | "punish";

export interface Resource {
  id: string;

  title: string;

  description: string;

  type: ResourceType;

  characters: CharacterId[];

  tags: string[];

  videos: Video[];
}