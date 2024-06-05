import ethicalHacking from "./../assets/ethicalHacking.png";
import penTesting from "./../assets/penTesting.png";
import networking from "./../assets/networking.png";
import vapt from "./../assets/vapt.png";
import WAPT from "./../assets/WAPT.png";

import bugBounty from "./../assets/bugBounty.png";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import ScrollBar from "./ScrollBar";
import "./Main.css"


const Courses = () => {

    const cardList = [
        {
            name: "Ethical Hacking",
            img: ethicalHacking,
            heading: "ETHICAL HACKING",
            subtext: "Explore the art of Ethical hacking,unlocking security while upholding integrity"
        },
        {
            name: "PENETRATION TESTING",
            img: penTesting,
            heading: "PENETRATION TESTING",
            subtext: "Strengthen website defenses with expert pentesting for unparalleled security assurance"
        }, {
            name: "BUG BOUNTY",
            img: bugBounty,
            heading: "BUG BOUNTY",
            subtext: "Harness the power of the crowd with our Bug Bounty."
        }, {
            name: "VAPT ",
            img: vapt,
            heading: "VAPT",
            subtext: "Vulnerability Assessment and Penetration Testing safeguard digital assets comprehensively."
        }, {
            name: "NETWORKING",
            img: networking,
            heading: "NETWORKING",
            subtext: "Networking enhances connectivity, facilitating seamless communication and resource sharing."
        }, {
            name: "WAPT",
            img: WAPT,
            heading: "WAPT",
            subtext: "Web Application Penetration Testing  ensures online platforms' resilience and security."
        },
        {
            name: "CHFI",
            img: WAPT,
            heading: "CHFI",
            subtext: "Computer Hacking Forensic Investigator uncovers digital crime evidence effectively."
        }

    ]


const [name,setName]= useState("");
const [email,setEmail] = useState("");
const [phone,setPhone] = useState("");
const [course,setCourse]  = useState("");
const [timestamp,setTimestamp] =useState("")
const sheetDbUrl = "https://sheetdb.io/api/v1/w8so3wje5uqbf";
const timeStampCreator = ()=>{
const currentDate = new Date();
const indianISOString = currentDate.toLocaleString('en-IN', {
  timeZone: 'Asia/Kolkata',
  timeZoneName: 'short',
}).slice(0, -6);

setTimestamp(indianISOString);

}
const handleSubmit = async () => {
    timeStampCreator();
    
  try {
    const response = await fetch(sheetDbUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: [
          {
            'Name': name,
            'Email': email,
            'Phone': phone,
            'Course': course,
            'Timestamp':timestamp
          }
        ]
      })
    });

    const data = await response.json();
    console.log(data); // Assuming you want to log the response data
    //logging the sent data;
    console.log(timestamp);
    // Reset state variables to empty after sending
    setName("");
    setEmail("");
    setPhone("");
    setCourse("");
  } catch (error) {
    console.error('Error:', error);
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
const handleEnrollnow = ()=>{
    const targetDiv = document.querySelector('#contactus');
    console.log(targetDiv);
    targetDiv.scrollIntoView({ behavior: 'smooth' });
}
    return (
        <div>

            <div className="flex-col text-center mt-12 ">
                <p className="text-3xl font-medium">
                    Courses
                </p>
                <p className="text-orange-600 text-xl mt-2">
                    Hey  <b>enthusiast!</b> Dive into a knowledge realm with our <b>captivating</b> courses tailored just for you,
                </p>
                <p className="text-orange-600 text-xl">
                    Enroll <b>today</b> and set off on your journey towards expertise.
                </p>

            </div>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mt-6 px-10">

                {/* three divs */}
                {/* 1 st */}

                {cardList.map((item) => (
                    <div className=" flex flex-col outline mt-6 rounded-lg items-center p-10" key={item.id}>
                        <div className=" relative p-10 bg-orange-600 rounded-full justify-items-center items-center ">
                            <img className="object-cover transform scale-125" src={item.img} alt={item.name} width={150} />
                        </div>
                        <div className="text-center">
                            <p className="text-xl font-medium">{item.heading}</p>
                            <p>{item.subtext}</p>
                        </div>
                        <div className="grid grid-cols-6">
                            <div className="col-span-2" style={{ borderTop: "2px solid black", marginTop: "25px" }}></div>
                            <div className="col-span-2 items-center justify-center">
                                <button className="outline rounded-2xl mt-2 p-1 bg-black text-white" onClick={handleEnrollnow}>Enroll now</button></div>
                            <div className="col-span-2" style={{ borderTop: "2px solid black", marginTop: "25px" }}></div>
                        </div>

                    </div>))
                }


            </div>
            {/* trainers info div */}
            <div className=" py-5">
                <p className="text-center text-3xl font-medium text-orange-500">Our Trainers</p>
                <p className="px-2 text-justify text-xl font-semibold">
                    Our course's is led by a team of highly skilled trainers, each possessing extensive expertise and industry-recognized certifications. Our trainers bring a wealth of practical experience in cybersecurity, penetration testing, and ethical hacking to the table.Their deep understanding of security frameworks, network protocols, and vulnerability assessment methodologies ensures that students receive top-notch training in the latest techniques and tools used in the cybersecurity field. Moreover, our trainers' real-world experience allows them to provide valuable insights and practical scenarios, enhancing the learning experience and preparing students for real-world challenges in cybersecurity.
                </p>
            </div>
            <div  >
                
                <h2 className="text-center text-orange-500 text-4xl " >Tools We Cover</h2>
                <ScrollBar/>
            </div>
            <div id="contactus" className="grid grid-cols-9 p-10 ml-5 mb-5"  >
                <div style={{fontFamily: "'Aldrich', sans-serif"}} className="hidden md:block col-span-4  bg-orange-500 text-white rounded-l-3xl   text-6xl text-right pr-10 " >
                    Book a
                </div>
                <div  className="flex-col col-span-7 md:col-span-5 md:pl-9" >
                    <div>
                        <p style={{fontFamily: "'Aldrich', sans-serif"}} className="text-3xl sm:text-4xl md:text-6xl sm:text-center md:text-left text-orange-500 "> <span className="md:hidden">Book a </span>DEMO!</p>
                         
                    </div>
                    <div className="justify-self-center self-center text-center pt-10 md:px-16">
                    <p className="text-xl">Kindly complete the form, and we'll address all your queries promptly</p>
                    <form 
                    onSubmit={(event)=>{
                        event.preventDefault();
                        handleSubmit();
                      }}
                    >
                        <div className="grid grid-rows-4  gap-y-6 pt-3 pb-3" >
                

                        <input className="outline-none border border-black rounded-lg p-2 " placeholder="Name"onChange={handleNameChange} required></input>
    
                    
                        
                        <input className="outline-none border border-black rounded-lg" placeholder=" +91 Phone Number" onChange={handlePhoneChange} required></input>
                        
                        <input className="outline-none border border-black rounded-lg" placeholder=" Email" onChange={handleEmailChange} required></input>
                        
                        <input className="outline-none border border-black rounded-lg" placeholder=" Courses" onChange={handleCourseChange} required></input>
                       
                        </div>
                        <button class="p-2 drop-shadow border-orange-500 border hover:bg-orange-500 rounded-md ">
                         Submit
                        </button>
                        </form>
                       
                       
                        
                    </div>


                </div>

            </div>

            <div className="bg-orange-500 flex-col text-white text-center pt-4 mt-10 rounded-b-3xl">
                <div className=" row-y-0">
                    <h6 style={{ fontFamily: 'MuseoModerno' }} className="text-3xl tracking-[6px]">Ligovis</h6>
                    <p className="font-sans text-xl">Technical solutions</p>
                </div>
                <div className="flex list-none justify-content-center gap-x-2">

                    <li>Home |</li><li>Courses |</li><li>Trainers |</li><li>Contact us</li>

                </div>
                <div className="flex mt-2 justify-content-center">
                    <a href="https://www.linkedin.com/in/Ligovis" className="mr-2 focus:focus-visible: ">
                        <FaLinkedin
                            className="h-7 w-7"
                            style={{color:"white" }}
                        />
                    </a>
                    <a href="https://www.instagram.com/ligovis/" className="mr-2">
                        <FaXTwitter
                            className="h-7 w-7"
                            style={{color:"white" }}
                        />

                    </a>
                    <a href="https://www.instagram.com/ligovis/" className="mr-2">
                        <FaInstagram
                            className="h-7 w-7"
                            style={{color:"white" }}

                        />
                    </a>
                </div>
                <div >
                    <p>Copyright@2024.All rights reserved</p>
                </div>
            </div>
        </div>
    )

}
export default Courses;