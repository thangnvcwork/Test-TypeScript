"use client";

import { VideoItem } from "../types/video";
import { useState, useRef, useEffect } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";

export default function VideoCard({ video }: { video: VideoItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(video.likesCount);

  const togglePlay = () => {
    const currentVideo = videoRef.current;
    if (!currentVideo) return;
    if (currentVideo.paused) {
      currentVideo.play().catch(() => {
        // Handle play error (e.g., autoplay restrictions)
      });
    } else {
      currentVideo.pause();
    }
  };

  const handleLike = () => {
    setIsLiked((prev) => !prev);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  useEffect(() => {
    const currentVideo = videoRef.current;
    if (!currentVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentVideo.play();
        } else {
          currentVideo.pause();
        }
      },
      { threshold: 0.7 },
    );

    observer.observe(currentVideo);
    return () => observer.disconnect();
  }, []);

  return (
    <article className="relative h-screen snap-start flex items-center justify-center bg-black">
      <div className="relative w-full h-full max-w-[430px] bg-neutral-900 overflow-hidden md:h-[90vh] md:rounded-3xl">
        <video
          ref={videoRef}
          src={video.videoUrl}
          className="w-full h-full object-cover cursor-pointer"
          loop
          muted
          playsInline
          onClick={togglePlay}
        />

        <div className="absolute bottom-24 left-4 right-20">
          <h2 className="text-lg font-bold">@{video.authorName}</h2>
          <p className="text-sm">{video.description}</p>
        </div>

        <div className="absolute bottom-28 right-4 flex flex-col items-center gap-5">
          <button onClick={handleLike} className="group flex flex-col items-center gap-1 transition-transform active:scale-90">
            <div className="p-2 rounded-full bg-black/40 backdrop-blur-sm transition-colors group-hover:bg-black/60">
              <Heart 
                className={`w-7 h-7 transition-all ${
                  isLiked 
                    ? "fill-red-500 text-red-500 scale-110" 
                    : "text-white group-hover:text-red-400"
                }`} 
              />
            </div>
            <span className="text-xs font-medium">{likes}</span>
          </button>

          <button className="group flex flex-col items-center gap-1 transition-transform active:scale-90">
            <div className="p-2 rounded-full bg-black/40 backdrop-blur-sm transition-colors group-hover:bg-black/60">
              <MessageCircle className="w-7 h-7 text-white group-hover:text-gray-300" />
            </div>
            <span className="text-xs font-medium">Comments</span>
          </button>

          <button className="group flex flex-col items-center gap-1 transition-transform active:scale-90">
            <div className="p-2 rounded-full bg-black/40 backdrop-blur-sm transition-colors group-hover:bg-black/60">
              <Share2 className="w-7 h-7 text-white group-hover:text-gray-300" />
            </div>
            <span className="text-xs font-medium">Share</span>
          </button>
        </div>
      </div>
    </article>
  );
}
