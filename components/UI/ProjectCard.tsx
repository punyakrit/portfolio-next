"use client"
import  { useState } from "react";
import { FaCode, FaLink } from "react-icons/fa";
import Image from 'next/image'

type data = {
    img:any,
    title:string,
    githubLink:string,
    deployedLink:string

}

function ProjectCard({ img,title,githubLink ,deployedLink}:data) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative m-7 p-5 border-2 rounded-lg  sm:w-[450px] sm:h-60 stroke-slate-100 shadow-xl shadow-white/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={img}
        className="w-full h-full object-cover"
        alt="Project Image"
        loading="lazy"
      />
      {isHovered && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-violet-950 bg-opacity-90 text-white transition-opacity duration-800">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <div className="flex space-x-10">
            <a href={githubLink} target="_blank">
              <FaCode size={24} />
            </a>
            <a href={deployedLink} target="_blank">
              <FaLink size={24} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
