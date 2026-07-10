import Link from "next/link";

import { VideoLink } from "@/types/video";


type Props = {

  links:VideoLink[];

};



export default function VideoLinks({

  links,

}:Props){


  if(links.length === 0){

    return null;

  }



  return (

    <div className="space-y-2">


      <h4 className="font-bold">

        Related

      </h4>


      {
        links.map(link=>(


          <Link

            key={link.id}

            href="#"

            className="
            block
            text-blue-400
            "

          >

            →
            {" "}
            {link.label}

          </Link>


        ))
      }


    </div>

  );

}