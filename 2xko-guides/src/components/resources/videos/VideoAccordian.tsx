"use client";

import { useState } from "react";

import { Video } from "@/types/video";

import VideoPlayer from "./VideoPlayer";

import { Resource } from "@/types/resource";

import VideoLinks from "./VideoLinks";


type Props = {

  videos: Video[];

  allResources: Resource[];

   clearFilter: () => void;

};



export default function VideoAccordion({

  videos,

  allResources,

  clearFilter,

}: Props) {


  const [open,setOpen] =
    useState<string | null>(null);



  function getVideoType(video: Video) {


    switch(video.type) {


      case "youtube":

        return {
          label:"YouTube",
          color:"bg-red-600"
        };


      case "twitter":

        return {
          label:"X",
          color:"bg-black border border-zinc-700"
        };


      case "medal":

        return {
          label:"Medal",
          color:"bg-purple-600"
        };


      default:

        return {
          label:"Video",
          color:"bg-zinc-600"
        };

    }

  }





  if(videos.length === 0){

    return (

      <p className="text-zinc-500">

        No videos added.

      </p>

    );

  }





  return (

    <div className="space-y-4">



      <div className="flex items-center gap-2">

        <h3 className="text-lg font-bold text-white">

          Videos

        </h3>


        <span className="
          rounded-full
          bg-zinc-800
          px-2
          py-0.5
          text-xs
          text-zinc-400
        ">

          {videos.length}

        </span>


      </div>





      {
        videos.map(video=>{


          const isOpen =
            open === video.id;


          const type =
            getVideoType(video);



          return (

            <div

              key={video.id}

              className={`

              overflow-hidden

              rounded-xl

              border

              transition

              ${
                isOpen
                ?
                "border-zinc-500 bg-zinc-900"
                :
                "border-zinc-700 bg-zinc-950 hover:border-zinc-500"

              }

              `}

            >





              <button

                onClick={() =>
                  setOpen(
                    isOpen
                    ? null
                    : video.id
                  )
                }


                className="

                w-full

                flex

                items-center

                justify-between

                gap-4

                p-4

                text-left

                "

              >



                <div className="
                  flex
                  items-center
                  gap-3
                ">


                  <span

                    className={`

                    rounded-md

                    px-2

                    py-1

                    text-xs

                    font-bold

                    text-white

                    ${type.color}

                    `}

                  >

                    {type.label}

                  </span>





                  <span className="

                    font-semibold

                    text-white

                  ">


                    {
                      video.title ||
                      "Untitled Video"
                    }


                  </span>


                </div>





                <span className="

                  text-zinc-400

                  text-lg

                ">


                  {
                    isOpen
                    ?
                    "−"
                    :
                    "+"
                  }


                </span>


              </button>







              {
                isOpen && (


                  <div

                    className="

                    border-t

                    border-zinc-800

                    p-5

                    space-y-5

                    bg-zinc-900/50

                    "

                  >




                    <VideoPlayer

                      video={video}

                    />






                    {
                      video.description && (

                        <div>

                          <h4 className="

                            mb-1

                            text-sm

                            font-semibold

                            text-zinc-300

                          ">

                            Notes

                          </h4>


                          <p className="

                            text-sm

                            text-zinc-400

                            leading-relaxed

                          ">

                            {video.description}

                          </p>


                        </div>

                      )

                    }







                    <VideoLinks

                      links={video.links}

                      allResources={allResources}
                      
                       clearFilter={clearFilter}

                    />




                  </div>


                )

              }





            </div>


          );


        })

      }



    </div>

  );


}