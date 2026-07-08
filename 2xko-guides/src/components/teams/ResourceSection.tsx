"use client";


import { useState } from "react";

import ResourceForm from "@/components/resources/ResourceForm";
import TeamResourceList from "./TeamResourceList";

import { Resource } from "@/types/resource";


export default function ResourceSection({
  resources,
}: {
  resources: Resource[];
}) {


  const [showForm, setShowForm] =
    useState(false);



  return (

    <section className="space-y-4">


      <div className="
        flex
        justify-between
        items-center
      ">


        <h2 className="text-xl font-bold">
          Resources
        </h2>



        <button

          onClick={() =>
            setShowForm(!showForm)
          }

          className="
            bg-blue-600
            px-4
            py-2
            rounded
          "

        >

          {showForm
            ? "Cancel"
            : "Add Resource"
          }

        </button>


      </div>



      {showForm && (
        <ResourceForm />
      )}



      <TeamResourceList
        resources={resources}
      />


    </section>

  );

}