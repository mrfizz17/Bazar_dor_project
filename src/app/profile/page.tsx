"use client"
import { useSession } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const ProfilePage = () => {

    const session = useSession();



    return (
        <div className="flex flex-col justify-center items-center text-[14px] bg-white p-10 py-15 rounded-2xl shadow-md md:text-2xl gap-8">
            <p className="text-4xl ">Welcome Back <span className='font-bold text-green-600'>{session?.data?.user.name}</span></p>

            <div className="flex flex-col gap-6 justify-center items-center bg-gray-200 px-4 md:px-10  py-10 shadow-md rounded-2xl">
               <p className="text-gray-500 text-[18px] ">Your Personal information </p>
               <p className=" bg-green-600 flex justify-center items-center w-20 h-20 rounded-[50%] text-white text-4xl">{session?.data?.user.name.slice(0,1).toUpperCase()}</p>
               <p> <strong>Name:</strong> {session?.data?.user.name}</p>
               <p> <strong>Email:</strong> {session?.data?.user.email}</p>

                <Link href={"/profile/update"}><button className="btn bg-green-600 text-white py-6 px-10 mt-5">Update Profile</button>
                </Link> 
            </div>
        </div>
    );
};

export default ProfilePage;