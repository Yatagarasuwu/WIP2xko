"use client";

import { Resource } from "@/types/resource";
import { VideoLink } from "@/types/video";

type Props = {

  links: VideoLink[];

  setLinks: (
    links: VideoLink[]
  ) => void;

  availableResources: Resource[];

};



export default function VideoLinkEditor({

  links,

  setLinks,

  availableResources,

}: Props) {



  function addLink() {

    setLinks([

      ...links,

      {

        id: crypto.randomUUID(),

        label: "",

        targetResourceId: "",

      },

    ]);

  }




  function updateLink(

    index: number,

    field: keyof VideoLink,

    value: string

  ) {

    const updated = [...links];

    updated[index] = {

      ...updated[index],

      [field]: value,

    };

    setLinks(updated);

  }




  function removeLink(index: number) {

    setLinks(

      links.filter(

        (_, i) => i !== index

      )

    );

  }




  return (

    <div className="space-y-3">

      <div className="flex items-center justify-between">

        <h4 className="font-semibold">

          Related Resources

        </h4>

        <button

          type="button"

          onClick={addLink}

          className="px-3 py-1 rounded bg-zinc-700"

        >

          + Add Link

        </button>

      </div>



      {

        links.map((link, index) => (

          <div

            key={link.id}

            className="border border-zinc-700 rounded p-3 space-y-2"

          >

            <input

              className="w-full rounded p-2 text-black"

              placeholder="Display text (ex. On Hit)"

              value={link.label}

              onChange={(e) =>

                updateLink(

                  index,

                  "label",

                  e.target.value

                )

              }

            />



            <select

              className="w-full rounded p-2 text-black"

              value={link.targetResourceId}

              onChange={(e) =>

                updateLink(

                  index,

                  "targetResourceId",

                  e.target.value

                )

              }

            >

              <option value="">

                Select Resource...

              </option>

              {

                availableResources.map(resource => (

                  <option

                    key={resource.id}

                    value={resource.id}

                  >

                    {resource.title}

                  </option>

                ))

              }

            </select>



            <button

              type="button"

              onClick={() => removeLink(index)}

              className="text-red-400"

            >

              Remove Link

            </button>

          </div>

        ))

      }

    </div>

  );

}