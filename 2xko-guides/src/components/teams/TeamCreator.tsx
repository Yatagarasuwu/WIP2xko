"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { champions } from "@/data/champions";


export default function TeamCreator() {

  const router = useRouter();


  const [guideTitle, setGuideTitle] =
    useState("");


  const [selected, setSelected] =
    useState<string[]>([]);



  function toggleChampion(id:string) {


    if (selected.includes(id)) {

      setSelected(
        selected.filter(
          champion => champion !== id
        )
      );

      return;

    }


    if (selected.length < 2) {

      setSelected([
        ...selected,
        id
      ]);

    }

  }




  async function createGuide() {


    if (selected.length === 0) {

      alert(
        "Select at least one champion."
      );

      return;

    }


    if (!guideTitle.trim()) {

      alert(
        "Enter a guide title."
      );

      return;

    }



    const response =
      await fetch("/api/guides", {

        method:"POST",

        headers:{
          "Content-Type":"application/json",
        },

        body:JSON.stringify({

          title:guideTitle,

          primaryChampion:
            selected[0],

          secondaryChampion:
            selected[1] ?? null,

        }),

      });



    if (!response.ok) {

      alert(
        "Failed to create guide."
      );

      return;

    }



    const guide =
      await response.json();



    router.push(
      `/teams/${guide.id}`
    );


  }





  return (

    <div className="max-w-5xl mx-auto space-y-8">


      <div>

        <h1 className="text-4xl font-bold">

          Create Guide

        </h1>


        <p className="text-zinc-400 mt-2">

          Create a solo champion or team guide.

        </p>

      </div>





      <div>

        <label className="font-semibold">

          Guide Title

        </label>


        <input

          value={guideTitle}

          onChange={
            e =>
            setGuideTitle(
              e.target.value
            )
          }

          placeholder="Ekko Beginner Guide"

          className="
          w-full
          mt-2
          rounded-lg
          border
          border-zinc-700
          bg-zinc-900
          p-3
          "

        />

      </div>






      <div className="space-y-3">


        <h2 className="font-semibold text-lg">

          Select Champions

        </h2>



        <div className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-5
          gap-4
        ">


          {
            champions.map(champion => {


              const active =
                selected.includes(
                  champion.id
                );


              return (

                <button


                  key={champion.id}


                  onClick={() =>
                    toggleChampion(
                      champion.id
                    )
                  }



                  className={`

                  rounded-xl
                  overflow-hidden
                  border
                  transition

                  ${
                    active

                    ? 
                    "border-blue-500 scale-105"

                    :

                    "border-zinc-700 hover:border-zinc-500"

                  }

                  `}


                >


                  <img

                    src={champion.image}

                    alt={champion.name}

                    className="
                    aspect-square
                    object-cover
                    w-full
                    "

                  />


                  <div className="
                    bg-zinc-900
                    py-2
                  ">

                    {champion.name}

                  </div>


                </button>

              );


            })

          }


        </div>


      </div>





      <div>

        <h2 className="font-semibold">

          Selected

        </h2>


        <p className="text-zinc-400">

          {
            selected.length
            ? selected.join(" + ")
            : "None"
          }

        </p>

      </div>






      <button

        onClick={createGuide}

        className="
        rounded-lg
        bg-blue-600
        px-6
        py-3
        font-semibold
        hover:bg-blue-500
        "

      >

        Create Guide

      </button>


    </div>

  );

}