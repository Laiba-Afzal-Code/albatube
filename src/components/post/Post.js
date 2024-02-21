import "./post.css";

export default function Post({ video }) {
  console.log(video);
  return (
    <>
      <div className="post">
        <div className="postImgContainer">
          <img src={video.img} alt="" className="postimgV" />
          <span className="imgDuration">{video.duration}</span>
        </div>
        <div className="postInfocontainer">
          <img src={video.channel.avatar} alt="" className="postImg" />
          <div className="postInfo">
            <span className="postTitle">{video.title}</span>
            <span className="postChannal">{video.channel.name}</span>
            <span className="postViews">
              {video.views} views • {video.date}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
