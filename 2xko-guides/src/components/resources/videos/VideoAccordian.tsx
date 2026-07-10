"use client";

import { useState } from "react";

import { Video } from "@/types/video";

import VideoPlayer from "./VideoPlayer";

import VideoLinks from "./VideoLinks";


type Props = {

  videos:Video[];

};



export default function VideoAccordion({

  videos,

}:Props){


  const [open,setOpen] =
    useState<string | null>(null);



  if(videos.length === 0){

    return (

      <p className="text-zinc-500">

        No videos added.

      </p>

    );

  }



  return (

    <div className="space-y-3">


      <h3 className="font-bold">

        Videos

      </h3>




      {
        videos.map(video=>(


          <div

            key={video.id}

            className="
            border
            border-zinc-700
            rounded
            "

          >


            <button

              onClick={() =>
                setOpen(
                  open === video.id
                  ? null
                  : video.id
                )
              }

              className="
              w-full
              p-3
              flex
              justify-between
              "

            >

              <span>

                {
                  video.title ||
                  "Untitled Video"
                }

              </span>


              <span>

                {
                  open === video.id
                  ? "▲"
                  : "▼"
                }

              </span>


            </button>





            {
              open === video.id && (

                <div

                  className="
                  border-t
                  border-zinc-700
                  p-3
                  space-y-3
                  "

                >


                  <VideoPlayer

                    video={video}

                  />



                  {
                    video.description && (

                      <p className="text-zinc-400">

                        {video.description}

                      </p>

                    )
                  }



                  <VideoLinks

                    links={
                      video.links
                    }

                  />


                </div>

              )
            }



          </div>


        ))
      }


    </div>

  );

}