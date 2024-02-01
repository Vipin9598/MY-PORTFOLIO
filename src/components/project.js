import data from "../projectData";
import Card from "../components/projectCard";
import { motion } from "framer-motion";
function Project() {
  return (
    <>
      <div className="project-container pb-3" id="projects">
        <p className=" text-6xl text-orange-500 flex mx-auto border-b-4 border-black pb-4 w-fit">
          Projects
        </p>
        <div className=" flex flex-col gap-20">
          {data.map((project) => {
            return (
              <motion.div
              viewport={{once:true}}
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              >
                <Card project={project} key={project.id}></Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Project;
