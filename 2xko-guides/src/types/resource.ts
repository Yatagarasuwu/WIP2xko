import { Video } from "./video";


export type ResourceType =
  | "combo"
  | "mixup"
  | "oki"
  | "pressure"
  | "neutral";



export type Resource = {

  id:string;

  title:string;

  championId:string;

  type:ResourceType;

  description:string;

  tags:string[];

  videos:Video[];

};