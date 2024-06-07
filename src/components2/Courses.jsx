import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ethicalHacking from "./../assets/ethicalHacking.png";
import penTesting from "./../assets/penTesting.png";
import networking from "./../assets/networking.png";
import vapt from "./../assets/vapt.png";
import WAPT from "./../assets/WAPT.png";
import bugBounty from "./../assets/bugBounty.png";
import { FaLinkedin, FaInstagram, FaRegCheckCircle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ScrollBar from "./ScrollBar";
import "./Main.css";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import FAQSection from "./Faq";
import KeyHighlights from "./KeyHighlights";

const Courses = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const cardList = [
    {
      name: "Ethical Hacking",
      img: ethicalHacking,
      heading: "ETHICAL HACKING",
      subtext:
        "Explore the art of Ethical hacking,unlocking security while upholding integrity",
    },
    {
      name: "PENETRATION TESTING",
      img: penTesting,
      heading: "PENETRATION TESTING",
      subtext:
        "Strengthen website defenses with expert pentesting for unparalleled security assurance",
    },
    {
      name: "BUG BOUNTY",
      img: bugBounty,
      heading: "BUG BOUNTY",
      subtext: "Harness the power of the crowd with our Bug Bounty.",
    },
    {
      name: "VAPT ",
      img: vapt,
      heading: "VAPT",
      subtext:
        "Vulnerability Assessment and Penetration Testing safeguard digital assets comprehensively.",
    },
    {
      name: "NETWORKING",
      img: networking,
      heading: "NETWORKING",
      subtext:
        "Networking enhances connectivity, facilitating seamless communication and resource sharing.",
    },
    {
      name: "WAPT",
      img: WAPT,
      heading: "WAPT",
      subtext:
        "Web Application Penetration Testing ensures online platforms' resilience and security.",
    },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const sheetDbUrl = "https://sheetdb.io/api/v1/w8so3wje5uqbf";
  const timeStampCreator = () => {
    const currentDate = new Date();
    const indianISOString = currentDate
      .toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        timeZoneName: "short",
      })
      .slice(0, -6);

    setTimestamp(indianISOString);
  };

  const handleSubmit = async () => {
    timeStampCreator();

    try {
      const response = await fetch(sheetDbUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              Name: name,
              Email: email,
              Phone: phone,
              Course: course,
              Timestamp: timestamp,
            },
          ],
        }),
      });

      setName("");
      setEmail("");
      setPhone("");
      setCourse("");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => window.location.reload(), 1000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleEnrollnow = () => {
    const targetDiv = document.querySelector("#contactus");
    console.log(targetDiv);
    targetDiv.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex-col text-center mt-12">
        <p className="text-3xl font-medium">Courses</p>
        <p className="text-orange-600 text-xl mt-2 lg:text-center md:text-center xs:text-start xs:px-4">
          Hey <b>enthusiast!</b> Dive into a knowledge realm with our{" "}
          <b>captivating</b> courses tailored just for you,
        </p>
        <p className="text-orange-600 text-xl lg:text-center md:text-center xs:text-start xs:px-4">
          Enroll <b>today</b> and set off on your journey towards expertise.
        </p>
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mt-6 px-10">
        {/* three divs */}
        {/* 1 st */}
        {cardList.map((item, index) => (
          <div
            className="flex flex-col outline mt-6 rounded-lg items-center p-10 transition-transform duration-300 transform cursor-pointer hover:scale-105"
            key={index}
            data-aos="fade-down" // Add AOS animation here
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.cursor = "pointer";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.cursor = "default";
            }}
          >
            <div className="relative p-10 bg-orange-600 rounded-full justify-items-center items-center">
              <img
                className="object-cover transform scale-125"
                src={item.img}
                alt={item.name}
                width={150}
              />
            </div>
            <div className="text-center">
              <p className="text-xl font-medium">{item.heading}</p>
              <p>{item.subtext}</p>
            </div>
            <div className="grid grid-cols-6">
              <div
                className="col-span-2"
                style={{ borderTop: "2px solid black", marginTop: "25px" }}
              ></div>
              <div className="col-span-2 items-center justify-center">
                <p
                  className="lg:block xs:hidden outline rounded-2xl w-auto mt-2 p-1 bg-black text-white"
                  onClick={handleEnrollnow}
                >
                  Enroll now
                </p>
                <p
                  className="xs:block lg:hidden outline rounded-2xl w-auto mt-2 p-1 bg-black text-white"
                  onClick={handleEnrollnow}
                >
                  Enroll
                </p>
              </div>
              <div
                className="col-span-2"
                style={{ borderTop: "2px solid black", marginTop: "25px" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <KeyHighlights />
      {/* trainers info div */}
      <div className="py-4">
        <p className="text-center text-4xl font-medium pb-4 text-orange-500">
          Our Trainers
        </p>
        <p className="px-4 text-justify text-xl font-semibold">
          Our course's is led by a team of highly skilled trainers, each
          possessing extensive expertise and industry-recognized certifications.
          Our trainers bring a wealth of practical experience in cybersecurity,
          penetration testing, and ethical hacking to the table.Their deep
          understanding of security frameworks, network protocols, and
          vulnerability assessment methodologies ensures that students receive
          top-notch training in the latest techniques and tools used in the
          cybersecurity field. Moreover, our trainers' real-world experience
          allows them to provide valuable insights and practical scenarios,
          enhancing the learning experience and preparing students for
          real-world challenges in cybersecurity.
        </p>
      </div>
      <div>
        <h2 className="text-center text-orange-500 text-4xl font-semibold">
          Tools We Cover
        </h2>
        <ScrollBar />
      </div>
      <br />
      <br></br>
      <div id="contactus" className="flex flex-col lg:flex-row lg:gap-4 ml-8 ">
        {/* Left Part */}
        <div className="lg:w-1/2 lg:bg-orange-500 rounded-bl-[50px] rounded-tl-[50px] ">
          <h2
            className="text-xl lg:text-5xl text-white pt-4 pr-4 text-right font-bold hidden lg:block"
            style={{ fontFamily: "Aldrich" }}
          >
            Book a
          </h2>
          <h2 className="text-xl lg:text-2xl text-center font-bold lg:hidden">
            <span style={{ fontFamily: "Aldrich" }}>Book a Dem</span>
            <span style={{ fontFamily: "Cinzel Decorative" }}>O</span>
          </h2>
          <div className="lg:mt-16 lg:p-4 lg:px-12  text-xl  text-white xs:hidden lg:block">
            <p className="pb-2 flex  items-start">
              <FaRegCheckCircle size={37} className="mr-2 " /> Fill out the
              required information in the form, including your name, email,
              phone number, and course for the demo.
            </p>
            <p className="pb-2 flex items-start">
              <FaRegCheckCircle size={21} className="mr-2" />
              Double-check the information you've provided for accuracy.
            </p>
            <p className="pb-2 flex items-start">
              <FaRegCheckCircle size={23} className="mr-2" />
              Submit your request for the demo by clicking the designated
              button.
            </p>
            <p className="pb-2 flex items-start">
              <FaRegCheckCircle size={30} className="mr-2" />
              Await confirmation from Ligovis' team regarding the scheduling of
              your demo session.
            </p>
          </div>
        </div>

        {/* Right Part */}
        <div className="lg:w-1/2 lg:pr-16 xs:pr-8">
          <h2 className="text-xl lg:text-5xl pt-[20px] font-bold hidden text-orange-500 lg:block">
            <span style={{ fontFamily: "Aldrich" }}>DEM</span>
            <span style={{ fontFamily: "Cinzel Decorative" }}>O</span>
          </h2>
          <form
            className="lg:mt-4"
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <p className="pt-2 text-center font-semibold">
              Kindly complete the form, and we'll address all your queries
              promptly.
            </p>
            <div className="mb-4">
              <input
                type="text"
                className="p-2 w-full border rounded-md mt-8"
                placeholder="Name"
                onChange={handleNameChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="border p-2 w-full rounded-md"
                placeholder="Mobile Number"
                onChange={handlePhoneChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="border p-2 w-full rounded-md"
                placeholder="Email"
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="border p-2 w-full rounded-md"
                placeholder="Courses"
                onChange={handleCourseChange}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-orange-500 text-white font-bold py-2 px-4 rounded-2xl transition-transform hover:scale-105"
              >
                Submit
              </button>
            </div>
            <p className="pt-2 text-sm text-center">
              {" "}
              I acknowledge that I agree to comply with the
            </p>
            <p className="text-sm text-center">
              <strong>terms of service</strong> and{" "}
              <strong>privacy policy.</strong>
            </p>
          </form>
        </div>
      </div>
      <br />
      <FAQSection />
      <br />
      <div className="flex flex-wrap bg-orange-500  justify-center">
        {/* Box 1 */}
        <div className="w-full md:w-1/3 p-4">
          <div className="p-4 h-full rounded-lg flex text-white flex-col justify-center items-center">
            <h2
              className="text-2xl font-bold text-left"
              style={{
                fontFamily: "'MuseoModerno', sans-serif",
                color: "white",
              }}
            >
              Ligovis
            </h2>
            <p className="lg:text-center xs:text-start">
              It's a simple yet important notice that underscores the commitment
              to protecting the creative works and upholding the rights under
              copyright law.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-full md:w-1/3 px-4">
          <div className="lg:p-4 xs:p-4 lg:pt-10 lg:pl-32 h-full rounded-lg flex flex-col text-white">
            <h1 className=" text-white xs:text-center text-2xl">QuickLinks</h1>
            <div className="flex lg:pt-4 xs:pt-2 text-start">
              <a href="/">Home</a>
            </div>
            <div className="flex text-center mt-2">
              <a>Privacy Policy</a>
            </div>
            <div className="flex text-left mt-2">
              <a>Terms & Conditions</a>
            </div>
            <div className="flex text-left mt-2">
              <a>Refund Policy</a>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="w-full md:w-1/3 p-4">
          <div className="lg:p-4 xs:p-4 lg:pt-0 h-full rounded-lg flex flex-col text-white justify-center items-center">
            <h2 className="text-3xl font-semibold ">Follow Us</h2>
            <div className="flex mt-2">
              <a href="#linkedin" className="mr-2 hover:text-[#0072b1]">
                <FaLinkedin className="h-9 w-9" />
              </a>
              <a href="#twitter" className="mr-2 hover:text-[#1da1f2]">
                <FaXTwitter className="h-9 w-9" />
              </a>
              <a href="#instagram" className="mr-2 hover:text-pink-400">
                <FaInstagram className="h-9 w-9 " />
              </a>
              <a
                href="mailto:rakeshmiriyala74@gmail.com"
                className="mr-2 hover:text-white"
              >
                <IoMail size={24} className="h-9 w-9" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full text-center pb-4">
          <p className="text-white text-lg">
            &copy; {new Date().getFullYear()} Ligovis. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
