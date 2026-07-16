import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";


export async function POST(
  request: Request
) {

  try {

    const body =
      await request.json();
      console.log(
  "API RECEIVED",
  JSON.stringify(body, null, 2)
);


    const {
      guideId,
      title,
      type,
      description,
      videos
    } = body;



    const resource =
      await prisma.resource.create({

        data: {

          guideId,

          title,

          type,

          description,

          order: 0,


          videos:{
  create:
    videos.map((video:any)=>({

      type: video.type,

      url: video.url,

      title: video.title || null,

      description: video.description || null,


      links:{
        create:
          video.links
          ?.filter(
            (link:any)=>
              link.targetResourceId
          )
          .map((link:any)=>({

            targetResourceId:
              link.targetResourceId,

            label:
              link.label,

          })) ?? []
      }

    }))
}

        },

        include:{

  videos:{
    include:{
      links:true
    }
  }

}

      });



    return NextResponse.json(
      resource
    );


  } catch(error){

    console.error(error);


    return NextResponse.json(

      {
        error:"Failed to create resource"
      },

      {
        status:500
      }

    );

  }

}