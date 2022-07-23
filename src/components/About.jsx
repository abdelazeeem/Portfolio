import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              BIO
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              {" "}
              <span className="text-4xl font-bold text-pink-600 "> Hi. </span>
              I'm Abdelazeem , Please take a look around.
            </p>
          </div>
          <div>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              I am passionate about building excellent software that improves
              the lives of those around me. I am a self-motivated person who is
              willing to go above and beyond on any project. I’m interested in
              the Web development field, I have background in Front-End Web
              Development{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
