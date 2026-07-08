import { Resource } from "@/types/resource";
import ResourceCard from "./ResourceCard";


type Props = {
  resources: Resource[];
};


export default function ResourceList({
  resources,
}: Props) {


  const groups = [
    "combo",
    "mixup",
    "oki",
    "pressure",
    "neutral",
    "punish"
  ];



  return (

    <div className="space-y-10">


      {groups.map(type => {


        const filtered =
          resources.filter(
            r => r.type === type
          );


        if(filtered.length === 0)
          return null;



        return (

          <section key={type}>


            <h2 className="
              text-2xl
              font-bold
              capitalize
              mb-4
            ">

              {type}

            </h2>



            <div className="space-y-4">

              {filtered.map(resource => (

                <ResourceCard
                  key={resource.id}
                  resource={resource}
                />

              ))}

            </div>


          </section>

        );

      })}


    </div>

  );

}