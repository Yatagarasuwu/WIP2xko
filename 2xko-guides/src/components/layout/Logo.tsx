"use client";

import Image from "next/image";

export default function Logo(){

  return (

    <div className="flex items-center">

      <Image
        src="/logo.png"
        alt="2xRepo"
        width={120}
        height={40}
        priority
      />

    </div>

  );

}