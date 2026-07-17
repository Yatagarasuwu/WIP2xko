"use client";

import { Resource } from "@/types/resource";

import VideoAccordian from "@/components/resources/videos/VideoAccordian";

import ResourceForm from "./ResourceForm";


type Props = {

  resource: Resource;

  allResources: Resource[];

  index: number;

 onEdit: (
  resource: Resource | null
) => void;

  onDelete: (
    id: string
  ) => void;

  onMove: (
    index: number,
    direction: "up" | "down"
  ) => void;

  editingResource: Resource | null;

  onSaveEdit: (
    resource: Resource
  ) => void;

  goToResource: (
    id: string
  ) => void;

  highlightedResource: string | null;

};



export default function ResourceCard({

  resource,

  allResources,

  goToResource,

  index,

  onEdit,

  onDelete,

  onMove,

  editingResource,

  onSaveEdit,

  highlightedResource,

}: Props) {



  const isEditing =
    editingResource?.id === resource.id;




  function getColors() {

    switch(resource.type) {

      case "combo":

        return {
          border:"border-l-blue-500",
          badge:"bg-blue-600",
        };


      case "mixup":

        return {
          border:"border-l-purple-500",
          badge:"bg-purple-600",
        };


      case "oki":

        return {
          border:"border-l-cyan-500",
          badge:"bg-cyan-600",
        };


      case "pressure":

        return {
          border:"border-l-orange-500",
          badge:"bg-orange-600",
        };


      case "neutral":

        return {
          border:"border-l-green-500",
          badge:"bg-green-600",
        };


      case "flash":

        return {
          border:"border-l-yellow-500",
          badge:"bg-yellow-600",
        };


      default:

        return {
          border:"border-l-zinc-600",
          badge:"bg-zinc-600",
        };

    }

  }



  const colors =
    getColors();




  return (

    <div

      id={`resource-${resource.id}`}

      className={`

        rounded-xl

        border

        border-zinc-700

        border-l-4

        ${colors.border}

        bg-zinc-900

        shadow-sm

        transition-all

        duration-500


        ${
          highlightedResource === resource.id
          ? "ring-2 ring-blue-500 shadow-lg shadow-blue-500/20"
          : ""
        }

      `}

    >




      {
        isEditing ? (

          <div className="p-4">


            <ResourceForm

              guideId={resource.guideId}

              initialResource={resource}

              onSave={onSaveEdit}

              availableResources={allResources}

            />


          </div>


        ) : (

          <>


            <div

              className="
                p-4
                space-y-3
              "

            >


              <span

                className={`

                  inline-flex

                  rounded-md

                  px-2

                  py-1

                  text-xs

                  font-bold

                  uppercase

                  tracking-wider

                  text-white

                  ${colors.badge}

                `}

              >

                {resource.type}

              </span>




              <h2

                className="
                  text-xl
                  font-bold
                  text-white
                "

              >

                {resource.title || "Untitled Resource"}

              </h2>




              {
                resource.description && (

                  <p

                    className="
                      text-sm
                      text-zinc-400
                      leading-relaxed
                    "

                  >

                    {resource.description}

                  </p>

                )

              }



            </div>






            {
              resource.videos.length > 0 && (

                <div

                  className="
                    border-t
                    border-zinc-800
                    px-4
                    py-4
                  "

                >

                  <VideoAccordian

                    videos={resource.videos}

                    allResources={allResources}

                    goToResource={goToResource}

                  />


                </div>

              )

            }



          </>

        )

      }







      <div

        className="
          border-t
          border-zinc-800
          bg-zinc-900/40
          px-4
          py-3
          flex
          justify-between
          items-center
        "

      >




        <div className="flex gap-2">


          <button

            onClick={() =>
              onMove(index,"up")
            }

            className="
              h-8
              w-8
              rounded-md
              border
              border-zinc-700
              bg-zinc-800
              hover:bg-zinc-700
            "

          >

            ↑

          </button>




          <button

            onClick={() =>
              onMove(index,"down")
            }

            className="
              h-8
              w-8
              rounded-md
              border
              border-zinc-700
              bg-zinc-800
              hover:bg-zinc-700
            "

          >

            ↓

          </button>


        </div>







        <div className="flex gap-2">


          <button

            onClick={() =>
              onEdit(isEditing ? null : resource)
            }

            className="
              rounded-md
              bg-blue-600
              px-3
              py-1.5
              text-sm
              hover:bg-blue-500
            "

          >

         {isEditing ? "Cancel" : "Edit"}

          </button>






          <button

            onClick={() =>
              onDelete(resource.id)
            }

            className="
              rounded-md
              bg-red-700
              px-3
              py-1.5
              text-sm
              hover:bg-red-600
            "

          >

            Delete

          </button>


        </div>



      </div>


    </div>

  );

}