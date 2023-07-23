import React from "react";

function About() {
  return (
    <div id="about">
      <div className="flex flex-col text-[50px] mx-[30px] md:mx-[120px] my-[100px] justify-center items-center">
        <div className="flex-grow">
          <h1 className="my-5 md:text-[50px]  text-[40px] text-start font-rufina ">
            About US
          </h1>
          <p className="md:text-lg text-[15px] leading-relaxed ">
            JAT Machinery Stores is a leading supplier of high-quality machinery
            and tools for various industries. We have been serving our customers
            with dedication and excellence for over three decades. Our wide
            range of products includes cutting-edge machinery, power tools, hand
            tools, and industrial equipment. We cater to the needs of businesses
            of all sizes, from small workshops to large manufacturing units. At
            JAT Machinery Stores, we prioritize customer satisfaction and strive
            to provide top-notch products at competitive prices. Our team of
            knowledgeable experts is always ready to assist you in finding the
            right solutions for your business requirements. Whether you need
            equipment for metalworking, woodworking, construction, or any other
            industry, JAT Machinery Stores is your one-stop-shop for all your
            machinery and tool needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
