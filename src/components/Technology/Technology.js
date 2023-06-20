import React, { memo } from "react";
import Header from "../Header/Header";
import "./tech.css";
import { useData } from "../UseData";
import technology_1 from "../../assets/images/image-launch-vehicle-portrait.jpg";
import technology_2 from "../../assets/images/image-spaceport-portrait.jpg";
import technology_3 from "../../assets/images/image-space-capsule-portrait.jpg";
import land_1 from "../../assets/images/image-launch-vehicle-landscape.jpg";
import land_2 from "../../assets/images/image-spaceport-landscape.jpg";
import land_3 from "../../assets/images/image-space-capsule-landscape.jpg";

function Technology() {
  const { technology, index, getIndex } = useData();
  return (
    <div className="tech">
      <Header />
      <h3 className="title">
        {" "}
        <span>03</span> Space launch 101
      </h3>
      <div className="contents">
        <div className="info">
          <ul className="links">
            <li
              onClick={() => getIndex(0)}
              className={index === 0 ? "active" : "link"}
            >
              1
            </li>
            <li
              onClick={() => getIndex(1)}
              className={index === 1 ? "active" : "link"}
            >
              2
            </li>
            <li
              onClick={() => getIndex(2)}
              className={index === 2 ? "active" : "link"}
            >
              3
            </li>
          </ul>
          <div className="info-box">
            {" "}
            <h3 className="terminology">The terminology...</h3>
            <h1 className="technology-name">
              {technology.length && technology[index].name}
            </h1>
            <p className="description">
              {technology.length && technology[index].description}
            </p>
          </div>
        </div>
        <div className="technology-image ">
          {index === 0 ? (
            <img src={technology_1} className="portrait" alt="" />
          ) : (
            ""
          )}
          {index === 1 ? (
            <img src={technology_2} className="portrait" alt="" />
          ) : (
            ""
          )}
          {index === 2 ? (
            <img src={technology_3} className="portrait" alt="" />
          ) : (
            ""
          )}
          {index === 0 ? <img src={land_1} className="land" alt="" /> : ""}
          {index === 1 ? <img src={land_2} className="land" alt="" /> : ""}
          {index === 2 ? <img src={land_3} className="land" alt="" /> : ""}
        </div>
      </div>
    </div>
  );
}

export default memo(Technology);
