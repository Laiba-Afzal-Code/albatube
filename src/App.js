import "./App.css";
import Feed from "./components/feed/Feed";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { user } from "./fackData.js";
import { useEffect, useState } from "react";
function App() {
  const [loding, setLoding] = useState(true);
  const [isuser, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      setLoding(true);
      setTimeout(() => {
        setUser(user);
        setLoding(false);
      }, 3000);
    };
    getUser();
  }, []);
  console.log(isuser);
  return (
    <>
      <div className="App">
        <Topbar isuser={user} loding={loding} />
        <div className="container">
          <Sidebar loding={loding} />
          <Feed />
        </div>
      </div>
    </>
  );
}

export default App;
