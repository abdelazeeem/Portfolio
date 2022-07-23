import react from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import S from "../assets/S.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <img className="w-32 mx-auto py-7 rounded-full" src={S} />
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6]">
          Abdelazeem Mohey
        </h1>
        <h2 className="text-4xl sm:text-4xl font-bold text-[#8892b0]">
          I'm a FrontEnd Developer .
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am passionate about building excellent software that improves the
          lives of those around me. I am a self-motivated person who is willing
          to go above and beyond on any project. I’m interested in the Web
          development field, I have background in Front-End Web Development
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
