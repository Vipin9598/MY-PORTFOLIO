import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import Modal from "./Modal";

const navData = [
  {
    name: "Project",
    link: "#projects",
  },
  {
    name: "SKills",
    link: "#skills",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

function Navbar() {
  // const {ham,setham}=useState(0)
  const [hamBurger, setHamBurger] = useState(true);
  const [modalData, setModalData] = useState(null);
  const clickHandler = () => {
    setHamBurger(!hamBurger)
    {
        hamBurger ?setModalData(navData) :setModalData(null)
    }
  }

  return (
    <div className=" bg-slate-800 fixed top-0 z-30 w-full px-5">
      <div className=" flex justify-between  mx-auto max-w-[1080px] w-[10/12] py-5 ">
        <div className=" text-gray-400 text-2xl navhead">VIPIN</div>
        <div className="relative">
          {/* <div className="flex flex-col hidden hamshow  pt-2" >
                    <div className="h-[0.15rem] w-5 mb-[0.3rem] bg-white"></div>
                    <div className="h-[0.15rem] w-5 mb-[0.3rem] bg-white"></div>
                    <div className="h-[0.15rem] w-5 mb-[0.3rem] bg-white"></div>
                    
                </div> */}
          <button className="flex flex-col hidden hamshow  pt-2">
            {hamBurger ? (
              <button onClick={clickHandler}>
                <RxHamburgerMenu className="text-white text-xl" />
              </button>
            ) : (
              <button onClick={clickHandler}>
                <RxCross1 className="text-white text-xl" />
              </button>
            )}
          </button>
          <div className="hamhide flex">
            <ul className=" flex gap-7 text-gray-400  text-2xl ">
              <li className=" hover:border-b-2 border-slate-400 navtext">
                <a href="#projects">Project</a>
              </li>
              <li className=" hover:border-b-2 border-slate-400 navtext">
                <a href="#skills">Skills</a>
              </li>
              <li className=" hover:border-b-2 border-slate-400 navtext ">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          {
            modalData && <Modal data={navData}/>
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
