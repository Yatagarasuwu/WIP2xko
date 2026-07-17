import Link from "next/link";

import { prisma } from "@/lib/prisma";

import TeamList from "@/components/teams/TeamList";

export default async function Home() {


  const guides =
    await prisma.guide.findMany({

      include:{
        resources:true,
      },

      orderBy:{
        createdAt:"desc",
      },

    });



  return (

    <main
      className="
      max-w-6xl
      mx-auto
      p-8
      space-y-10
      "
    >


      <section
        className="
        space-y-4
        "
      >


        <h1
          className="
          text-5xl
          font-bold
          "
        >
          2XRepo
        </h1>



        <p
          className="
          text-lg
          text-zinc-400
          max-w-2xl
          "
        >
          Create, organize, and share
          2XKO team guides with combos,
          mixups, pressure, neutral,
          and video resources.
        </p>



        <Link

          href="/teams/create"

          className="
          inline-block
          rounded-lg
          bg-blue-600
          px-6
          py-3
          font-semibold
          hover:bg-blue-500
          "

        >
          Create Guide
        </Link>


      </section>





      <section>

  <h2
    className="
    text-2xl
    font-bold
    mb-4
    "
  >
    Guides
  </h2>


  <TeamList
    teams={guides}
  />


</section>



    </main>

  );

}