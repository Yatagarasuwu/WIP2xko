import { Video } from "@/types/video";


type Props = {
  video: Video;
};


export default function VideoPlayer({
  video,
}: Props) {


  function getYoutubeId(url:string){

    try {

      const parsed =
        new URL(url);


      if(parsed.hostname.includes("youtu.be")){

        return parsed.pathname.slice(1);

      }


      return parsed.searchParams.get("v");

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
max-w-2xl
">

          <iframe

            className="
w-full
h-full
rounded-lg
border
border-zinc-800
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




  if(video.type === "mp4"){


    return (

      <div className="space-y-2">


        {video.title && (

          <h4 className="font-semibold">

            {video.title}

          </h4>

        )}



        <video

          controls

          className="
          w-full
          rounded-lg
          "

        >

          <source

            src={video.url}

            type="video/mp4"

          />


          Your browser does not support video.

        </video>


      </div>

    );

  }





  if(video.type === "twitter"){


    return (

      <div

        className="
        border
        border-zinc-800
        rounded-lg
        p-4
        space-y-2
        "

      >

        {video.title && (

          <h4 className="font-semibold">

            {video.title}

          </h4>

        )}



        <p className="text-sm text-zinc-400">

          Twitter/X video

        </p>



        <a

          href={video.url}

          target="_blank"

          rel="noopener noreferrer"

          className="
          text-blue-400
          underline
          "

        >

          Open Tweet

        </a>


      </div>

    );

  }




  return null;

}