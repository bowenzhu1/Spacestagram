import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="container">
      <img src={"/logo192.png"} alt={"Spaceship"} className="logo" />
      <p>Preparing for launch...</p>
    </div>
  );
}

export default Loading;
