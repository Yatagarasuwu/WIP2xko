import { Video } from "@/types/video";
import VideoPlayer from "./VideoPlayer";


type Props = {
  videos: Video[];
};


export default function VideosList({
  videos,
}: Props) {

  return (
    <div className="space-y-4">

      {videos.map((video) => (

        <VideoPlayer
          key={video.id}
          video={video}
        />

      ))}

    </div>
  );
}