import React from 'react';
import './UserCard.css'; 

function UserCard() {
  const name = "Venkat";
  const age = 22;
  const bio = "Frontend Developer and React Learner.";

  return (
    <div className="profile">
      <h2 className="name">Name:{name}</h2>
      <p className="age">Age: {age}</p>
      <p className="bio">Bio:{bio}</p>
    </div>
  );
}

export default UserCard;


