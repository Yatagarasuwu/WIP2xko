import Link from "next/link";

import { prisma } from "@/lib/prisma";

export default async function Home() {

  const guides =
    await prisma.guide.findMany({

      include: {
        resources: true,
      },

      orderBy: {
        createdAt: "desc",
      },

    });

  return (

    <main className="max-w-6xl mx-auto p-8 space-y-10">

      <section className="space-y-4">

        <h1 className="text-5xl font-bold">

          2XKO Guides

        </h1>

        <p className="text-lg text-zinc-400 max-w-2xl">

          Create your own guides for solo champions or team duos.
          Organize combos, mixups, pressure, neutral, and video demonstrations
          all in one place.

        </p>

        <div className="flex gap-4">

          <Link

            href="/teams/create"

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

          </Link>

        </div>

      </section>

      <section className="space-y-4">

        <h2 className="text-2xl font-bold">

          Existing Guides

        </h2>

        {

          guides.length === 0 && (

            <p className="text-zinc-500">

              No guides created yet.

            </p>

          )

        }

        <div className="grid gap-4">

          {guides.map((guide) => (

            <Link

              key={guide.id}

              href={`/teams/${guide.id}`}

              className="
              rounded-xl
              border
              border-zinc-700
              bg-zinc-900
              p-5
              hover:border-blue-500
              transition-colors
              "

            >

              <h3 className="text-xl font-semibold">

                {guide.title}

              </h3>

              <p className="mt-2 text-zinc-400">

                {

                  guide.secondaryChampion

                    ? `${guide.primaryChampion} + ${guide.secondaryChampion}`

                    : guide.primaryChampion

                }

              </p>

              <p className="mt-4 text-sm text-zinc-500">

                {guide.resources.length} resources

              </p>

            </Link>

          ))}

        </div>

      </section>

    </main>

  );

}