import { SignInButton, SignUpButton, UserButton, auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function Navbar() {
    const { userId } = auth();
  return (
    <header className=" bg-[#CBD6CC] max-w-[100vw] my-5 ">
      <div className="mx-auto flex h-16 max-w-[91vw] items-center gap-2 px-2 sm:px-6 lg:px-10 poller-one-regular justify-between">
          <Link href="/" >
        <div className="flex ">
            <Image src="/chitlogo1.svg" alt="logo" width={25} height={15} />
            <h1 className="flex items-center">YourChits</h1>
        </div>
          </Link>
        <div className="flex  items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm  list-none poppins-semibold">
              <li >
                <Link 
                  className="text-black transition hover:text-gray-500/75 no-underline"
                  href="/Plans"
                >
                  {" "}
                  Plans{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="text-black transition hover:text-gray-500/75 no-underline"
                  href="/About"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-black transition hover:text-gray-500/75 no-underline"
                  href="/Contact"
                >
                  {" "}
                  Contact
                </Link>
              </li>
              {userId === "user_2e2pZYrpYk7p55XIVG8OHnVbS6T" && (
                <li>
                  <Link
                    className="text-black transition hover:text-gray-500/75 no-underline"
                    href="/Admin"
                  >
                    {" "}
                    Admin
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
            {userId ? (
            
              <div className="flex gap-4 items-center poppins-semibold">
                {/* <Link href="/dashboard">Dashboard</Link> */}
                <UserButton afterSignOutUrl="/"  />
              </div>
           
           ) : ( 
              <div className="sm:flex sm:gap-4">
                <a
                
                  className="block rounded-mdpx-5 py-2.5 text-sm font-medium text-black transition poppins-semibold" 
                >
                  <SignInButton  />
                </a>
                <a
          
                  className="hidden rounded-full bg-[#E3432B] px-5 py-2.5 text-sm font-medium  transition  sm:block poppins-semibold"
                >
                 <SignUpButton />
                </a>
              </div>
             )} 
        </div>
              
      </div>
    </header>
  );
}

export default Navbar;
