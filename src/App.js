import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style/Global.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [sessionIsActive, setReset] = useState(0);

  //----- Begin parameter can be modified -----
  const GLOBAL_TIMER = 120; // in seconds
  const MINI_TIMER = 45; // in seconds
  //----- End parameter can be modified -----

  const timeoutVal = GLOBAL_TIMER * 1000; // in milliseconds

  useEffect(() => {
    inactivityFn();
    // eslint-disable-next-line
  }, []);

  function inactivityFn() {
    let t;
    const resetTimer = () => {
      t = setTimeout(() => {
        navigate("/");
      }, timeoutVal);

      setReset(t);
    };
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer; // catches touchscreen presses as well
    window.ontouchstart = resetTimer; // catches touchscreen swipes as well
    window.ontouchmove = resetTimer; // required by some devices
    window.onclick = resetTimer; // catches touchpad clicks as well
    window.onkeydown = resetTimer;
  }

  return (
    <>
      <Navbar userIsActiveAgain={sessionIsActive} globalTimer={GLOBAL_TIMER} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer
        miniTimer={MINI_TIMER}
        isHome={location.pathname === "/" || false}
      />
    </>
  );
}

export default App;
