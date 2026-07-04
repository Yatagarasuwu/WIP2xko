import { CharacterId } from "./champion";

export interface Board {

  id: string;

  title: string;

  description: string;

  owner: string;

  team: CharacterId[];

  resourceIds: string[];

  isPublic: boolean;
}