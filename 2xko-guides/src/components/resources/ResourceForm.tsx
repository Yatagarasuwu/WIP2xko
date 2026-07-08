"use client";

import { useState } from "react";


export default function ResourceForm() {


  const [title, setTitle] =
    useState("");

  const [type, setType] =
    useState("combo");

  const [description, setDescription] =
    useState("");

  const [video, setVideo] =
    useState("");



  return (

    <div
      className="
        border
        border-zinc-800
        rounded
        p-6
        space-y-4
      "
    >


      <h2 className="text-xl font-bold">
        Add Resource
      </h2>



      <input

        className="
          w-full
          p-2
          rounded
          text-black
        "

        placeholder="Resource title"

        value={title}

        onChange={(e) =>
          setTitle(e.target.value)
        }

      />



      <select

        className="
          w-full
          p-2
          rounded
          text-black
        "

        value={type}

        onChange={(e) =>
          setType(e.target.value)
        }

      >

        <option value="combo">
          Combo
        </option>

        <option value="mixup">
          Mixup
        </option>

        <option value="oki">
          Oki
        </option>

        <option value="pressure">
          Pressure
        </option>

        <option value="neutral">
          Neutral
        </option>

        <option value="punish">
          Punish
        </option>


      </select>



      <textarea

        className="
          w-full
          p-2
          rounded
          text-black
        "

        placeholder="Description"

        value={description}

        onChange={(e) =>
          setDescription(e.target.value)
        }

      />



      <input

        className="
          w-full
          p-2
          rounded
          text-black
        "

        placeholder="Video URL"

        value={video}

        onChange={(e) =>
          setVideo(e.target.value)
        }

      />



      <button

        className="
          bg-green-600
          px-4
          py-2
          rounded
        "

      >

        Save Resource

      </button>


    </div>

  );

}