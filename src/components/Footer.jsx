import React from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="  bg-[#0a192f] text-gray-300 p-10 ">
      <ul className=" flex justify-center items-center text-center">
        <li className="">
          <a
            className="flex justify-between items-center w-full text-gray-300 "
            href="https://www.linkedin.com/in/abdelazeem-mohey-588895164/"
            target={"_blank"}
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/abdelazeeem"
            target={"_blank"}
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target={"_blank"}
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://drive.google.com/file/d/1X8q4w9yEe2no8alJXqyievfsfgKe3hED/view?usp=sharing"
            target={"_blank"}
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
