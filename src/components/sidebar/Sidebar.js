import Sekelton from "../sekelton/Sekelton";
import "./sidebar.css";

export default function Sidebar({ loding }) {
  return (
    <>
      <div className="sidebar">
        {loding ? (
          <Sekelton type={"side"} />
        ) : (
          <div className="sidebarwapper">
            <div className={"itemSidebar" ? "itemSidebar active" : ""}>
              <i className="fa-solid fa-house"></i>
              <span>Home</span>
            </div>
            <div className="itemSidebar">
              <i className="fa-solid fa-circle-play"></i>
              <span>Shorts</span>
            </div>
            <div className="itemSidebar">
              <i className="fa-solid fa-music"></i>
              <span>Music</span>
            </div>
            <div className="itemSidebar">
              <i className="fa-solid fa-gamepad"></i>
              <span>You</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
