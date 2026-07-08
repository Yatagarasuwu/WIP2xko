import { Resource } from "@/types/resource";


export const resources: Resource[] = [

  {
    id: "ekko-bnb",

    title: "Ekko Meterless BnB",

    championId: "ekko",

    type: "combo",

    tags: [
      "starter",
      "meterless",
      "beginner"
    ],

    description:
      "Basic Ekko combo route after a launcher.",

    videos: [
      {
        id: "ekko-bnb-video",

        type: "youtube",

        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",

        title: "Ekko BnB Example",

        startTime: 0
      }
    ]
  },


  {
    id: "ahri-mixup",

    title: "Ahri Dash Mixup",

    championId: "ahri",

    type: "mixup",

    tags: [
      "reset",
      "left-right"
    ],

    description:
      "Basic Ahri pressure reset after knockdown.",

    videos: [
      {
        id: "ahri-mixup-video",

        type: "youtube",

        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",

        title: "Ahri Mixup Example"
      }
    ]
  },


  {
    id: "ekko-oki",

    title: "Ekko Oki Setup",

    championId: "ekko",

    type: "oki",

    tags: [
      "knockdown",
      "pressure"
    ],

    description:
      "Post-knockdown pressure setup.",

    videos: []
  }

];