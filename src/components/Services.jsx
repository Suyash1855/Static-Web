import React from "react";
import {
  supremo1,
  supremo2,
  supremo3,
  pump1,
  pump2,
  rufan,
  rufan1,
  rak,
  rak2,
  fin,
  fin2,
  fin3,
} from "../../public/images";

import Image from "next/image";

function Services() {
  const images = [
    // Add your image URLs here
    pump1,
    pump2,
    supremo1,
    supremo2,
    supremo3,
    rufan,
    rufan1,
    rak,
    rak2,
    fin,
    fin2,
    fin3,
  ];
  return (
    <div
      id="services"
      className=" flex justify-center p-[50px] bg-[#145b72]  items-center flex-col "
    >
      <h1 className=" font-rufina  text-start  mb-7  md:text-[50px] text-[35px]">
        Brands we offer!
      </h1>
      <div className="grid grid-cols-3 gap-4 sm:flex justify-center items-center sm:flex-wrap">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-full sm:w-1/2 md:w-1/4"
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              className="md:w-[200px] transition-transform hover:scale-105 rounded-xl w-[100px] h-[100px] md:h-[200px] "
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
