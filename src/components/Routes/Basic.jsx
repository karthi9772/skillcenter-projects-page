import { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaLock } from "react-icons/fa6";

const Day = () => {
  const [visibleDay, setVisibleDay] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLocked, SetLocked] = useState(true);

  const toggleDay = (day) => {
    setVisibleDay(visibleDay === day ? null : day);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-100 bg-white overflow-y-hidden">
      {/* Day Header and Course title */}
      <div>
        <div className="bg-[#17212E] mt-7 w-max rounded-r-full p-2 md:p-5 cursor-pointer text-black align-center align-middle pr-5 md:pr-12 mt-2 md:mt-4">
          <div>
            <h1 className="text-white text-semibold md:font-bold text-lg md:text-2xl">
              Full Stack
            </h1>
          </div>
        </div>
        <div className=" flex justify-center mb-10">
          <h1 className="text-4xl font-bold underline decoration-[#f5cf6b]  underline-offset-8">
            WEEK 1
          </h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto p-4 bg-[#FFFBEF]">
        {/* Header and description */}
        <div className="bg-[#17212E] text-white p-4 rounded">
          <h2 className="text-xl font-semibold mb-2 text-[#f5cf6b]">
            <span className="text-2xl"> Day 1</span> is all about introduction!
            You will be learning about:
          </h2>
          <p className="text-justify font-semibold text-lg my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            iaculis l aoreet leo a rutrum. Ut efficitur dapibus elit,
            pellentesque mattis diam tristique in. Vestibulum ullamcorper mattis
            lorem vel maximus. Maecenas i n lacinia elit, vel rhoncus felis.
          </p>
        </div>

        {/* Syllabus Header */}
        <div className="bg-[#f5cf6b] w-max rounded-r-full p-2 md:p-5 cursor-pointer my-7 text-black align-center align-middle pr-5 md:pr-12 mt-2 md:mt-4">
          <div>
            <h1 className="text-black text-semibold md:font-bold text-lg md:text-2xl">
              Syllabus
            </h1>
          </div>
        </div>

        {/* Day 1 */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4 shadow-md">
          <button
            onClick={() => toggleDay(1)}
            className="w-full text-left font-semibold text-gray-800"
          >
            Day 1: Introduction
          </button>
          {visibleDay === 1 && (
            <div className="mt-2">
              <div className="bg-gray-200 p-2 rounded-lg mb-2">
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 1: What you're going to learn
                </div>
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 2: What you're going to learn
                </div>
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 3: What you're going to learn
                </div>
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 4: What you're going to learn
                </div>
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 5: Daily Task
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Day 2 */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4 shadow-md">
          <button
            onClick={() => toggleDay(2)}
            className="w-full text-left font-semibold text-gray-800"
          >
            Day 2
          </button>
          {visibleDay === 2 && (
            <div className="mt-2">
              <div className="bg-gray-200 p-2 rounded-lg mb-2">
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 1: What you're going to learn
                </div>
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 2: What you're going to learn
                </div>
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 3: What you're going to learn
                </div>
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 4: What you're going to learn
                </div>
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 5: Daily Task
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Day 3 */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4 shadow-md">
          <button
            onClick={() => toggleDay(3)}
            className="w-full text-left font-semibold text-gray-800"
          >
            Day 3
          </button>
          {visibleDay === 3 && (
            <div className="mt-2">
              <div className="bg-gray-200 p-2 rounded-lg mb-2">
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 1: What you're going to learn
                </div>
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 2: What you're going to learn
                </div>
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 3: What you're going to learn
                </div>
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 4: What you're going to learn
                </div>
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 5: Daily Task
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Day 4 */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4 shadow-md">
          <button
            onClick={() => toggleDay(4)}
            className="w-full text-left font-semibold text-gray-800"
          >
            Day 4
          </button>
          {visibleDay === 4 && (
            <div className="mt-2">
              <div className="bg-gray-200 p-2 rounded-lg mb-2">
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 1: What you're going to learn
                </div>
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 2: What you're going to learn
                </div>
                <div className="text-gray-600 p-4 border-[1px] border-black mb-2 rounded-md">
                  Module 3: What you're going to learn
                </div>
                <div className="text-gray-600 p-4 border-[1px] border-black mb-2 rounded-md">
                  Module 4: What you're going to learn
                </div>
                <div className="text-gray-600 p-4 border-[1px] border-black mb-2 rounded-md">
                  Module 5: Daily Task
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Day 5 */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4 shadow-md">
          <button
            onClick={() => toggleDay(5)}
            className="w-full text-left font-semibold text-gray-800"
          >
            Day 5
          </button>
          {visibleDay === 5 && (
            <div className="mt-2">
              <div className="bg-gray-200 p-2 rounded-lg mb-2">
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 1: What you're going to learn
                </div>
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 2: What you're going to learn
                </div>
                <div className="text-gray-600 p-4 border-[1px] border-black mb-2 rounded-md">
                  Module 3: What you're going to learn
                </div>
                <div className="text-gray-600 p-4 border-[1px] border-black mb-2 rounded-md">
                  Module 4: What you're going to learn
                </div>
                <div className="text-gray-600 p-4 border-[1px] border-black mb-2 rounded-md">
                  Module 5: Daily Task
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Day 6 */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4 shadow-md">
          <button
            onClick={() => toggleDay(6)}
            className="w-full text-left font-semibold text-gray-800"
          >
            Day 6
          </button>
          {visibleDay === 6 && (
            <div className="mt-2">
              <div className="bg-gray-200 p-2 rounded-lg mb-2">
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 1: What you're going to learn
                </div>
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 2: What you're going to learn
                </div>
                <div className="text-gray-600 p-4 border-[1px] border-black mb-2 rounded-md">
                  Module 3: What you're going to learn
                </div>
                <div className="text-gray-600 p-4 border-[1px] border-black mb-2 rounded-md">
                  Module 4: What you're going to learn
                </div>
                <div className="text-gray-600 p-4 border-[1px] border-black mb-2 rounded-md">
                  Module 5: Daily Task
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Day 7 */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4 shadow-md">
          <button
            onClick={() => toggleDay(7)}
            className="w-full text-left font-semibold text-gray-800"
          >
            Day 7
          </button>
          {visibleDay === 7 && (
            <div className="mt-2">
              <div className="bg-gray-200 p-2 rounded-lg mb-2">
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 1: What you're going to learn
                </div>
                <div className="text-gray-600 py-4 border-[1px] border-black mb-2 rounded-md">
                  Module 2: What you're going to learn
                </div>
                <div className="text-gray-600 p-4 border-[1px] border-black mb-2 rounded-md">
                  Module 3: What you're going to learn
                </div>
                <div className="text-gray-600 p-4 border-[1px] border-black mb-2 rounded-md">
                  Module 4: What you're going to learn
                </div>
                <div className="text-gray-600 p-4 border-[1px] border-black mb-2 rounded-md">
                  Module 5: Daily Task
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Video Section */}
        <div className="my-20">
          {/* video Title */}
          <div className="bg-[#f5cf6b] w-max rounded-r-full p-2 md:p-5 cursor-pointer my-7 text-black align-center align-middle pr-5 md:pr-12 mt-2 md:mt-4">
            <div>
              <h1 className="text-black text-semibold md:font-bold text-lg md:text-2xl">
                Video
              </h1>
            </div>
          </div>

          {/* Video Box */}
          <div className="flex flex-row">
            <button>
              <IoIosArrowBack size={36} />
            </button>
            <div className="w-[80%] h-80 mx-auto bg-[#17212E] rounded-lg ">
              <div className=" flex justify-center align-middle items-center">
                {isPlaying ? (
                  <div className="p-3 bg-yellow-400 rounded-full mt-32">
                    <FaPause
                      onClick={togglePlay}
                      className="text-black text-2xl"
                    />
                  </div>
                ) : (
                  <div className="p-3 bg-yellow-400 rounded-full mt-32">
                    <FaPlay
                      onClick={togglePlay}
                      className=" text-black text-2xl"
                    />
                  </div>
                )}
              </div>

              {/* video title */}
              <div className="ml-4 mt-8">
                <h1 className="text-2xl font-semibold text-white">Module 1:</h1>
                <h1 className="text-xl font-semibold text-white">
                  Introduction
                </h1>
              </div>
            </div>
            <button>
              <IoIosArrowForward size={36} />
            </button>
          </div>
        </div>

        <div className={`${isLocked ? "opacity-70" : ""}`}>
          {/* Task heading */}
          <div className="bg-[#F5CF6B] w-max rounded-r-full p-2 md:p-5 cursor-pointer my-7 text-black align-center  pr-5 md:pr-12 mt-2 md:mt-4 align-middle">
            <div className="flex flex-row  items-center align-middle justify-between ">
              <h1 className="text-black text-semibold md:font-bold text-lg md:text-2xl">
                Task
              </h1>
              <FaLock
                onClick={() => SetLocked(!isLocked)}
                className="ml-8 mt-1 text-xl"
              />
            </div>
          </div>

          {/* Task Box */}
          <div className="w-[90%] mx-auto h-fit p-7 bg-[#17212E] rounded-md md:mt-28">
            <div className="px-4 ">
              <h1 className="text-2xl text-[#F5CF6B] font-bold">Question</h1>
            </div>
            <p className="text-justify md:px-10 pt-6 text-xl font-medium text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              iaculis l aoreet leo a rutrum. Ut efficitur dapibus elit,
              pellentesque mattis diam ltrices in. Vestibulum ullamcorper mattis
              lorem vel maximus. Maecenas i n lacinia elit, vel rhoncus felis.
              In eleifend faucibus venenatis. uis at egestas tortor. Ut et enim
              laoreet, venenatis risus.
            </p>
          </div>
        </div>

        {/* Add file btn area */}
        <div className="mb-16 mt-5">
          <div className="flex flex-col md:flex-row  mx-auto ">
            <input
              type="text"
              placeholder="upload a link of your task"
              className=" ml-4 h-14 w-[80%] border-2 px-4 focus:outline-none placeholder:pl-4 placeholder:text-black border-solid mx-auto"
            />
            <button className="bg-[#17212E] text-[#F5CF6B] py-2 px-4 rounded-md font-semibold mx-auto mt-5 md:mt-0">
              Submit Link
            </button>
          </div>
        </div>

        {/* Center */}
      </div>
    </div>
  );
};

export default Day;
