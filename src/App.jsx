import React, { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ComingSoon from "./components/ComingSoon";
import Home from "./pages/Home";
import NavBar from "./components/NavigationBars/NavBar";
import { AnimatePresence } from "framer-motion";
import SignUpform from "./components/forms/SignUpform";
import Overlay from "./components/common/Overlay";

const App = () => {
  const [isconimg, setIscoming] = useState(true);

  const [IsSignUp, setIsSignUp] = useState(false);
  const handleSignUpform = () => {
    setIsSignUp(!IsSignUp);
  };

  const closeSignUp = () => {
    setIsSignUp(false);
  };

  const overlyClose = () => {
    setIsSignUp(false);
  };
  return (
    <BrowserRouter>
      <NavBar handleSignUpform={handleSignUpform} setIscoming={setIscoming} />
      <AnimatePresence>
        {IsSignUp && <SignUpform closeSignUp={closeSignUp} />}
      </AnimatePresence>
      {IsSignUp === true ? <Overlay closeOverlayPorp={overlyClose} /> : null}
      {isconimg ? (
        <div style={{ overflow: "hidden" }}>
          <ComingSoon />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
