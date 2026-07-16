import ResourceCard from "@/components/resources/ResourceCard";

import { Resource } from "@/types/resource";


type Props = {

  resources: Resource[];

  allResources: Resource[];
  
 

  onEdit: (
    resource: Resource
  ) => void;

  onDelete: (
    id:string
  ) => void;

  onMove: (
    index:number,
    direction:"up"|"down"
  ) => void;

  editingResource: Resource | null;

  onSaveEdit: (
    resource:Resource
  ) => void;

  goToResource: (
  id:string
)=>void;

 highlightedResource:string | null;


};





export default function TeamResourceList({

  resources,

  allResources,

  onEdit,

  onDelete,

  onMove,

  editingResource,

  onSaveEdit,

  goToResource,

 highlightedResource,
}:Props){


  if(resources.length === 0){

    return (

      <div className="text-zinc-500">

        This team has no resources yet.

      </div>

    );

  }







  return (

    <div className="space-y-4">


      {
        resources.map((resource,index)=>(


          <ResourceCard

            key={resource.id}

            resource={resource}

            allResources={allResources}

            index={index}

            onEdit={onEdit}

            onDelete={onDelete}

            onMove={onMove}

            editingResource={editingResource}

            onSaveEdit={onSaveEdit}

              goToResource={goToResource}

                highlightedResource={highlightedResource}


    

          />


        ))
      }


    </div>

  );

}