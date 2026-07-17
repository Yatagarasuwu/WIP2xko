import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";


export async function DELETE(

  request: Request,

  {
    params,
  }: {
    params: Promise<{
      id:string;
    }>
  }

){


  const { id } = await params;



  try {


    await prisma.guide.delete({

      where:{
        id:id
      }

    });



    return NextResponse.json({

      success:true

    });


  } catch(error){


    console.error(error);



    return NextResponse.json(

      {
        error:"Failed to delete guide"
      },

      {
        status:500
      }

    );

  }

}