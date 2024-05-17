import React from "react";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-50px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#F53838] font-bold p-2">
          TAKE CONTROL OF YOUR FINANCES TODAY
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast and flexible financing,
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Track", "Save", "Grow"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your spending in real-time and get instant insights into your
          financial habits.
        </p>
        <button className="bg-[#F53838] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
