"use client";
import { useSession ,signOut} from "@/lib/auth-client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const SignButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
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
            className="btn bg-green-600 m-1 text-[20px] text-white rounded-3xl w-12 h-12"
          >
            {session?.data?.user.name.slice(0, 1)}
          </div>
          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-[#05893E] rounded-box z-1 w-52 p-2 shadow-sm text-white"
          >
            <li className="cursor-pointer  border-b-1 ">
              <Link  href={"/profile"}>Profile</Link>
            </li>
            <li className="cursor-pointer" onClick={handleSignOut}>
              <a>Sign Out</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SignButton;
