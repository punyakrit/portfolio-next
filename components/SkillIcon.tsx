import React from "react";
import { DiMongodb, DiMysql, DiPostgresql } from "react-icons/di";
import {
  FaAws,
  FaCloudflare,
  FaCss3,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaNpm,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import {
  SiExpress,
  SiKubernetes,
  SiPostman,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const iconLang = [
  { icon: <IoLogoJavascript />, key: 1 },
  { icon: <SiTypescript />, key: 2 },
  { icon: <FaHtml5 />, key: 3 },
  { icon: <FaCss3 />, key: 4 },
  { icon: <FaReact />, key: 5 },
  { icon: <TbBrandNextjs />, key: 6 },
  { icon: <SiTailwindcss />, key: 7 },
  { icon: <FaNodeJs />, key: 8 },
  { icon: <SiExpress />, key: 9 },
  { icon: <FaNpm />, key: 10 },
  { icon: <SiTailwindcss />, key: 11 },
  { icon: <FaAws />, key: 12 },
  { icon: <FaCloudflare />, key: 13 },
  { icon: <IoLogoVercel />, key: 14 },
  { icon: <FaGithub />, key: 15 },
  { icon: <DiMongodb />, key: 16 },
  { icon: <DiMysql />, key: 17 },
  { icon: <DiPostgresql />, key: 18 },
  { icon: <SiPostman />, key: 19 },
  { icon: <FaDocker />, key: 20 },
  { icon: <SiKubernetes />, key: 21 },
  { icon: <SiTerraform />, key: 22 },
];

export default function SkillIcon() {
  return (
    <div className="flex flex-wrap justify-center md:mx-32 mx-5">
      {iconLang.map(({ icon, key }) => (
        <Design key={key}>{icon}</Design>
      ))}
    </div>
  );
}

function Design({ children }: any) {
  return (
    <div className="my-3 mx-2 sm:mx-4">
      <div className="text-2xl sm:text-4xl hover:px-4 sm:hover:px-10 hover:py-3 sm:hover:py-6 hover:text-3xl sm:hover:text-5xl bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-purple-900 relative cursor-pointer">
        {children}
      </div>
    </div>
  );
}
