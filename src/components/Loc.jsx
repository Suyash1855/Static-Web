import React from "react";

function Loc() {
  return (
    <div>
      <div className="flex md:flex-row justify-center items-center gap-[100px] my-[100px] flex-col">
        <iframe
          class="md:w-[700px] w-[350px]"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d460.16918052557577!2d74.94782978531452!3d22.677882874375662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQwJzQwLjIiTiA3NMKwNTYnNTIuNSJF!5e0!3m2!1sen!2sin!4v1689869196530!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="flex flex-col justify-center md:w-[400px] w-[350px] items-start ">
          <h1 class="mb-5 font-rufina  md:text-[50px] text-[35px]">Location</h1>
          <p class="text-[16px] md:text-[18px]">
            Old bus Stand, Main Road Rajgarh(Dhar), MP
            <br />
            <span className="text-bold">
              {" "}
              Pin: <span class="text-blue-700">454116</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loc;
