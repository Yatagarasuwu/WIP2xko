"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";


type Team = {

  id: string;

  title: string;

  primaryChampion: string;

  secondaryChampion: string | null;

  resources: {
    id: string;
  }[];

};



export default function TeamList({

  teams,

}: {

  teams: Team[];

}) {


  const router = useRouter();



  async function deleteTeam(id:string){


    const confirmed =
      confirm(
        "Are you sure you want to delete this guide?"
      );


    if(!confirmed){
      return;
    }



    const response =
      await fetch(
        `/api/guides/${id}`,
        {
          method:"DELETE"
        }
      );



    if(response.ok){

      router.refresh();

    }


  }





  if(teams.length === 0){

    return (

      <p className="text-zinc-500">

        No guides created yet.

      </p>

    );

  }





  return (

    <div className="grid gap-4">


      {
        teams.map(team => (


          <div

            key={team.id}

            className="
              rounded-xl
              border
              border-zinc-700
              bg-zinc-900
              p-5
              flex
              justify-between
              items-center
              hover:border-blue-500
              transition
            "

          >



            <Link

              href={`/teams/${team.id}`}

              className="flex-1"

            >


              <h3
                className="
                  text-xl
                  font-semibold
                  text-white
                "
              >

                {team.title}

              </h3>



              <p
                className="
                  mt-2
                  text-zinc-400
                "
              >

                {
                  team.secondaryChampion
                  ?
                  `${team.primaryChampion} + ${team.secondaryChampion}`
                  :
                  team.primaryChampion
                }

              </p>



              <p
                className="
                  mt-4
                  text-sm
                  text-zinc-500
                "
              >

                {team.resources.length} resources

              </p>


            </Link>





            <button

              onClick={() =>
                deleteTeam(team.id)
              }

              className="
                ml-4
                rounded-lg
                bg-red-700
                px-4
                py-2
                text-sm
                hover:bg-red-600
              "

            >

              Delete

            </button>



          </div>


        ))

      }


    </div>

  );

}