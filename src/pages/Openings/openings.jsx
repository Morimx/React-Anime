import React from "react";
import "./openings.css";
import { Apiget } from "../../services/Apiget";
import { useEffect } from "react";

export default function Openings() {
  const [openings, setOpenings] = React.useState([]); //array of openings

  useEffect(function () {
    Apiget("bleach").then((openings) => setOpenings(openings));
  }, []);

  return (
    <>
      <div className="columna">
        <h1>Openings Top 10</h1>
        <section className="openings">
          {openings.map((opening, index) => (
            <h1>{opening.id}</h1>
          ))}
        </section>
      </div>
    </>
  );
}

//<img src={opening} alt={index} key={index} />
