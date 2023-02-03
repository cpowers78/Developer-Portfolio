import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section style={{backgroundColor:"#ebb764"}} id="skills">
      <div  className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon style={{color:"#628181"}} className="w-10 inline-block mb-4" />
          <h1 style={{color:"#fff9f9"}} className="mt-2 sm:text-4xl text-3xl font-medium title-font text-white mb-2">
            Technical Skills
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div  key={skill} className="p-2 sm:w-1/2 w-full">
              <div style={{backgroundColor:"#628181"}} className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon style={{color:"#f1e1dd"}} className=" w-6 h-6 flex-shrink-0 mr-4" />
                <span style={{color:"#fff9f9"}} className="title-font font-medium">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
