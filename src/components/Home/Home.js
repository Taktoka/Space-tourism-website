import React, { memo } from "react";
import "./home.css";
import Header from "../Header/Header";

function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="landing">
        <div className="container">
          <div className="text">
            <p className="first"> So, you want to travel to</p>
            <h1 className="title"> Space</h1>
            <p className="second">
              {" "}
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="explore">
            <p className="third">Explore</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Home);
