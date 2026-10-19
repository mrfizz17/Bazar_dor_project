"use client";
import { signOut, updateUser, useSession } from "@/lib/auth-client";
import { Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const ProfilePage = () => {
  const session = useSession();

  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
          toast.error("Sign out succesfully", {
            className: "!bg-red-600 !text-white !text-[15px]",
          });
        },
      },
    });
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      const {data:updateData,error} = await updateUser({
        name: data.name as string,
      });
      
      if(error){
          toast.error("Update Failed Try again Later",{
              className:"!bg-red-600 !text-white !text-[18px]"
          });
          return 
      }
  
      toast.success("Name Updated Succesfully ",{
              className:"!bg-green-600 !text-white !text-[18px]"
      });
  
    };

  return (
    <div className="max-w-[800px] mx-auto">
      <div className="mt-10 mb-5">
        <p className="text-4xl ">আমার প্রোফাইল</p>
        <p className="text-gray-500 text-[14px]">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>

      <div className=" bg-white px-5 md:px-10  py-5 shadow-md rounded-2xl">
        <div className="flex flex-col gap-6  md:items-center md:flex-row">
          <p className=" bg-green-600 flex justify-center items-center w-20 h-20 rounded-[50%] text-white text-4xl">
            {session?.data?.user.name.slice(0, 1).toUpperCase()}
          </p>
          <div className="text-gray-500">
            <p>
              {" "}
              <strong>Name:</strong> {session?.data?.user.name}
            </p>
            <p>
              {" "}
              <strong>Email:</strong> {session?.data?.user.email}
            </p>
          </div>

          <div className="flex-1 md:text-end">
            <button className="btn bg-red-600 text-white py-6 px-10 mt-5 " onClick={handleSignOut}>
              Sign out
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-white px-5 md:px-10  py-5 shadow-md rounded-2xl mt-5">
        <p className="text-2xl mb-1 font-semibold text-gray-700">
          নাম হালনাগাদ করুন
        </p>
        <Form
          className="flex flex-col gap-4 w-full max-w-[450px]"
          render={(props) => <form {...props} data-custom="foo" />}
          onSubmit={handleUpdate}
        >
          <TextField
            isRequired
            name="name"
            type="text"
            className="flex flex-col gap-1"
          >
            <Label className="text-gray-600">নাম</Label>
            <Input
              className="border py-3 px-4 rounded-[8px] border-gray-300"
              placeholder="e.g. Ben stokes"
            />
          </TextField>
          <button type="submit" className="btn bg-green-600 text-white w-1/3">
            UPDATE
          </button>
        </Form>
      </div>
    </div>
  );
};

export default ProfilePage;
