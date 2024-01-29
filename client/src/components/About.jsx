import React from "react";

const About = () => {
  return (
    <div id="about-section" className="w-full h-screen text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-200 text-blue-600">
            About
          </p>
        </div>
        <p className="text-lg md:text-xl lg:text-2xl mt-6 md:mt-10"> 
          I'm Shaikh Umer Qadir, emerging Software
          Engineer with a strong foundation in Python,
          JavaScript and Web Development technologies.
          Currently pursuing a Bachelor's degree in
          Software Engineering at UBIT Computer
          Science Department, eager to contribute to
          innovative projects and leverage my skills to
          drive technological advancements.
        </p>
      </div>
    </div>
  );
};

export default About;
