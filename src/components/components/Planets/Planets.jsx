import React, { useEffect, useState } from  'react'
import '../shared/StylesToCards.css';
import { Buttons } from "../shared/Buttons";
import { api} from "../../../services/sw-service";

const Planets = () => {
  const [planet, setPlanet] = useState({});
  const [currentId, setId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.get(`/planets/${currentId}/`).then((res) => {
      setPlanet(res.data);
      setIsLoading(false);
    });
  }, [currentId]);
  
  return (
    <>
      {isLoading ? (
        <p className="load">Loading...</p>
      ) : (
        <div className="card">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${currentId}.jpg`}
            onError={(e) =>
              (e.target.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg")
            }
            alt={planet.name}
          />
          <h3 className="name">{planet.name}</h3>
          <ul className="list">
            <li className="list-item">Climate: {planet.climate} </li>
            <li className="list-item">Diameter: {planet.diameter} </li>
            <li className="list-item">Population: {planet.population} </li>
            <li className="list-item">Gravity: {planet.gravity} </li>
          </ul>
        </div>
      )}
      <Buttons id={currentId} changeSmth={setId} />
    </>
  );
}

export {Planets}