import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/Footer.css";

function Footer({ isHome, miniTimer }) {
  const [counter, setCounter] = useState(miniTimer);
  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    const timer =
      counter > 0 ? setInterval(() => setCounter(counter - 1), 1000) : nav("/");
    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, [counter]);

  useEffect(() => {
    setCounter(miniTimer);
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <div className="foot-container">
      <div className="mini-timer">
        {isHome ? (
          <div>&copy; {1900 + new Date().getYear()}, Expedibox Challenge</div>
        ) : (
          `After ${counter} seconds you will be redirected to Home`
        )}
      </div>
    </div>
  );
}

export default Footer;
