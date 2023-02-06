import React from "react";

export default function About() {
  return (
    <section style={{backgroundColor: "#bfcdcd"}} id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 style={{color: "#2c435c"}} className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Caterina Powers
            <br className="hidden lg:inline-block" />Software Developer
          </h1>
          <p style={{color: "#628181"}} className="mb-8 leading-relaxed">
            I am passionate about technology and how it can help a positive difference in the world. I graduated with a Bachelors Degree in Mathematics in May of 2022. After graduating,
            I worked in real estate for 6 months before deciding to pursue my passion. Continue on to see some of the projects I've been working on.
          </p>
          <div className="flex justify-center">
            <a style={{backgroundColor: "#ebb764", color:"#fff9f9"}}
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </a>
            <a style={{backgroundColor: "#ff9f78", color:"#fff9f9"}}
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./Headshot.png"
          />
        </div>
      </div>
    </section>
  );
}
