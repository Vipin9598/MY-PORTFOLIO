import React from "react";

const Modal = ( {data} ) => {
    console.log("call a gi",data)
  return (
    <div className="absolute flex flex-col gap-5 top-7 right-5 bg-slate-600 w-fit text-white rounded-md py-5 px-5 h-fit">
      {
        data.map((item,index)=>{
            return (
                <div className=" text-xl">
                    <a href={item.link}>{item.name}</a>
                </div>
            )
        })
      }
    </div>
  );
};

export default Modal;
