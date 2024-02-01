import {BiLinkExternal} from "react-icons/bi"
import Button from "./button";

function projectCard(props){

         return(
    

        <div className=" flex md:flex-row flex-col justify-between gap-10  bg-slate-800 rounded-lg shadow-lg shadow-slate-400  transition-all duration-500">
            <div className="flex flex-col gap-[1rem] justify-around  md:max-w-[40%] sm:w-[80%] w-[90%] items-center p-4">
            <h2 className="text-4xl text-slate-200 projectTitle">{props.project.title}</h2>
            <p className="text-xl text-slate-400 projectDesc" >{props.project.description}</p>
            <a href={props.project.url}  target="_blank" className=" md:block hidden">
            <Button data={props.project.btn}></Button>
            </a>
           

            </div>

            <div className="   rounded-lg overflow-hidden my-7 mr-6  shadow-md shadow-slate-400  transition-all duration-500 md:p-0 sm:p-10 p-7 ">
                <img src={`${props.project.image}`} className="  h-full w-full  "></img>
            </div>

            <div className="md:hidden block text-center mb-10">
            <a href={props.project.url}  target="_blank">
            <Button data={props.project.btn}></Button>
            </a>
            </div>
        </div> 
    )
}

export default projectCard;