"use client";

import { useState } from "react";

import ResourceFilters from "@/components/resources/ResourceFilters";
import ResourceForm from "@/components/resources/ResourceForm";
import TeamResourceList from "./TeamResourceList";

import { Resource, ResourceType } from "@/types/resource";


export default function ResourceSection({
  resources,
}: {
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





  function addResource(resource: Resource) {

    setResourceList(current => [
      ...current,
      resource
    ]);

    setShowForm(false);

  }





  function deleteResource(id:string){

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





  function saveEdit(resource:Resource){

    setResourceList(current =>
      current.map(oldResource =>
        oldResource.id === resource.id
        ? resource
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

          onSave={addResource}

          availableResources={
            resourceList
          }

        />

      )}







      <ResourceFilters

        selected={filter}

        onChange={setFilter}

      />







      <TeamResourceList

        resources={filteredResources}

        onEdit={startEditing}

        onDelete={deleteResource}

        onMove={moveResource}

        editingResource={editingResource}

        onSaveEdit={saveEdit}

      />



    </section>

  );

}