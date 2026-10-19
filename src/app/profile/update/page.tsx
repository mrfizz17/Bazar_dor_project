"use client";
import { updateUser, useSession } from "@/lib/auth-client";
import { Form, Input, Label, TextField } from "@heroui/react";

import React from "react";
import { toast } from "sonner";

const update = () => {


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
    <div className="flex items-center justify-center flex-col ">
      <p className="text-2xl mb-5 font-semibold text-gray-500">
        Update Your Name
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
          <Label className="text-gray-600">Name</Label>
          <Input
            className="border py-3 px-4 rounded-[8px] border-gray-300"
            placeholder="Your Name"
          />
        </TextField>
        <button type="submit" className="btn bg-green-600 text-white ">
          UPDATE
        </button>
      </Form>
    </div>
  );
};

export default update;
