import Image from "next/image";
import Link from "next/link";
import NavBarItems from "./NavBarItems";


const Navbar = () => {

  const date = new Date ();

  const today = date.toLocaleDateString("bn-BD",{
    weekday:"long",
    day:"numeric",
    month:"long",
    year:"numeric",
  });

  
  return (
    <header className="bg-white text-gray-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex h-[70px] items-center justify-between px-4 sm:px-6 lg:px-7">
          {/* Logo and site information */}
          <div className="flex min-w-0 items-center gap-3">
            <Link
              href="/"
              aria-label="Home"
              className="flex h-10 w-10 shrink-0 items-center justify-center
                       rounded-xl bg-green-700 text-white"
            >
              <Image
                src="/logo-icon.png"
                alt="logo"
                width={20}
                height={20}
              ></Image>
            </Link>

            <div className="min-w-0 leading-tight">
              <h1 className="truncate text-[22px] text-base font-semibold text-black-900">
               বাজার দর 
              </h1>
              <p className="-mt-1 text-[13px] text-black-500 sm:text-[13px]">
                <span className="text-[#05893E]">{today}</span>
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="btn border-0 px-5 py-6  bg-white hover:bg-gray-200 text-[18px] font-medium">সাইন ইন</button>
            <button className="btn bg-[#05893E] text-[18px] text-white py-6 px-5 font-medium rounded-[11px] shadow-[0_4px_4px_#05893E4D]"> সাইন আপ</button>

          </div>

          {/* <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Click
            </div>
            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div> */}
        </div>

       

        
      </div>

       <div className="h-px w-full bg-gray-100" />

        <NavBarItems />

   
    </header>
  );
};

export default Navbar;
