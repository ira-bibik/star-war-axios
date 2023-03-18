import React, { useEffect, useState } from "react";
import "./People.css";
import { Buttons } from "../shared/Buttons";
import {api, getPerson} from '../../../services/sw-service'


const People = () => {
    const [person, setPerson] = useState({});
    const [currentId, setId] = useState(1);

    useEffect(() => {
        api.get(`/people/${currentId}/`).then(res => {
            setPerson(res.data);
        })
        // setPerson(getPerson(currentId).data);
        // console.log(person)
    },[currentId])
    
    return (
      <>
        {person ? (
          <div className="card">
            <div className="image"></div>
            <h3>{person.name}</h3>
            <ul className="list">
              <li className="list-item">Gender: {person.gender} </li>
              <li className="list-item">Birth Year: {person.birth_year} </li>
              <li className="list-item">Eye color: {person.eye_color} </li>
            </ul>
            <Buttons id={currentId} changeSmth={setId} />
          </div>
        ) : (
          <h1>No data!</h1>
        )}
      </>
    );
};

export { People };
