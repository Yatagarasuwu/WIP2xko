"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { champions } from "@/data/champions";


export default function TeamCreator() {

  const router = useRouter();


  const [guideTitle,setGuideTitle] =
    useState("");


  const [selected,setSelected] =
    useState<string[]>([]);



  function toggleChampion(id:string) {


    if(selected.includes(id)) {

      setSelected(
        selected.filter(
          champion => champion !== id
        )
      );

      return;

    }



    if(selected.length < 2) {

      setSelected([
        ...selected,
        id
      ]);

    }

  }




  function createGuide() {


    if(selected.length === 0) {

      alert(
        "Please select at least one champion."
      );

      return;

    }



    if(!guideTitle.trim()) {

      alert(
        "Please enter a guide title."
      );

      return;

    }



    const id =
      `${selected.join("-")}-${Date.now()}`;



    router.push(
      `/teams/${id}?title=${encodeURIComponent(guideTitle)}`
    );

  }




  return (

    <div className="
      max-w-5xl
      mx-auto
      space-y-8
    ">


      <div>

        <h1 className="text-4xl font-bold">

          Create Guide

        </h1>


        <p className="text-zinc-400 mt-2">

          Create a guide for a champion or team.

        </p>

      </div>





      <div className="space-y-2">


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
          rounded-lg
          border
          border-zinc-700
          bg-zinc-900
          p-3
          outline-none
          focus:border-blue-500
          "

        />


      </div>







      <div className="space-y-3">


        <h2 className="font-semibold text-lg">

          Select Champions

        </h2>



        <p className="text-sm text-zinc-400">

          Select one champion for a solo guide, or two for a team guide.

        </p>





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
                    transition-all
                    duration-150

                    ${
                      active

                      ?

                      "border-blue-500 scale-105 shadow-lg shadow-blue-500/30"

                      :

                      "border-zinc-700 hover:border-zinc-500 hover:scale-105"

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
                    py-2
                    bg-zinc-900
                    font-medium
                  ">

                    {champion.name}

                  </div>


                </button>

              );


            })
          }


        </div>


      </div>







      <div className="space-y-2">


        <h2 className="font-semibold">

          Selected

        </h2>




        <div className="flex gap-4">


          {
            selected.length === 0 && (

              <span className="text-zinc-500">

                No champions selected

              </span>

            )
          }





          {
            selected.map(id => {


              const champion =
                champions.find(
                  c => c.id === id
                );



              if(!champion)
                return null;



              return (

                <div
                  key={id}
                  className="text-center"
                >

                  <img

                    src={champion.image}

                    alt={champion.name}

                    className="
                    w-20
                    rounded-lg
                    border
                    border-blue-500
                    "

                  />


                  <p className="mt-2 text-sm">

                    {champion.name}

                  </p>


                </div>

              );


            })
          }


        </div>


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