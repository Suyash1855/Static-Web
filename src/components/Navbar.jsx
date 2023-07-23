import React from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import { logo } from "../../public/images";
function Navbar() {
  return (
    <>
      <div class="mx-auto flex text-[20px] bg-[#145b72] h-[90px]  justify-center items-center py-4">
        <div class="flex px-20 w-full  justify-between  md:gap-[70px] gap-[30px]  items-center">
          <div class="w-[120px] h-[50px] md:block hidden">
            <Image className="w-full h-full" src={logo} alt="" />
          </div>
          <div class="flex justify-center items-center md:gap-[70px] gap-[30px]">
            <a href="#hero" class="">
              Home
            </a>
            <a href="#about" class="">
              About
            </a>
            <a href="#services" class="">
              Services
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
