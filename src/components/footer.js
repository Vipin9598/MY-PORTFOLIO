import {GrLinkedin} from "react-icons/gr"
import {TfiEmail} from "react-icons/tfi"
import {IoLogoGithub} from "react-icons/io"


function footer() {



  return (
    <div className="relative w-full h-[15rem] bg-slate-800 flex items-center">

      <div className=" flex justify-between max-w-[1080px] w-10/12 mx-auto ">

        <h2 className="absolute left-[1rem] bottom-3  text-6xl text-slate-400 select-none opacity-60 footertext">
          VIPIN
        </h2>

        <div className="flex gap-5 text-slate-400 text-[1.5rem]  sm ">

            <a href="#projects"   className="hover:text-orange-400  hover:scale-110 transition-all duration-300 ">Projects</a>
     

            <a href="#skills" className="hover:text-orange-400 hover:scale-110 transition-all duration-300">Skills</a>

            <a href="#main" className="hover:text-orange-400 hover:scale-110 transition-all duration-300">About</a>


        </div>
        <div className="flex gap-5 text-slate-400 text-[2rem] footericon">
            
            <a href="https://linkedin.com/in/vipin-1b3743244" target="_blank" ><GrLinkedin className="hover:text-orange-600 transition-all  duration-300 hover:scale-125"/></a>
            <a href="https://github.com/Vipin9598" target="_blank" ><IoLogoGithub 
            className="hover:text-orange-600 transition-all duration-300 hover:scale-125"/></a>
            <a href="mailto:chauhanvicky1906@gmail.com" ><TfiEmail className="hover:text-orange-600 transition-all duration-300 hover:scale-125"/></a>
        
        </div>
      </div>
    </div>
  );
}

export default footer;
