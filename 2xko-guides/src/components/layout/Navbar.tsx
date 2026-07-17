"use client";

import Link from "next/link";

import Logo from "./Logo";


export default function Navbar(){

  return (

    <nav
      className="
        w-full
        border-b
        border-zinc-800
        bg-zinc-950
      "
    >

      <div
        className="
          mx-auto
          max-w-6xl
          px-8
          py-4
          flex
          items-center
          justify-between
        "
      >


        <Link href="/">
          <Logo />
        </Link>



        <div
          className="
            flex
            items-center
            gap-6
            text-sm
            text-zinc-300
          "
        >


          <Link
            href="/"
            className="hover:text-white transition"
          >
            Home
          </Link>



          <Link
            href="/teams"
            className="hover:text-white transition"
          >
            Teams  
          </Link>



          <Link
            href="/teams/create"
            className="
              rounded-lg
              bg-blue-600
              px-4
              py-2
              text-white
              hover:bg-blue-500
              transition
            "
          >
            Create Guide
          </Link>



        </div>


      </div>


    </nav>

  );

}