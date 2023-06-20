import React, { memo, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { useData } from "../UseData";

function Header() {
  const { hndleView, hndleHide } = useData();
  const menuRef = useRef();

  return (
    <div>
      <div className="Header">
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fillRule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </div>
        <div className="line"></div>
        <i
          className="fa-solid fa-bars toggle-icon"
          onClick={() => hndleView(menuRef)}
        ></i>

        <ul className="Navbar">
          <li className="link">
            {" "}
            <NavLink to="/">
              <span>00 </span> Home
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/destination">
              <span>01 </span> Destination
            </NavLink>
          </li>
          <li className="link">
            {" "}
            <NavLink to="/crew">
              <span>02 </span>Crew
            </NavLink>
          </li>

          <li className="link">
            <NavLink to="/tech">
              <span>03 </span> Technology
            </NavLink>
          </li>
        </ul>
        <div className="toggle-menu" ref={menuRef}>
          <i
            className="fa-regular fa-circle-xmark close"
            onClick={() => hndleHide(menuRef)}
          ></i>
          <ul className="toggle-links">
            <li className="link">
              {" "}
              <NavLink to="/">
                <span>00 </span> Home
              </NavLink>
            </li>
            <li className="link">
              <NavLink to="/destination">
                <span>01 </span> Destination
              </NavLink>
            </li>
            <li className="link">
              {" "}
              <NavLink to="/crew">
                <span>02 </span>Crew
              </NavLink>
            </li>

            <li className="link">
              <NavLink to="/tech">
                <span>03 </span> Technology
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default memo(Header);
