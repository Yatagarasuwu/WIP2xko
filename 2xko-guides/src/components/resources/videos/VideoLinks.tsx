"use client";

import { Resource } from "@/types/resource";
import { VideoLink } from "@/types/video";


type Props = {

  links:VideoLink[];

  allResources:Resource[];

};



export default function VideoLinks({

  links,

  allResources,

}:Props){



  if(links.length === 0){

    return null;

  }





  function jumpToResource(id:string){

    const element =
      document.getElementById(
        `resource-${id}`
      );


    if(element){

      element.scrollIntoView({
        behavior:"smooth",
        block:"start"
      });

    }

  }







  return (

    <div className="space-y-2">


      <h4 className="font-bold text-sm">

        Related Resources

      </h4>





      {
        links.map(link => {


          const resource =
            allResources.find(
              r =>
              r.id === link.targetResourceId
            );



          if(!resource)
            return null;





          return (

            <button

              key={link.id}

              onClick={() =>
                jumpToResource(
                  resource.id
                )
              }

              className="
              text-blue-400
              hover:underline
              block
              "

            >

              →
              {" "}
              {link.label || resource.title}

            </button>

          );


        })
      }


    </div>

  );

}