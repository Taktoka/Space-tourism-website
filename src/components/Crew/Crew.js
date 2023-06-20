import React, { memo } from "react";
import Header from "../Header/Header";
import "./crew.css";
import { useData } from "../UseData";
import crew_1 from "../../assets/images/image-douglas-hurley.png";
import crew_2 from "../../assets/images/image-mark-shuttleworth.png";
import crew_3 from "../../assets/images/image-victor-glover.png";
import crew_4 from "../../assets/images/image-anousheh-ansari.png";

function Crew() {
  const { crew, index, getIndex } = useData();

  return (
    <div className="crew">
      <Header />
      <h3 className="title">
        <span> 02 </span>Meet your crew
      </h3>
      <div className="contents">
        <div className="info">
          <h3 className="role">{crew.length && crew[index].role}</h3>
          <h1 className="crew-name">{crew.length && crew[index].name}</h1>
          <p className="bio">{crew.length && crew[index].bio}</p>
          <ul className="links">
            <li
              onClick={() => getIndex(0)}
              className={index == 0 ? "active" : "link"}
            ></li>
            <li
              onClick={() => getIndex(1)}
              className={index == 1 ? "active" : "link"}
            ></li>
            <li
              onClick={() => getIndex(2)}
              className={index == 2 ? "active" : "link"}
            ></li>
            <li
              onClick={() => getIndex(3)}
              className={index == 3 ? "active" : "link"}
            ></li>
          </ul>
        </div>
        <div className="crew-image">
          {index == 0 ? <img src={crew_1} /> : ""}
          {index == 1 ? <img src={crew_2} /> : ""}
          {index == 2 ? <img src={crew_3} /> : ""}
          {index == 3 ? <img src={crew_4} /> : ""}
        </div>
      </div>
    </div>
  );
}
export default memo(Crew);
