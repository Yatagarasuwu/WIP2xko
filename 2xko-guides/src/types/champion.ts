
export type CharacterId =
  | "ahri"
  | "akali"
  | "blitzcrank"
  | "braum"
  | "caitlyn"
  | "darius"
  | "ekko"
  | "illaoi"
  | "jinx"
  | "senna"
  | "teemo"
  | "thresh"
  | "vi"
  | "warwick"
  | "yasuo";

export interface Champion {
  id: CharacterId;
  name: string;
  image: string;
}