"use client";

import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { pic1, pic2, pic3 } from "../../public/images";
function Carousal() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       // Increment the active slide or reset to 0 if it reaches the last slide
  //       setActiveSlide((prevSlide) =>
  //         prevSlide === slideData.length - 1 ? 0 : prevSlide + 1
  //       );
  //     }, 4000); // Change the interval value as needed (in milliseconds)

  //     // Cleanup the timer when the component unmounts
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);

  const slideData = [
    {
      image: pic1,
      alt: "Slide 1",
    },
    {
      image: pic2,
      alt: "Slide 2",
    },
    {
      image: pic3,
      alt: "Slide 3",
    },
  ];
  return (
    <Carousel
      selectedItem={activeSlide}
      onChange={handleSlideChange}
      showThumbs={false}
      className=" md:w-[500px] w-[370px] h-[370px] md:h-[500px] flex justify-center items-center "
    >
      {slideData.map((slide, index) => (
        <div key={index}>
          <Image className="w-full h-full" src={slide.image} alt={slide.alt} />
        </div>
      ))}
    </Carousel>
  );
}

export default Carousal;
