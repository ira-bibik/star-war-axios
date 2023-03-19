import React, { useEffect, useState } from "react";
import "../shared/StylesToCards.css";
import { Buttons } from "../shared/Buttons";
import { api} from "../../../services/sw-service";

const People = () => {
  const [person, setPerson] = useState({});
  const [currentId, setId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.get(`/people/${currentId}/`).then((res) => {
        setPerson(res.data);
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
            src={`https://starwars-visualguide.com/assets/img/characters/${currentId}.jpg`}
            onError={(e) =>
              (e.target.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg")
            }
            alt={person.name}
          />
          <h3 className="name">{person.name}</h3>
          <ul className="list">
            <li className="list-item">Gender: {person.gender} </li>
            <li className="list-item">Birth Year: {person.birth_year} </li>
            <li className="list-item">Eye color: {person.eye_color} </li>
          </ul>
        </div>
      )}
      <Buttons id={currentId} changeSmth={setId} />
    </>
  );
};

export { People };
