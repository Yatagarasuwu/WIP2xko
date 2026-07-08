import { TeamGuide } from "@/types/team";
import Link from "next/link";

export default function TeamCard({
  team,
}: {
  team: TeamGuide;
}) {
  return (
    <Link href={`/teams/${team.id}`}>

      <div
        className="
          rounded-lg
          border
          border-zinc-800
          p-4
          hover:border-blue-500
          transition
          cursor-pointer
        "
      >

        <h2 className="text-lg font-bold">
          {team.champions.join(" + ")}
        </h2>


        <div className="mt-4 text-xs">
          Team: {team.champions.join(" + ")}
        </div>


        <div className="text-xs mt-1">
          {team.resources.length} resources
        </div>


      </div>

    </Link>
  );
}