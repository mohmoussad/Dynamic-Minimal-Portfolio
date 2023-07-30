import React from "react";
import { TbWorld } from "react-icons/tb";
import iconMap from "../utils/constants";

const ContactCard = ({ type, url, text }) => {
  const IconComponent = iconMap[type] || TbWorld;

  return (
    <div className='border link-card m-2 px-3'>
      <a
        href={url}
        className='link w-100 d-flex align-items-center justify-content-start'
        style={{ gap: 10 }}
        target='_blank'
      >
        <IconComponent className='icon' />
        <h7 class='m-1'>{text}</h7>
      </a>
    </div>
  );
};

export default ContactCard;
