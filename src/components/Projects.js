import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section style={{backgroundColor: "#8497a4"}}id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon style={{color: "#fff9f9"}} className="mx-auto inline-block w-10 mb-4" />
          <h1 style={{color: "#fff9f9"}} className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
          <p style={{color: "#fff6e1"}} className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Click on the project to be taken to the github repository or live version (if available)!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 object-position-top w-full h-full object-cover "
                  src={project.image}
                  style={{ objectPosition: "top" }}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 style={{color: "#ff9f78"}} className="tracking-widest text-sm title-font font-medium mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 style={{color: "#fff9f9"}} className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p style={{color: "#bfcdcd"}} className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
