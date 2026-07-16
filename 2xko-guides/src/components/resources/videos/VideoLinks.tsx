"use client";

import { Resource } from "@/types/resource";
import { VideoLink } from "@/types/video";


type Props = {

  links: VideoLink[];

  allResources: Resource[];

  goToResource: (
    id:string
  )=>void;

 

};



export default function VideoLinks({

  links,

  allResources,

  goToResource,

 

}: Props) {



  if(!links || links.length === 0){

    return null;

  }





function jumpToResource(id:string){

 
   goToResource(id);

}







  function getTypeColor(type:string){


    switch(type){


      case "combo":

        return "bg-blue-600";


      case "mixup":

        return "bg-purple-600";


      case "oki":

        return "bg-cyan-600";


      case "pressure":

        return "bg-orange-600";


      case "neutral":

        return "bg-green-600";


      case "flash":

        return "bg-yellow-600";


      default:

        return "bg-zinc-600";

    }

  }








  return (

    <div className="space-y-3">



      <h4 className="

        text-sm

        font-bold

        text-zinc-300

        uppercase

        tracking-wide

      ">

        Related Resources

      </h4>







      <div className="space-y-2">


        {
          links.map(link=>{


            const resource =
              allResources.find(

                r =>
                r.id === link.targetResourceId

              );



            if(!resource){

              return null;

            }





            return (

              <button


                key={link.id}


                onClick={() =>
                  jumpToResource(
                    resource.id
                  )
                }



                className="

                w-full

                flex

                items-center

                justify-between

                rounded-lg

                border

                border-zinc-700

                bg-zinc-950

                px-3

                py-2

                text-left

                transition

                hover:border-zinc-500

                hover:bg-zinc-800

                "

              >





                <div className="flex items-center gap-3">



                  <span className="

                    text-blue-400

                    text-lg

                  ">

                    →

                  </span>





                  <div>


                    <p className="

                      text-sm

                      font-medium

                      text-white

                    ">


                      {
                        link.label ||
                        resource.title
                      }


                    </p>


                    <p className="

                      text-xs

                      text-zinc-500

                    ">

                      Jump to resource

                    </p>


                  </div>



                </div>







                <span

                  className={`

                  rounded-md

                  px-2

                  py-1

                  text-xs

                  font-bold

                  uppercase

                  text-white

                  ${getTypeColor(resource.type)}

                  `}

                >

                  {resource.type}

                </span>





              </button>


            );


          })

        }


      </div>


    </div>

  );


}