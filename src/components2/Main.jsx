import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import humanLogo from "./../assets/humans-removebg-preview.png";
import "./Main.css";

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col m-4 mt-0">
      <nav className="py-3">
        <div className="flex justify-between items-center">
          {/* Left Side */}
          <div>
            <h1
              className="lg:text-5xl xs:text-3xl font-semibold"
              style={{
                fontFamily: "MuseoModerno",
              }}
            >
              Ligovis
            </h1>
            <p
              className="lg:text-xl xs:text-lg"
              style={{ fontFamily: "askara" }}
            >
              Technical Solutions
            </p>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden">
            <button onClick={toggleNav} className="">
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Right Side (Desktop) */}
          <div className="hidden text-orange-500 lg:flex items-center">
            <button className="ml-4 text-2xl font-bold">Trainers</button>
            <button className=" ml-4 text-2xl font-bold">Blogs</button>
            <button className=" ml-4 text-2xl font-bold">| Verify</button>
          </div>
        </div>

        {/* Collapsed Menu (Mobile) */}
        <div
          className={`lg:hidden text-orange-500 font-bold ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <button className="block  py-2 pt-4 w-full font-bold text-xl text-left">
            Trainers
          </button>
          <button className="block  py-2  w-full font-bold text-xl text-left">
            Blogs
          </button>
          <button className="block  py-2 w-full font-bold text-xl text-left">
            Verify
          </button>
        </div>
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 relative lg:mt-12">
        <div
          className="lg:ml-20 lg:mt-16 md:mt-20 flex-shrink-0 text-content xs:order-2 order-1 "
          data-aos="fade-right"
        >
          <p className="md:text-left lg:text-left sm:text-center lg:text-4xl text-3xl font-[Noto sans sans font-serif] text-orange-600 tracking-wider">
            <span className="font-'Aldrich' ">Unveil</span> Your potential
          </p>
          <p className="lg:text-4xl text-3xl sm:text-center md:text-left lg:text-left font-[Noto sans sans font-serif] text-orange-600 tracking-wider mt-2 lg:mt-3">
            Take the first step in <b className="text-black">Learning!</b>
          </p>
          <div className="text-xl font-semibold text-start mt-8">
            <p className="pl-2">
              "Discover Ligovis, your personalized learning platform.
            </p>
            <p className="lg:pl-4 pl-2">
              Dive into beginner-friendly courses and start your learning
              journey."
            </p>
          </div>
        </div>
        <div
          className="lg:justify-self-end md:justify-self-end justify-self-center xs:order-1 order-2"
          data-aos="fade-left"
        >
          <img src={humanLogo} alt="img" width={400} />
        </div>
      </div>
    </div>
  );
};

export default Main;
