import { notFound } from "next/navigation";

import { champions } from "@/data/champions";
import { prisma } from "@/lib/prisma";

import ResourceSection from "@/components/teams/ResourceSection";
import TeamHeader from "@/components/teams/TeamHeader";


export default async function TeamPage({

  params,

}: {

  params: Promise<{
    id:string;
  }>;

}) {


  const { id } = await params;



  const guide =
    await prisma.guide.findUnique({

      where:{
        id
      },

      include:{
        resources:{
          include:{
            videos:{
              include:{
                links:true
              }
            }
          },

          orderBy:{
            order:"asc"
          }

        }
      }

    });



  if(!guide){

    notFound();

  }



  const championIds = [

    guide.primaryChampion,

    guide.secondaryChampion

  ].filter(Boolean) as string[];



  const selectedChampions =
    champions.filter(champion =>
      championIds.includes(champion.id)
    );



  return (

    <main className="p-8 space-y-8">


      <TeamHeader

        team={{

          id:guide.id,

          title:guide.title,

          champions:championIds,

          resources:[]

        }}

        champions={selectedChampions}

      />



      <ResourceSection

        resources={
          guide.resources
        }

      />


    </main>

  );

}