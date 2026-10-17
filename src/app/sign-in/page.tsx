"use client";

import { signIn } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {

    const [isSubmit,setIsSubmit]=useState(false);
    

    const handleSignIn=async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setIsSubmit(true);


        const formData =  new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const {data:signinData,error}=await signIn.email({
            email:data.email as string,
            password:data.password as string,
            callbackURL: "/"
        });

        setIsSubmit(false);

        if(error){
            alert(`Login failed ${error.message}`);
            return;
        }

        alert('Login succesfull');
    }



  return (
    <div>
        <p className="font-bold text-3xl md:text-4xl mb-1 text-center">সাইন ইন</p>
      <p className="font-normal text-center text-1xl text-gray-500 mb-5">
        বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
      </p>

      <div className="flex justify-center flex-col items-center  bg-white p-5 rounded-2xl max-w-[480px] mx-auto">
        <Form
          className="flex flex-col gap-4 w-full"
          render={(props) => <form {...props} data-custom="foo" />}
            onSubmit={handleSignIn}
        >
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
            className="flex flex-col gap-1"
          >
            <Label className="text-gray-600">ইমেইল</Label>
            <Input
              className="border py-3 px-4 rounded-[8px] border-gray-300"
              placeholder="you@example.com"
            />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
            className="flex flex-col gap-1"
          >
            <Label className="text-gray-600">পাসওয়ার্ড</Label>
            <Input
              className="border py-3 px-4 rounded-[8px] border-gray-300"
              placeholder="কমপক্ষে ৮ অক্ষর"
            />
            <FieldError />
          </TextField>

          <Button
            type="submit"
            className={`w-full ${isSubmit ? 'bg-gray-500' : ' bg-green-600'} text-white text-[18px] font-medium py-2 rounded-[8px] cursor-pointer`}
          >
            {isSubmit ? <p className="flex gap-5"><span className="loading loading-spinner loading-md"></span>অপেক্ষা করুন</p>: 'সাইন ইন' }
          </Button>

          <div className="divider text-gray-600">অথবা</div>
        </Form>

        <div className="flex gap-2 w-full">
          <button className="btn btn-outline cursor-pointer text-[25px] flex-1 border-gray-300 py-6 px-0 flex gap-3">
            <FcGoogle />
            <span className="text-[12px]">
              Google <br /> দিয়ে চালিয়ে যান
            </span>
          </button>
          <button className="btn btn-outline text-[25px] flex-1 border-gray-300 py-6 px-0 flex gap-4">
            <FaGithub />
            <span className="text-[12px]">
              Github <br /> দিয়ে চালিয়ে যান
            </span>
          </button>
        </div>

        <p className="text-center text-gray-600 mt-3">
          অ্যাকাউন্ট নেই?{" "}
          <Link href={"/sign-up"} className="text-green-600 underline">
            সাইন আপ করুন
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
