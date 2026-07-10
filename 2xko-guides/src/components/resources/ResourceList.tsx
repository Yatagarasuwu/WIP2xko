"use client";

import { Resource } from "@/types/resource";

import VideoAccordian from "@/components/resources/videos/VideoAccordian";


type Props = {

  resource: Resource;

  index:number;

  onEdit:(
    resource:Resource
  )=>void;

  onDelete:(
    id:string
  )=>void;

  onMove:(
    index:number,
    direction:"up"|"down"
  )=>void;

};




export default function ResourceCard({

  resource,

  index,

  onEdit,

  onDelete,

  onMove,

}:Props){


  return (

    <div

      className="
      border
      border-zinc-800
      rounded-lg
      p-4
      space-y-4
      "

    >



      <div>

        <h2 className="text-lg font-bold">

          {resource.title}

        </h2>



        <p className="text-sm text-zinc-400">

          {resource.description}

        </p>

      </div>






      {
        resource.videos.length > 0 && (

          <VideoAccordian

            videos={resource.videos}

          />

        )
      }








      <div className="flex gap-2">


        <button

          onClick={() =>
            onMove(
              index,
              "up"
            )
          }

          className="
          px-2
          py-1
          border
          rounded
          "

        >

          ↑

        </button>





        <button

          onClick={() =>
            onMove(
              index,
              "down"
            )
          }

          className="
          px-2
          py-1
          border
          rounded
          "

        >

          ↓

        </button>





        <button

          onClick={() =>
            onEdit(resource)
          }

          className="
          px-3
          py-1
          bg-zinc-700
          rounded
          "

        >

          Edit

        </button>





        <button

          onClick={() =>
            onDelete(
              resource.id
            )
          }

          className="
          px-3
          py-1
          bg-red-700
          rounded
          "

        >

          Delete

        </button>


      </div>


    </div>

  );

}