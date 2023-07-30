import React from "react";
import { AiOutlineLink } from "react-icons/ai";

const SideProjectCard = ({ sideProject }) => {
  return (
    <div className='side-project-card card m-4 '>
      <img src={sideProject.photo} className='img-fluid' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{sideProject.title} </h5>
        <p className='card-text'>{sideProject.desc}</p>
        {sideProject.repo && (
          <a href={sideProject.repo} className='card-link' target='_blank'>
            Code
          </a>
        )}
        {sideProject.demo && (
          <a href={sideProject.demo} className='card-link' target='_blank'>
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default SideProjectCard;
