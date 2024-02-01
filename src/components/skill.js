import data from "../skillData";
import Card from "../components/skillCard";
import {motion,animate} from "framer-motion"
const cardAnimation =(index)=>( {
  initial:{
    opacity:0,
    x:-100-10*index
  },
  animate:{
    opacity:1,
    x:0,
    transition:{
      duration:1,
      type:"spring",
      damped:5,
      stiffness:200
    }
  },
})
function skill() {
  return (
    <div className="flex flex-col max-w-[1080px] w-10/12 mx-auto mt-20 relative" id="skills">
        <h2 className="absolute text-8xl text-slate-400 select-none  -bottom-[5rem] xl:left-[100%] lg:left-[85%] md:left-[70%] sm:left-[73%] left-[60%] opacity-0 sm:opacity-40 ">
          Skills
        </h2>
      <p
        className=" text-6xl skillHeading text-orange-500 flex  border-b-4 border-black pb-4 w-fit"
        id="projects"
      >
        Skills
      </p>
      <div className=" flex flex-wrap gap-5 mt-8 justify-evenly  ">
        {data.map((skill, index) => {
          return (
            <motion.div  variants={cardAnimation(index)} viewport={{once:true}} initial="initial" whileInView="animate">
              <Card skill={skill} key={index}></Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default skill;
