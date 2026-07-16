"use client";

import { useState } from "react";

import ResourceFilters from "@/components/resources/ResourceFilters";
import ResourceForm from "@/components/resources/ResourceForm";
import TeamResourceList from "./TeamResourceList";

import { Resource, ResourceType } from "@/types/resource";


export default function ResourceSection({

  guideId,

  resources,

}: {

  guideId: string;

  resources: Resource[];

}) {


  const [showForm, setShowForm] =
    useState(false);



  const [resourceList, setResourceList] =
    useState<Resource[]>(resources);



  const [editingResource, setEditingResource] =
    useState<Resource | null>(null);



  const [filter, setFilter] =
    useState<"all" | ResourceType>("all");





  async function addResource(resource: Resource) {

    console.log(
    "RESOURCE SECTION RECEIVED",
    JSON.stringify(resource, null, 2)
  ); 
  const response =
    await fetch("/api/resources", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({

        guideId,

        title: resource.title,

        type: resource.type,

        description: resource.description,


        videos: resource.videos.map(video => ({

          type: video.type,

          url: video.url,

          title: video.title ?? null,

          description: video.description ?? null,


          links: video.links.map(link => ({

            label: link.label,

            targetResourceId:
              link.targetResourceId

          }))

        }))

      })

    });


  const saved =
    await response.json();


  setResourceList(current => [

    ...current,

    saved

  ]);


  setShowForm(false);

}





  async function deleteResource(id:string){


  await fetch(
    `/api/resources/${id}`,
    {
      method:"DELETE"
    }
  );


  setResourceList(current =>
    current.filter(
      resource =>
        resource.id !== id
    )
  );


}





  function startEditing(resource:Resource){

    setEditingResource(resource);

  }




async function saveEdit(resource:Resource){


  const response =
    await fetch(
      `/api/resources/${resource.id}`,
      {

        method:"PUT",

        headers:{
          "Content-Type":"application/json"
        },

        body: JSON.stringify({

  title: resource.title,

  type: resource.type,

  description: resource.description,


  videos: resource.videos.map(video => ({

    type: video.type,

    url: video.url,

    title: video.title ?? null,

    description: video.description ?? null,


    links: video.links.map(link => ({

      label: link.label,

      targetResourceId:
        link.targetResourceId

    }))

  }))

})

      }
    );



  const updated =
    await response.json();



  setResourceList(current =>

    current.map(oldResource =>

      oldResource.id === updated.id

      ? updated

      : oldResource

    )

  );



  setEditingResource(null);


}





  function moveResource(
    index:number,
    direction:"up"|"down"
  ){

    setResourceList(current => {

      const updated =
        [...current];


      const newIndex =
        direction === "up"
        ? index - 1
        : index + 1;



      if(
        newIndex < 0 ||
        newIndex >= updated.length
      ){

        return current;

      }



      [
        updated[index],
        updated[newIndex]
      ] =
      [
        updated[newIndex],
        updated[index]
      ];



      return updated;

    });

  }



function clearFilter(){

  setFilter("all");

}



  const filteredResources =
    resourceList.filter(resource =>

      filter === "all"
      ||
      resource.type === filter

    );







  return (

    <section className="space-y-4">


      <div className="flex justify-between items-center">


        <h2 className="text-xl font-bold">
          Resources
        </h2>



        <button

          onClick={() =>
            setShowForm(
              current => !current
            )
          }

          className="
          bg-blue-600
          px-4
          py-2
          rounded
          "

        >

          {
            showForm
            ? "Cancel"
            : "Add Resource"
          }

        </button>


      </div>







      {showForm && (

        <ResourceForm

  guideId={guideId}

  onSave={addResource}

  availableResources={resourceList}

/>

      )}







      <ResourceFilters

        selected={filter}

        onChange={setFilter}

      />







    <TeamResourceList

  resources={filteredResources}

  allResources={resourceList}

  clearFilter={clearFilter}

  onEdit={startEditing}

  onDelete={deleteResource}

  onMove={moveResource}

  editingResource={editingResource}

  onSaveEdit={saveEdit}

/>



    </section>

  );

}