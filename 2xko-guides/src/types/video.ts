export type VideoType =
  | "youtube"
  | "twitter";


export type VideoLink = {

  id:string;

  label:string;

  targetResourceId:string;

};



export type Video = {

  id:string;

  type:VideoType;

  url:string;

  title?:string;

  description?:string;

  startTime?:number;

  links:VideoLink[];

};