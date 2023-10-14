import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const deadline = "December, 06, 2023";

  const getTimer = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMins(Math.floor((time / 1000 / 60) % 60));
    setSecs(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTimer(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="coutdown_container">
        <div className="outer_div">
          <div className="countdown_inner">
            <h1 className="forNumber">{days < 10 ? "0" + days : days}</h1>
            <span className="forletters">days</span>
          </div>
          <div className="countdown_inner">
            <h1 className="forNumber">{hours < 10 ? "0" + hours : hours}</h1>
            <span className="forletters">hours</span>
          </div>
          <div className="countdown_inner">
            <h1 className="forNumber">{mins < 10 ? "0" + mins : mins}</h1>
            <span className="forletters">mins</span>
          </div>
          <div className="countdown_inner">
            <h1 className="forNumber">{secs < 10 ? "0" + secs : secs}</h1>
            <span className="forletters">sec</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
