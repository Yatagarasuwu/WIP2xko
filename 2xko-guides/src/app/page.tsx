import { teams } from "@/data/teams";
import Link from "next/link";


export default function Home() {

  return (
    <main className="p-8 space-y-6">

      <h1 className="text-3xl font-bold">
        2XKO Team Guides
      </h1>


      <p className="text-zinc-400">
        Browse team combos, mixups, and setups.
      </p>



      <div className="grid gap-4">

        {teams.map((team) => (

          <Link
            key={team.id}
            href={`/teams/${team.id}`}
            className="
              border
              border-zinc-800
              rounded-xl
              p-5
              hover:border-zinc-500
            "
          >

            <h2 className="text-xl font-bold">
              {team.champions.join(" + ")}
            </h2>


            <p className="text-sm text-zinc-400">
              {team.resources.length} resources
            </p>


          </Link>

        ))}


      </div>


    </main>
  );
}