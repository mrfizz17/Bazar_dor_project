"use client";
import { useSession ,signOut} from "@/lib/auth-client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaUser } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { toast } from "sonner";

const SignButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
          toast.error("Sign out succesfully",{
            className: "!bg-red-600 !text-white !text-[15px]"
          })
        },
      },
    });
  };
  const session = useSession();

  return (
    <>
      {!session.data ? (
        <div className="flex gap-4">
          <Link href={"/sign-in"}>
            <button className="btn border-0 px-2 py-3 text-[14px] md:px-5 md:py-6  bg-white hover:bg-gray-200 md:text-[18px] font-medium">
              সাইন ইন
            </button>
          </Link>
          <Link href={"/sign-up"}>
            <button className="btn bg-[#05893E] px-2 py-3 text-[14px] md:text-[18px] text-white md:py-6 md:px-5 font-medium rounded-[11px] shadow-[0_4px_4px_#05893E4D]">
              {" "}
              সাইন আপ
            </button>
          </Link>
        </div>
      ) : (
        <div className="dropdown dropdown-bottom dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn py-6 bg-green-600 m-1 text-[20px] text-white rounded-[6px]"
          >
            <p className="bg-white w-9 h-9 mr-1 text-[22px]  rounded-[50%] text-green-600 flex justify-center items-center">{session?.data?.user.name.slice(0, 1).toUpperCase()}</p>
            <p className="text-[14px] flex gap-2">{session?.data?.user.name.split(" ")[0]}  <span>▼ </span></p>
          </div>
          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-white rounded-box z-1 w-60 p-3 shadow-md font-bold text-[#05893E] mt-1"
          > 
            <div className="text-[12px] text-gray-500 font-normal">
                <p className="text-black font-medium text-[15px]">{session?.data?.user.name}</p>
                <p>{session?.data?.user.email}</p>
            </div>
            <li className="cursor-pointer border-b-1">
              <Link  href={"/profile"}><FaUser />PROFILE</Link>
            </li>
            <li className="cursor-pointer text-red-500 font-semibold" onClick={handleSignOut}>
              <a><PiSignOutBold /> SIGN OUT</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SignButton;
