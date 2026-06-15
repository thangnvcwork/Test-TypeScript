import Navigation from "./components/Navigation";
import VideoCard from "./components/VideoCard";
import { VideoItem } from "./types/video";

const videos: VideoItem[] = [
  {
    id: 1,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    authorName: "Nguyen Van Thang",
    description: "Video demo số 1",
    likesCount: 120,
  },
  {
    id: 2,
    videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
    authorName: "React Creator",
    description: "Một đoạn video ngắn dạng vertical feed",
    likesCount: 98,
  },
  {
    id: 3,
    videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    authorName: "Next.js Dev",
    description: "Demo autoplay khi cuộn tới video",
    likesCount: 250,
  },
];

export default function Home() {
  return (
    <main className="h-screen bg-black text-white overflow-hidden">
      <Navigation />
      
      <section className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </section>
    </main>
  );
}