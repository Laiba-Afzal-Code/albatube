import "./feed.css";
import Post from "../post/Post";
import { useState } from "react";
import { useEffect } from "react";
import { videos } from "../../fackData.js";
import Sekelton from "../sekelton/Sekelton.js";

export default function Feed() {
  const [loding, setLoding] = useState(true);
  const [isVideos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      setLoding(true);
      setTimeout(() => {
        setVideos(videos);
        setLoding(false);
      }, 3000);
    };
    getVideos();
  }, []);
  return (
    <>
      <div className="feed">
        {loding ? (
          <Sekelton type="custom" />
        ) : (
          isVideos.map((video) => <Post video={video} key={video.id} />)
        )}
      </div>
    </>
  );
}
