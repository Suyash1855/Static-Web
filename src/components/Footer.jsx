import React from "react";
import { phone, email } from "../../public/images";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div
        smooth={true}
        duration={500}
        id="footer"
        className="flex bg-[#145b72]  justify-center items-center p-4"
      >
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex justify-center items-center flex-col gap-1">
            <h2 className="text-[20px] md:text-[27px]"> Jat Machinery Store</h2>
            <p>Fell free to connect with us!</p>
          </div>
          <div className="flex gap-2 md:gap-5">
            <a href="mailto:jatmachinery52@gmail.com">
              {" "}
              <Image className="w-7 " src={email} alt="" />
            </a>
            <a href="tel:+9425102926">
              <Image className="w-7 " src={phone} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
