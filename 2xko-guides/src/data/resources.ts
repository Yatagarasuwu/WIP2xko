import { Resource } from "@/types/resource";

export const resources: Resource[] = [
  {
    id: "ekko-combo-1",
    title: "Basic Ekko BnB Combo",
    championId: "ekko",
    type: "combo",
    tags: ["bnB", "starter", "meterless"],
    description: "Simple confirm into knockdown",
    videos: [
      { url: "https://youtube.com/watch?v=example1", label: "Demo" }
    ],
  },
  {
    id: "ahri-mixup-1",
    title: "Ahri Dash Mixup Layer",
    championId: "ahri",
    type: "mixup",
    tags: ["high-low", "reset"],
    videos: [
      { url: "https://youtube.com/watch?v=example2" }
    ],
  },
];