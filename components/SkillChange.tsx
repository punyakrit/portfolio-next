"use client"
import { TypeAnimation } from "react-type-animation";

export default function SkillChange() {
  return (
    <TypeAnimation
          className="font-bold"
          sequence={[
            "Frontend Websites",
            2000,
            "Backend Servers",
            2000,
            "MERN Stack Applications",
            2000,
          ]}
          wrapper="span"
          speed={3}
          repeat={Infinity}
        />
  )
}
