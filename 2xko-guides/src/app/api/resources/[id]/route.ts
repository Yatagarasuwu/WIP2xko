import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

 



export async function PUT(

  request: Request,

  {
    params
  }: {
    params: Promise<{id:string}>
  }

){


  const { id } = await params;


  const body = await request.json();



  try {


    const updatedResource =
      await prisma.resource.update({

        where:{
          id
        },


        data:{

          title:
            body.title,


          type:
            body.type,


          description:
            body.description,


          videos:{

            deleteMany:{},

            create:
  body.videos.map((video: any) => ({

    type: video.type,

    url: video.url,

    title: video.title || null,

    description: video.description || null,

    links: {

      create:
        (video.links ?? [])
          .filter((link: any) => link.targetResourceId)
          .map((link: any) => ({

            targetResourceId: link.targetResourceId,

            label: link.label,

          }))

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
      updatedResource
    );


  } catch(error){


    console.error(error);


    return NextResponse.json(

      {
        error:"Failed to update resource"
      },

      {
        status:500
      }

    );


  }


}

export async function DELETE(

  request: Request,

  {
    params
  }: {
    params: Promise<{id:string}>
  }

){

  const { id } = await params;


  try {


    await prisma.resource.delete({

      where:{
        id
      }

    });


    return NextResponse.json({

      success:true

    });


  } catch(error){


    console.error(error);


    return NextResponse.json(

      {
        error:"Failed to delete resource"
      },

      {
        status:500
      }

    );

  }

}