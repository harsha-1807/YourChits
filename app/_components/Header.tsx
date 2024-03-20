import Image from 'next/image'
import React from 'react'


function Header() {
  return (
<header className="bg-[#07193a]">
  <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-8 px-2 sm:px-6 lg:px-10">
    <Image src="/chitlogo1.svg" alt="logo" width={70} height={80}/>
    
    <div className="flex flex-1 items-center justify-end md:justify-between ">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="/Plans"> Plans </a>
          </li>
          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="/About">About</a>
          </li>
           <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="/Contact"> Contact</a>
          </li>
        {/*
          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
          </li> */}

        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="block rounded-mdpx-5 py-2.5 text-sm font-medium text-white transition"
            href="#"
          >
            Login
          </a>

          <a
            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium  transition  sm:block"
            href="#"
          >
            Register
          </a>
        </div>

        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >

            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
  )
}

export default Header