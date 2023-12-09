// import image from '../images/html.png'
function skillCard(props){

console.log(props.skill.path);
    return(
        <div className={ `flex flex-col  skillcontainer justify-evenly h-3.3rem shadow-md  my-4 w-fit px-16 py-4 ${props.skill.color} hover:scale-110 rounded-lg  transition-all duration-500   skillcard`  }>
            <img src={props.skill.path} className="w-20 mx-auto skillImg"></img>
            <p className="text-slate-400 mt-4 mx-auto">{props.skill.name}</p>
        </div>
    )
}
export default skillCard