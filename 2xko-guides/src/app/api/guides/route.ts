import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(
  request: Request
) {

  const body = await request.json();


  const guide =
    await prisma.guide.create({

      data: {

        title: body.title,

        primaryChampion:
          body.primaryChampion,

        secondaryChampion:
          body.secondaryChampion ?? null,

      },

    });


  return NextResponse.json(guide);

}