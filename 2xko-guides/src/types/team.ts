import { Resource } from "./resource";

export type TeamGuide = {

  id: string;

  title: string;

  champions: string[];

  resources: Resource[];

};