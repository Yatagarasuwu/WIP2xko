"use client";

import { Video } from "@/types/video";

type Props = {
  video: Video;
};

export default function VideoPlayer({ video }: Props) {
  if (video.type === "youtube") {
    const id = extractYouTubeId(video.url);

    return (
      <iframe
        className="w-full aspect-video rounded-lg"
        src={`https://www.youtube.com/embed/${id}?start=${video.startTime ?? 0}`}
        allowFullScreen
      />
    );
  }

  if (video.type === "mp4") {
    return (
      <video
        className="w-full aspect-video rounded-lg"
        controls
        src={video.url}
      />
    );
  }

  if (video.type === "twitter") {
    return (
      <blockquote className="twitter-tweet">
        <a href={video.url}></a>
      </blockquote>
    );
  }

  return null;
}

function extractYouTubeId(url: string) {
  const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  return match?.[1] ?? "";
}