import Sekelton from "../sekelton/Sekelton";
import "./topbar.css";

export default function Topbar({ isuser, loding }) {
  console.log(isuser);
  return (
    <>
      <div className="topbar">
        <div className="topbarWarpper">
          <div className="topbarleft">
            <i className="fa-solid fa-bars"></i>
            <span className="logo">
              <i className="fa-brands fa-youtube"></i>
              AlbaTube
            </span>
          </div>
          <div className="topbarmid">
            <div className="searchinput">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Search" className="inputsearch" />
              <button type="search" className="search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="microphone">
              <i className="fa-solid fa-microphone"></i>
            </div>
          </div>
          {loding ? (
            <Sekelton type={"top"} />
          ) : (
            <div className="topbarright">
              <div className="icon">
                <i className="fa-solid fa-video"></i>
              </div>
              <div className="icon">
                <i className="fa-regular fa-bell"></i>
                <div className="iconbedg">2</div>
              </div>
              <img
                src={
                  "https://www.antarctica.gov.au/site/assets/files/45357/black-browed-albatross2.800x450.jpg"
                }
                alt=""
                className="topImg"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
