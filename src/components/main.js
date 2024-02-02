import TypingComponent from "./typing";
import Button from "./button"
import image from "../images/cv1.jpeg"
import Resume from "../images/New_Resume.pdf"
import {motion,animate} from "framer-motion"
function main(){

    const data="My Resume"
    
    return (
        <div className="  mt-[100px] flex md:flex-row flex-col-reverse justify-between items-center gap-5 " id="main">
            <motion.div  initial={{opacity:0,x:-150}} whileInView={{opacity:1,x:0,transition:{duration:1,ease:"easeInOut"}}} className=" text-gray-400 sm:w-7/12 w-11/12 max-w-[480px] mt-8 flex flex-col gap-5">
                {/* <p className="text-3xl font-bold text-red-500">MERN DEVLOPER
                </p> */}
                <div className="flex flex-col gap-3 text-gray-400 text-3xl my-5">Hi,<br/> I'm Vipin,<br/> <TypingComponent /></div>
                <div className="text-xl  leading-8 my-8  tracking-wide ">Hey there, I'm Vipin , I'm a final year B.Tech student and a full stack developer with a penchant for turning ideas into interactive digital experiences. Join me as I showcase my journey through a collection of projects that blend creativity and technology.</div>
                {
                   <a href={Resume} download="MY CV" >
                   <Button data={data}></Button>
               </a>
               
                
                }

            </motion.div>
            <motion.div initial={{opacity:0,x:150}} whileInView={{opacity:1,x:0,transition:{duration:1,ease:"easeInOut"}}}  className=" my-auto sm:w-5/12 w-7/12 rounded-md">
                    <div className=" md:rounded-md rounded-full overflow-hidden w-fit">
                        <img src={image} className="object-cover" />
                    </div>
                    
            </motion.div>

        </div>
    )
}

export default main;