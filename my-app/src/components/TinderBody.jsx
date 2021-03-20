import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderBody.css";
import database from "../firebase";

const TinderBody = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    database.collection('people').onSnapshot((snap)=>
    setPeople(snap.docs.map((doc)=>doc.data())) 
    )
  }, []);

  return (
    <div className="tinder__body">
      {people.map((val) => {
        return (
          <TinderCard className="swipe" preventSwipe={["up", "down"]}>
            <div
              style={{ backgroundImage: `url(${val.url})` }}
              className="card"
            >
              <span className="tinder__name">{val.name}</span>
            </div>
          </TinderCard>
        );
      })}
    </div>
  );
};

export default TinderBody;
