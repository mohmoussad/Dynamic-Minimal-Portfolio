import React from "react";
import ContactCard from "./ContactCard";
import conifguration from "../configuration";
import SkillCard from "./SkillCard";
import SideProjectCard from "./SideProjectCard";
const { contacts, skills, sideProjects } = conifguration;

const Details = () => {
  return (
    <div className='details m-4 d-flex flex-column flex-grow-1 align-self-center'>
      <div className='d-flex flex-grow-1 flex-column flex-sm-row flex-wrap justify-content-center align-items-center align-content-center w-100'>
        {contacts.length > 0 &&
          contacts.map((contact, index) => {
            return <ContactCard key={index} type={contact.type} url={contact.url} text={contact.text} />;
          })}
      </div>
      <p className='h5'>Skills</p>
      <div className='d-flex  flex-grow-1 flex-sm-row flex-wrap justify-content-center align-items-center align-content-center w-100 m-auto'>
        {skills.length > 0 &&
          skills.map((skill, index) => {
            return <SkillCard key={index} skill={skill} />;
          })}
      </div>
      <p className='h5'>Projects</p>
      <div className='d-flex  flex-grow-1 flex-column flex-sm-row flex-wrap justify-content-center align-items-center align-content-center w-100 m-auto'>
        {sideProjects.length > 0 &&
          sideProjects.map((sideProject, index) => {
            return <SideProjectCard key={index} sideProject={sideProject} />;
          })}
      </div>
    </div>
  );
};

export default Details;
