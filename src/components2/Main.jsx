import humanLogo from "./../assets/humans-removebg-preview.png"

import "./Main.css";
const Main = () => {

    return (
        <div className="flex container flex-col p-0">
            <div className="flex pt-2">
                <div className="absolute left-6 ">
                <h5 style={{ fontFamily: 'MuseoModerno'}} className="text-4xl font-semibold tracking-[8px]" >Ligovis</h5>
                <h6 style={{ fontFamily: 'askara' }} className="text-sm "> TECHNICAL SOLUTIONS</h6>
                </div>
                <div className="absolute right-0 lg:right-10 inline text-base sm:text-xl">
                    
                    <button class=" text-orange-500 font-bold  py-2 px-2 md:px-3 lg:px-6 "> 
                    <span class="underline-effect">Trainers</span></button>
                    <button class=" text-orange-500 font-bold    py-2 md:px-3 lg:px-6  ">
                    <span class="underline-effect">Blogs</span>  
                    </button>
                    <span className="text-orange-500 text-xl font-bold" >|</span>
                    <button class=" text-orange-500 font-bold     py-2 md:px-3 lg:px-6 "><span class="underline-effect">Verify</span></button>
                
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 relative mt-28 xs:flex-col">

                <div className="lg:ml-20 lg:mt-16 md:mt-20 flex-shrink-0">
                    <p className="  md:text-left lg:text-left sm:text-center lg:text-4xl  text-3xl   font-[Noto sans sans font-serif] text-orange-600 tracking-wider">
                       <span className="font-'Aldrich' ">Unveil</span>  Your potential

                    </p>
                    <p className="lg:text-4xl text-3xl sm:text-center md:text-left lg:text-left font-[Noto sans sans font-serif] text-orange-600 tracking-wider mt-3">
                        Take the first step in <b className="text-black">Learning! </b>
                    </p>
                    <div className="text-xl font-semibold text-center mt-8">
                    <p >
                            "Discover ligovis your personalised learning platform.
                    </p>
                    <p>
                        Dive into beginner friendly courses and start you learning journey"
                    </p>
                    </div>
                    </div>
                   
                <div className="lg:justify-self-end md:justify-self-end justify-self-center ">
                    <img src={humanLogo} alt="img" width={400} />
                </div>

            </div>


        </div>
    )
}
export default Main;