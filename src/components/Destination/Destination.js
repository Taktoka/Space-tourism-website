import React, { memo } from "react";
import Header from "../Header/Header";
import "./dest.css";
import { useData } from "../UseData";
import moon from "../../assets/images/image-moon.png";
import mars from "../../assets/images/image-mars.png";
import europa from "../../assets/images/image-europa.png";
import titan from "../../assets/images/image-titan.png";

function Destination() {
  const { destinations, index, getIndex } = useData();

  return (
    <div className="des">
      <Header />

      <h3 className="title">
        <span>01 </span>Pick your destination
      </h3>
      <div className="contents">
        <div className="planet-image">
          {index === 0 ? <img src={moon} alt="" /> : ""}
          {index === 1 ? <img src={mars} alt="" /> : ""}
          {index === 2 ? <img src={europa} alt="" /> : ""}
          {index === 3 ? <img src={titan} alt="" /> : ""}
        </div>
        <div className="info">
          <ul className="links">
            <li
              onClick={() => getIndex(0)}
              className={index === 0 ? "active" : "link"}
            >
              Moon
            </li>
            <li
              onClick={() => getIndex(1)}
              className={index === 1 ? "active" : "link"}
            >
              Mars
            </li>
            <li
              onClick={() => getIndex(2)}
              className={index === 2 ? "active" : "link"}
            >
              Europa
            </li>
            <li
              onClick={() => getIndex(3)}
              className={index === 3 ? "active" : "link"}
            >
              Titan
            </li>
          </ul>
          <h1 className="planet-title">
            {destinations.length && destinations[index].name}
          </h1>
          <p className="description">
            {destinations.length && destinations[index].description}
          </p>
          <div className="avr">
            <p className="distance">
              {" "}
              Avg. distance
              <span>{destinations.length && destinations[index].distance}</span>
            </p>
            <p className="travel">
              {" "}
              Est. travel time
              <span> {destinations.length && destinations[index].travel}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Destination);
