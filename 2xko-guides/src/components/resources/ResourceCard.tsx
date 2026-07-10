"use client";

import { Resource } from "@/types/resource";

import ResourceForm from "./ResourceForm";

import VideoAccordian from "@/components/resources/videos/VideoAccordian";


type Props = {

  resource: Resource;

  allResources: Resource[];

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


  editingResource:Resource | null;


  onSaveEdit:(
    resource:Resource
  )=>void;

};





export default function ResourceCard({

  resource,

  allResources,

  index,

  onEdit,

  onDelete,

  onMove,

  editingResource,

  onSaveEdit,

}:Props){



  const isEditing =
    editingResource?.id === resource.id;



  return (

    <div

      id={`resource-${resource.id}`}

      className="
      border
      border-zinc-800
      rounded-lg
      p-4
      space-y-4
      "

    >





      {
        isEditing ? (

          <ResourceForm

            initialResource={
              resource
            }

            onSave={
              onSaveEdit
            }

            availableResources={
              allResources
            }

          />

        )
        :
        (

          <>


            <h2 className="text-lg font-bold">

              {resource.title}

            </h2>





            <p className="text-sm text-zinc-400">

              {resource.description}

            </p>









            {
              resource.videos.length > 0 && (

                <VideoAccordian

                  videos={
                    resource.videos
                  }

                />

              )
            }



          </>

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

          {
            isEditing
            ? "Editing..."
            : "Edit"
          }

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