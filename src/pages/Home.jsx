import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return <div>Home</div>;
};

export default Home;
