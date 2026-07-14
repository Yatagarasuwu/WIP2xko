"use client";

import { useState } from "react";

import { Resource, ResourceType } from "@/types/resource";
import { VideoLink, VideoType } from "@/types/video";

import VideoLinkEditor from "@/components/resources/videos/VideoLinkEditor";


type Props = {

  onSave:(resource:Resource)=>void;

  initialResource?:Resource;

  availableResources:Resource[];

};



type VideoInput = {

  id?:string;

  type:VideoType;

  url:string;

  title:string;

  description:string;

  links:VideoLink[];

};




export default function ResourceForm({

  onSave,

  initialResource,

  availableResources,

}:Props){



  const [title,setTitle] =
    useState(
      initialResource?.title ?? ""
    );



  const [type,setType] =
    useState<ResourceType>(
      initialResource?.type ?? "combo"
    );



  const [description,setDescription] =
    useState(
      initialResource?.description ?? ""
    );



  const [videos,setVideos] =
    useState<VideoInput[]>(

      initialResource?.videos.map(video => ({

        id:video.id,

        type:video.type,

        url:video.url,

        title:video.title ?? "",

        description:
          video.description ?? "",

        links:
          video.links ?? [],

      }))

      ??

      [
        {
          type:"youtube",

          url:"",

          title:"",

          description:"",

          links:[],
        }
      ]

    );







  function updateVideo(

    index:number,

    field:keyof VideoInput,

    value:string

  ){


    const updated =
      [...videos];


    updated[index] = {

      ...updated[index],

      [field]:value,

    };


    setVideos(updated);

  }







  function updateVideoLinks(

    index:number,

    links:VideoLink[]

  ){


    const updated =
      [...videos];


    updated[index] = {

      ...updated[index],

      links,

    };


    setVideos(updated);

  }







  function addVideo(){


    setVideos([

      ...videos,

      {

        type:"youtube",

        url:"",

        title:"",

        description:"",

        links:[],

      }

    ]);

  }







  function removeVideo(index:number){


    setVideos(

      videos.filter(
        (_,i)=>i !== index
      )

    );

  }







  function save(){


    const resource:Resource = {


      id:

        initialResource?.id ??

        crypto.randomUUID(),



      title,



      championId:

        initialResource?.championId ??

        "",



      type,



      description,



      tags:

        initialResource?.tags ??

        [],



      videos:


        videos

        .filter(
          video =>
          video.url.trim() !== ""
        )


        .map(video => ({


          id:

            video.id ??

            crypto.randomUUID(),



          type:

            video.type,



          url:

            video.url,



          title:

            video.title,



          description:

            video.description,



          links:

            video.links,


        }))


    };



    onSave(resource);


  }








  return (

    <div

      className="
      border
      border-zinc-800
      rounded-lg
      p-5
      space-y-5
      "

    >



      <h2 className="text-xl font-bold">

        {
          initialResource
          ? "Edit Resource"
          : "Add Resource"
        }

      </h2>






      <input

        className="
        w-full
        rounded
        p-2
        text-black
        "

        placeholder="Resource title"

        value={title}

        onChange={
          e =>
          setTitle(
            e.target.value
          )
        }

      />







      <select

        className="
        w-full
        rounded
        p-2
        text-black
        "

        value={type}

        onChange={
          e =>
          setType(
            e.target.value as ResourceType
          )
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

        

      </select>








      <textarea

        className="
        w-full
        rounded
        p-2
        text-black
        "

        placeholder="Resource description"

        value={description}

        onChange={
          e =>
          setDescription(
            e.target.value
          )
        }

      />









      <div className="space-y-4">


        <h3 className="font-bold">

          Videos

        </h3>




        {
          videos.map((video,index)=>(


            <div

              key={index}

              className="
              border
              border-zinc-700
              rounded
              p-4
              space-y-3
              "

            >





              <select

                className="
                w-full
                rounded
                p-2
                text-black
                "

                value={video.type}

                onChange={
                  e =>
                  updateVideo(
                    index,
                    "type",
                    e.target.value as VideoType
                  )
                }

              >

                <option value="youtube">
                  YouTube
                </option>

                <option value="twitter">
                  Twitter/X
                </option>

    


              </select>







              <input

                className="
                w-full
                rounded
                p-2
                text-black
                "

                placeholder="Video title"

                value={video.title}

                onChange={
                  e =>
                  updateVideo(
                    index,
                    "title",
                    e.target.value
                  )
                }

              />








              <textarea

                className="
                w-full
                rounded
                p-2
                text-black
                "

                placeholder="Video description"

                value={video.description}

                onChange={
                  e =>
                  updateVideo(
                    index,
                    "description",
                    e.target.value
                  )
                }

              />







              <VideoLinkEditor

                links={video.links}

                setLinks={
                  links =>
                  updateVideoLinks(
                    index,
                    links
                  )
                }

                availableResources={
                  availableResources.filter(
                    resource =>
                    resource.id !==
                    initialResource?.id
                  )
                }

              />







              <input

                className="
                w-full
                rounded
                p-2
                text-black
                "

                placeholder="Video URL"

                value={video.url}

                onChange={
                  e =>
                  updateVideo(
                    index,
                    "url",
                    e.target.value
                  )
                }

              />








              {
                videos.length > 1 && (

                  <button

                    onClick={() =>
                      removeVideo(index)
                    }

                    className="
                    text-red-400
                    "

                  >

                    Remove Video

                  </button>

                )
              }



            </div>


          ))
        }







        <button

          onClick={addVideo}

          className="
          bg-zinc-700
          px-3
          py-2
          rounded
          "

        >

          + Add Another Video

        </button>


      </div>








      <button

        onClick={save}

        className="
        bg-blue-600
        px-4
        py-2
        rounded
        "

      >

        {
          initialResource
          ? "Save Changes"
          : "Create Resource"
        }

      </button>




    </div>

  );

}