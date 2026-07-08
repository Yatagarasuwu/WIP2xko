import { notFound } from "next/navigation";

import { champions } from "@/data/champions";
import { resources } from "@/data/resources";

import ResourceSection from "@/components/teams/ResourceSection";
import TeamHeader from "@/components/teams/TeamHeader";


export default async function TeamPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {


  const { id } = await params;


  const parts = id.split("-");


  const championIds = parts.slice(0, 2);



  const selectedChampions = champions.filter(
    (champ) =>
      championIds.includes(champ.id)
  );



  if (selectedChampions.length !== 2) {
    notFound();
  }



  const teamResources = resources.filter(
    () => false
  );



  return (

    <main className="p-8 space-y-8">


      <TeamHeader

        team={{
          id,
          champions: championIds,
          resources: []
        }}

        champions={selectedChampions}

      />



      <ResourceSection
        resources={teamResources}
      />


    </main>

  );
}