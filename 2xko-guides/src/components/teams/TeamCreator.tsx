"use client";


import { useRouter } from "next/navigation";
import { useState } from "react";

import { champions } from "@/data/champions";


export default function TeamCreator(){

  const router = useRouter();


  const [selected,setSelected] =
    useState<string[]>([]);



  function toggleChampion(id:string){

    if(selected.includes(id)){

      setSelected(
        selected.filter(
          c => c !== id
        )
      );

      return;
    }


    if(selected.length < 2){

      setSelected([
        ...selected,
        id
      ]);

    }

  }



  function createTeam(){

    if(selected.length !== 2){

      alert("Select exactly 2 champions");

      return;
    }


    const id =
      `${selected[0]}-${selected[1]}-${Date.now()}`;


    router.push(
      `/teams/${id}`
    );

  }




  return (

    <div className="space-y-6">


      <h1 className="text-2xl font-bold">
        Create Team Guide
      </h1>



      <div className="
        grid
        grid-cols-4
        gap-4
      ">


        {champions.map(champ => (

          <button

            key={champ.id}

            onClick={() =>
              toggleChampion(champ.id)
            }


            className={`
              border
              rounded
              overflow-hidden

              ${
                selected.includes(champ.id)
                ?
                "border-blue-500"
                :
                "border-zinc-800"
              }

            `}

          >


            <img

              src={champ.image}

              className="
                aspect-square
                object-cover
              "

            />


            <p className="p-2">
              {champ.name}
            </p>


          </button>

        ))}


      </div>



      <div>

        Selected:

        {
          selected.join(" + ")
        }

      </div>




      <button

        onClick={createTeam}

        className="
          bg-blue-600
          px-4
          py-2
          rounded
        "

      >

        Create Team

      </button>



    </div>

  );

}