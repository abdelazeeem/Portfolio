import React from "react";
import WorkImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-4">// my recent work</p>
        </div>

        {/* countainer */}
        <div className="w-full grid  gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <h2 className=" text-4xl my-4 text-pink-600"> Heating monitor</h2>
            <p>
              {" "}
              Controlling generator temperature by controlling fan speed .
              Storing generator status in database Sending / receiving generator
              temperature and fan speed to web application using nodeMcu
              wifi_Module{" "}
            </p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <h2 className=" text-4xl my-4 text-pink-600"> Login System </h2>
            <p>
              {" "}
              A login generally requires the user to enter two pieces of
              information, first a user name and then a password{" "}
            </p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <h2 className=" text-4xl my-4 text-pink-600"> A&M Shop</h2>
            <p>
              {" "}
              E-commerce (electronic commerce) is the buying and selling of
              goods and services{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
