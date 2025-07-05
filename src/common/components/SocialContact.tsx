import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function SocialContact() {
  return (
    <div>
      <div className=" flex justify-center items-center gap-2">
        <a
          href="https://github.com/cyberscript-pro"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <div className="bg-gray-900 group-hover:bg-gray-800 p-3 rounded-lg transition-colors">
            <FaGithub className="text-2xl text-gray-200" />
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/li-anthony-fullstack/"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <div className="bg-blue-900/50 group-hover:bg-blue-900/70 p-3 rounded-lg transition-colors">
            <FaLinkedin className="text-2xl text-blue-400" />
          </div>
        </a>

        <a
          href="mailto:li.3108gomezgonzalez@gmail.com"
        >
          <div className="bg-red-900/50 group-hover:bg-red-900/70 p-3 rounded-lg transition-colors">
            <FaEnvelope className="text-2xl text-red-400" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default SocialContact;
