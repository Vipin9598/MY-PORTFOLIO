import React, { useState } from "react";
import Button from "./button";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { apiConnector } from "../Service/connector";
import {motion,animate} from "framer-motion"
const BASE_URL = process.env.REACT_APP_BASE_URL

const url = BASE_URL+"/portfolio/sendMessage" 

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const data = "Send Message";
  console.log(url)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  let toastId ;
  const submitHandler = async (data) => {
    toastId = toast.loading("Loading...");
    setLoading(true);
    try {
      const { email, name, subject, message } = data;
      const response = await apiConnector("POST", url, {
        email,
        name,
        subject,
        message,
      });
      console.log("api  hit response......", response);
      if (!response.data.success) {
        toast.error(response.data.message);
        throw new Error(response.data.message);
      }
      toast.success("Mail Sent Successfully");
      toast.success("Thankyou");
    } catch (error) {
      console.log("api hit response error ", error);
      toast.error("Error occur during sending an email");
      toast.error("please try again");
    }
    toast.dismiss(toastId);
    setLoading(false);
  };

  return (
    <div
      id="contact"
      className=" w-full mx-auto  mt-20  border-b-2 pb-3 flex flex-col gap-8 "
    >
      <motion.h1 viewport={{once:true}}  initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0,transition:{duration:2}}}  className="text-6xl font-bold text-orange-700 border-b-4 border-black pb-4  w-fit formheading">
        Contact Me
      </motion.h1>
      <motion.p  initial={{opacity:0,x:100}} viewport={{once:true}}  whileInView={{opacity:1,x:0,transition:{duration:2}}}  className="text-4xl font-semibold text-slate-500 formtitle">
        Questions, thoughts, or just want to say hello?
      </motion.p>
      <motion.div initial={{opacity:0,y:200}} viewport={{once:true}}  whileInView={{opacity:1,y:0,transition:{duration:2}}} className="">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="my-3 mt-5 flex flex-col gap-10 w-[80%] mx-auto"
        >
          <div>
            <input
              placeholder="Enter your Name "
              className="w-full h-12 rounded-lg placeholder:text-xl px-4 shadow-lg shadow-slate-500  text-slate-500 text-xl placeholderText"
              {...register("name", { required: true })}
            ></input>
            {errors.name && (
              <span className="pt-3 text-white ">Name is Required</span>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter your E-mail Address "
              className="w-full h-12 rounded-lg placeholder:text-xl px-4 shadow-lg shadow-slate-500 placeholderText"
              {...register("email", { required: true })}
            ></input>
            {errors.email && (
              <span className="pt-3 text-white ">Email is Required</span>
            )}
          </div>

          <div>
            <input
              placeholder="Enter your Subject "
              className="w-full h-12 rounded-lg placeholder:text-xl px-4 shadow-lg shadow-slate-500 placeholderText"
              {...register("subject", { required: true })}
            ></input>
            {errors.subject && (
              <span className="pt-3 text-white ">Subject is Required</span>
            )}
          </div>

          <div>
            <textarea
              placeholder="Enter Your Message"
              className="w-full  h-48 rounded-lg placeholder:text-xl px-4 shadow-lg shadow-slate-500 placeholderText"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <span className="pt-3 text-white ">
                Please Enter a Message for Me
              </span>
            )}
          </div>
          <Button data={data} loading={loading}/>
          {/* {
            ! loading ? (<Button data={data} type="submit"/>) : (<Button data={data}/>)
          } */}
        </form>
      </motion.div>
    </div>
  );
}
export default ContactForm;
