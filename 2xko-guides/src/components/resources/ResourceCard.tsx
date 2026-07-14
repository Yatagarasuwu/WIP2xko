"use client";

import { Resource } from "@/types/resource";

import VideoAccordian from "@/components/resources/videos/VideoAccordian";
import ResourceForm from "./ResourceForm";

type Props = {

  resource: Resource;

  allResources: Resource[];

  index: number;

  onEdit: (
    resource: Resource
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

}: Props) {

  const isEditing =
    editingResource?.id === resource.id;

  function getColors() {

    switch (resource.type) {

      case "combo":
        return {
          border: "border-l-blue-500",
          badge: "bg-blue-600",
        };

      case "mixup":
        return {
          border: "border-l-purple-500",
          badge: "bg-purple-600",
        };

      case "oki":
        return {
          border: "border-l-cyan-500",
          badge: "bg-cyan-600",
        };

      case "pressure":
        return {
          border: "border-l-orange-500",
          badge: "bg-orange-600",
        };

      case "neutral":
        return {
          border: "border-l-green-500",
          badge: "bg-green-600",
        };

      default:
        return {
          border: "border-l-zinc-600",
          badge: "bg-zinc-600",
        };

    }

  }

  const colors = getColors();

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
      p-6
      space-y-6
      shadow-sm
      `}

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

        ) : (

          <>

            <div className="space-y-4">

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

              <div>

                <h2 className="text-2xl font-bold">

                  {resource.title}

                </h2>

                <p className="
                  mt-2
                  text-zinc-400
                  leading-relaxed
                ">

                  {resource.description}

                </p>

              </div>

            </div>

            {

              resource.videos.length > 0 && (

                <div
                  className="
                  border-t
                  border-zinc-700
                  pt-5
                  "
                >

                  <VideoAccordian

                    videos={
                      resource.videos
                    }

                    allResources={
                      allResources
                    }

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
        border-zinc-700
        pt-5
        flex
        justify-between
        items-center
        "
      >

        <div className="flex gap-2">

          <button

            onClick={() =>
              onMove(index, "up")
            }

            className="
            rounded-md
            border
            border-zinc-700
            bg-zinc-800
            px-3
            py-2
            hover:bg-zinc-700
            "

          >

            ↑

          </button>

          <button

            onClick={() =>
              onMove(index, "down")
            }

            className="
            rounded-md
            border
            border-zinc-700
            bg-zinc-800
            px-3
            py-2
            hover:bg-zinc-700
            "

          >

            ↓

          </button>

        </div>

        <div className="flex gap-2">

          <button

            onClick={() =>
              onEdit(resource)
            }

            className="
            rounded-md
            bg-blue-600
            px-4
            py-2
            font-medium
            hover:bg-blue-500
            "

          >

            {isEditing ? "Editing..." : "Edit"}

          </button>

          <button

            onClick={() =>
              onDelete(resource.id)
            }

            className="
            rounded-md
            bg-red-700
            px-4
            py-2
            font-medium
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