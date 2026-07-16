import { Tweet } from "react-tweet";

import { Video } from "@/types/video";


type Props = {
  video: Video;
};


export default function VideoPlayer({
  video,
}: Props) {


  function getYoutubeId(url:string){

    try {

      const parsed = new URL(url);


      if(parsed.hostname.includes("youtu.be")){

        return parsed.pathname.slice(1);

      }


      return parsed.searchParams.get("v");

    }
    catch {

      return null;

    }

  }



  function getTweetId(url:string){

    try {

      const parsed = new URL(url);

      const parts =
        parsed.pathname.split("/");


      const statusIndex =
        parts.indexOf("status");


      if(statusIndex === -1){

        return null;

      }


      return parts[statusIndex + 1];

    }
    catch {

      return null;

    }

  }




  function getMedalId(url:string){

    try {

      const parsed =
        new URL(url);


      const match =
        parsed.pathname.match(
          /clips\/([^/]+)/
        );


      return match?.[1] ?? null;

    }
    catch {

      return null;

    }

  }





  if(video.type === "youtube") {


    const id =
      getYoutubeId(video.url);



    if(!id){

      return (
        <div className="
          border
          border-red-500
          p-3
          rounded
        ">
          Invalid YouTube URL
        </div>
      );

    }



    return (

      <div className="space-y-2">


        {video.title && (

          <h4 className="font-semibold">
            {video.title}
          </h4>

        )}



        <div className="
          aspect-video
          w-full
          max-w-xl
          mx-auto
        ">

          <iframe

            className="
              w-full
              h-full
              rounded-lg
              border
              border-zinc-800
              shadow-lg
            "

            src={
              `https://www.youtube.com/embed/${id}`
            }

            title={
              video.title ??
              "YouTube video"
            }

            allowFullScreen

          />

        </div>


      </div>

    );

  }






  if(video.type === "twitter") {


    const tweetId =
      getTweetId(video.url);



    if(!tweetId){

      return (

        <div className="
          border
          border-red-500
          p-3
          rounded
        ">
          Invalid Twitter URL
        </div>

      );

    }



    return (

      <div className="
        max-w-xl
        mx-auto
      ">

        <Tweet id={tweetId} />

      </div>

    );

  }






  if(video.type === "medal") {


    const medalId =
      getMedalId(video.url);



    if(!medalId){

      return (

        <div className="
          border
          border-red-500
          p-3
          rounded
        ">
          Invalid Medal URL
        </div>

      );

    }



    return (

      <div className="
        aspect-video
        w-full
        max-w-xl
        mx-auto
      ">

        <iframe

          className="
            w-full
            h-full
            rounded-lg
            border
            border-zinc-800
            shadow-lg
          "

          src={
            `https://medal.tv/clip/${medalId}`
          }

          title={
            video.title ??
            "Medal clip"
          }

          allowFullScreen

        />

      </div>

    );

  }





  return (

    <div className="
      border
      border-zinc-700
      p-3
      rounded
    ">

      Unsupported video type

    </div>

  );

}