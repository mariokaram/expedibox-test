import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/Navbar.css";

function Navbar({ userIsActiveAgain, globalTimer }) {
  const [popDownAlert, setVisisble] = useState("");
  const [counter, setCounter] = useState(globalTimer);
  const location = useLocation();
  const nav = useNavigate();

  // trigers on pagination
  useEffect(() => {
    handleClick(location.pathname);
    // eslint-disable-next-line
  }, [location.pathname]);

  // trigers on counter changes
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  // trigers when user is active
  useEffect(() => {
    setCounter(globalTimer);
    // eslint-disable-next-line
  }, [userIsActiveAgain]);

  const handleClick = (path) => {
    nav(path);
    if (path === "/") {
      setVisisble("");
    } else {
      setTimeout(() => {
        setVisisble("popdown");
      }, 200);
    }
  };
  return (
    <>
      <div className="nav-container">
        <div className="home">
          <div
            style={{ display: "inline" }}
            className="header-link"
            onClick={() => handleClick("/")}
          >
            Home
          </div>
        </div>
        <div className="header-link" onClick={() => handleClick("/about")}>
          About
        </div>
        <div className="header-link" onClick={() => handleClick("/product")}>
          Product
        </div>
        <div className="header-link" onClick={() => handleClick("/contact")}>
          Contact
        </div>
      </div>
      <div className={`timer-container ${popDownAlert}`}>
        Inactivity Session time : {counter} s
      </div>
    </>
  );
}

export default Navbar;
