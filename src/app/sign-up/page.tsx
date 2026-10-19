"use client";

import { authClient, signIn, signUp } from "../../lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import React, { FormEvent, SubmitEventHandler, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const SignUpPage = () => {
  const router = useRouter();
  const [isSubmit, setIsSubmit] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmit(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form data:", data);

    const { data: userData, error } = await signUp.email({
      name: data.name as string,
      email: data.email as string,
      password: data.password as string,
    });

    setIsSubmit(false);

    if (error) {
      toast.error(`Sign up failed  ${error.message}`,{
        className: "!bg-red-600 !text-white !text-[15px]"
      });
      return;
    }

    router.push("/sign-in");

    toast.success(`Sign up Success, Now login with email and password`,{
        className: "!bg-green-600 !text-white !text-[15px]"
     });
  }

  const googleSignUp = async () => {
    setIsSubmit(true);
    const { data: userData, error } = await signIn.social({
      provider: "google",
    });

    setIsSubmit(false);
  };

  const githubSignUp = async () => {
    setIsSubmit(true);
    const { data: userData, error } = await signIn.social({
      provider: "github",
    });

    setIsSubmit(false);
  };

  return (
    <div>
      <p className="font-bold text-3xl md:text-4xl mb-2 text-center">
        অ্যাকাউন্ট তৈরি করুন
      </p>
      <p className="font-normal text-1xl text-gray-500 mb-3 text-center">
        বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
      </p>

      <div className="flex justify-center flex-col items-center  bg-white py-6 px-7 rounded-2xl max-w-[430px] mx-auto">
        <Form
          className="flex flex-col gap-4 w-full"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={handleSubmit}
        >
          <TextField
            isRequired
            name="name"
            type="text"
            className="flex flex-col gap-1"
          >
            <Label className="text-gray-600">নাম</Label>
            <Input
              className="border py-2 px-4 rounded-[8px] border-gray-300"
              placeholder="e.g. alex carry"
            />
            <FieldError />
          </TextField>
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
              className="border py-2 px-4 rounded-[8px] border-gray-300"
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
              className="border py-2 px-4 rounded-[8px] border-gray-300"
              placeholder="কমপক্ষে ৮ অক্ষর"
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
            <Label className="text-gray-600">পাসওয়ার্ড নিশ্চিত করুন</Label>
            <Input
              className="border py-2 px-4 rounded-[8px] border-gray-300"
              placeholder="কমপক্ষে ৮ অক্ষর"
            />
            <FieldError />
          </TextField>

          <Button
            type="submit"
            isDisabled={isSubmit}
            className={`w-full  text-white text-[18px] font-medium py-3 rounded-[8px] cursor-pointer ${isSubmit ? "bg-gray-500" : "bg-green-600"}`}
          >
            {isSubmit ? (
              <p className="flex gap-5">
                <span className="loading loading-spinner loading-md"></span>
                অপেক্ষা করুন
              </p>
            ) : (
              "সাইন আপ"
            )}
          </Button>

          <div className="divider text-gray-600">অথবা</div>
        </Form>

        <div className="flex gap-2 w-full">
          <button
            className="btn btn-outline cursor-pointer text-[25px] flex-1 border-gray-300 py-6 px-0 flex gap-3"
            onClick={googleSignUp}
            disabled={isSubmit}
          >
            <FcGoogle />
            <span className="text-[12px]">
              {isSubmit ? (
                <p className="flex gap-5">
                  <span className="loading loading-spinner loading-md"></span>
                  অপেক্ষা করুন
                </p>
              ) : (
                <p>Google <br /> দিয়ে চালিয়ে যান</p>
              )}
             
            </span>
          </button>
          <button
            onClick={githubSignUp}
            disabled={isSubmit}

            className="btn btn-outline text-[25px] flex-1 border-gray-300 py-6 px-0 flex gap-4"
          >
            <FaGithub />
            <span className="text-[12px]">
              {isSubmit ? (
                <p className="flex gap-5">
                  <span className="loading loading-spinner loading-md"></span>
                  অপেক্ষা করুন
                </p>
              ) : (
                <p>Github <br /> দিয়ে চালিয়ে যান</p>
              )}
              
            </span>
          </button>
        </div>

        <p className="text-center text-gray-600 mt-3">
          অ্যাকাউন্ট আছে?{" "}
          <Link href={"/sign-in"} className="text-green-600 underline">
            সাইন ইন করুন
          </Link>
        </p>
      </div>

      <p className="text-center mt-2">
        <Link href="/" className="text-center text-gray-500 underline">
          {" "}
          ← হোম পেজে ফিরে যান
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;
