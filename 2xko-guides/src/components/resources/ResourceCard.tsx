import { Resource } from "@/types/resource";
import VideosList from "./videos/VideosList";


type Props = {
  resource: Resource;
};


export default function ResourceCard({
  resource,
}: Props) {

  return (

    <div
      className="
      border
      border-zinc-800
      rounded-xl
      p-5
      space-y-3
      "
    >

      <div>

        <h3 className="text-lg font-bold">
          {resource.title}
        </h3>


        <p className="text-sm text-zinc-400">
          {resource.type}
        </p>

      </div>



      <p className="text-sm">
        {resource.description}
      </p>



      <div className="flex gap-2 flex-wrap">

        {resource.tags.map(tag => (

          <span
            key={tag}
            className="
            text-xs
            bg-zinc-800
            rounded
            px-2
            py-1
            "
          >

            {tag}

          </span>

        ))}

      </div>



      {
        resource.videos.length > 0 && (

          <VideosList
            videos={resource.videos}
          />

        )
      }


    </div>

  );
}