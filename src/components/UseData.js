import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export const useData = () => {
  const [destinations, setDestinations] = useState([]);

  const [crew, setCrew] = useState([]);

  const [technology, setTechnology] = useState([]);

  const [index, setIndex] = useState(0);

  const hndleHide = (ele) => {
    ele.current.classList.remove("show");
  };

  const hndleView = (ele) => {
    ele.current.classList.add("show");
  };

  const getIndex = (index) => {
    setIndex(index);
  };

  useEffect(() => {
    axios.get("data.json").then((res) => {
      setDestinations(res.data.destinations);
      setCrew(res.data.crew);
      setTechnology(res.data.technology);
    });
  }, []);

  return {
    destinations,
    crew,
    technology,
    index,
    getIndex,
    hndleHide,
    hndleView,
  };
};
