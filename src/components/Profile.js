import React from "react";
import conifguration from "../configuration";
const { name, photo, summary } = conifguration;

const Profile = () => {
  return (
    <div className='profile px-4 pt-5 d-flex justify-content-start align-items-center flex-column flex-shrink-0'>
      <img className='m-2 avatar' src={photo} />
      <h1 className='m-2'>{name}</h1>
      <div className='summary'>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default Profile;
