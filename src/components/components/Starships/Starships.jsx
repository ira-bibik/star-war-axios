import React, { useEffect, useState } from "react";
import "../shared/StylesToCards.css";
import { Buttons } from "../shared/Buttons";
import { api } from "../../../services/sw-service";

function Starships() {
  const [starship, setStarship] = useState({});
  const [currentId, setId] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      api
        .get(`/starships/${currentId}/`)
        .then((res) => {
          setStarship(res.data);
          setIsLoading(false);
          console.log(res.data);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      
    }
  }, [currentId]);

  return (
    <>
      {isLoading ? (
        <p className="load">Loading...</p>
      ) : (
        <div className="card">
          <img
            src={`https://starwars-visualguide.com/assets/img/starships/${currentId}.jpg`}
            onError={(e) =>
              (e.target.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg")
            }
            alt={starship.name}
          />
          <h3 className="name">{starship.name}</h3>
          <ul className="list">
            <li className="list-item">Consumables: {starship.consumables} </li>
            <li className="list-item">Crew : {starship.crew} </li>
            <li className="list-item">Passengers: {starship.passengers} </li>
          </ul>
        </div>
      )}
      <Buttons id={currentId} changeSmth={setId} />
    </>
  );
}

export { Starships };
