"use client"
import React from 'react'

import FormInput from "@/components/forms/FormInput";
import Form from "@/components/forms/Form";

import MotionTransition from "@/components/motion/MotionTransition";
const SubscribeForm = () => {
      
  const submitHandler = async (data: any) => {
    console.log("hello");
};
  return (
    <MotionTransition initialY={50} duration={1}>
    <Form submitHandler={ submitHandler} className="relative">
      <FormInput
        name="email"
        id="email"
        placeholder="Enter your email"
        type="email"
        className="rounded-full px-4 h-14 text-sm outline-none text-black"
      />
      <div className="absolute top-1 right-1 bg-[#132842] hover:bg-[#263d5c] rounded-full h-12 w-40 flex justify-center items-center">
        Submit
      </div>
    </Form>
    </MotionTransition>
  )
}

export default SubscribeForm