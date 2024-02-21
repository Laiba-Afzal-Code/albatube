import "./sekelton.css";

export default function Sekelton({ type }) {
  const COUNTER = 8;
  const SekeltonFeed = () => (
    <div className="postSK">
      <div className="postImgSK"></div>
      <div className="postInfoSK">
        <div className="postAvatar"></div>
        <div className="postDetails">
          <div className="postTextSk"></div>
          <div className="postTextSk sm"></div>
        </div>
      </div>
    </div>
  );
  const SekeltonTop = () => (
    <div className="topSk">
      <div className="topSKIcon"></div>
      <div className="topSKIcon"></div>
      <div className="topSKIcon"></div>
      <div className="topSKImg"></div>
    </div>
  );

  const SekeltonSide = () => (
    <div className="sodeSK">
      <div className="sideSKitem"></div>
      <div className="sideSKitem"></div>
      <div className="sideSKitem"></div>
      <div className="sideSKitem"></div>
    </div>
  );
  const CustomLoding = () => (
    <div className="custom">
      <div className="balls">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
      </div>
      <span className="customText">Loding...</span>
    </div>
  );
  if (type === "feed") return Array(COUNTER).fill(<SekeltonFeed />);
  if (type === "top") return <SekeltonTop />;
  if (type === "side") return <SekeltonSide />;
  if (type === "custom") return <CustomLoding />;
}
