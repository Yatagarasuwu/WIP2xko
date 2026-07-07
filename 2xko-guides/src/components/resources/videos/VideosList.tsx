import VideoPlayer from "@/components/resources/videos/VideoPlayer";
import { Video } from "@/types/video";

export default function VideoList({ videos }: { videos: Video[] }) {
  return (
    <div className="space-y-4">
      {videos.map((v) => (
        <VideoPlayer key={v.id} video={v} />
      ))}
    </div>
  );
}