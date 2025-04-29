'use client'
import { useEffect, useState } from "react";
import "./style.scss"; // Import your styles
import SectionTitle from "@/components/Work/SectionTitle";

const InteractiveNetowrk = () => {


  return (
    <div
    // className="-mb-[70%] md:-mb-[20%]"
    >

      <div className="containerz mx-auto">

        <div className='text-center'>
          <SectionTitle title="Certifications" progressBgClass="bg-primary"></SectionTitle>
        </div>

        <div className="topz mx-auto mt-[5%]">
          <ul>
            <li><a href="#img_1"><img src="/cert/c1.jpeg" className="" /></a></li>
            <li><a href="#img_2"><img src="/cert/c2.jpeg" className="" /></a></li>
            <li><a href="#img_3"><img src="/cert/c4.jpeg" className="" /></a></li>
          </ul>
          <a href="#_1" className="lightbox trans" id="img_1"><img src="/cert/c1.jpeg" /></a>
          <a href="#_2" className="lightbox trans" id="img_2"><img src="/cert/c2.jpeg" /></a>
          <a href="#_3" className="lightbox trans" id="img_3"><img src="/cert/c4.jpeg" /></a>
        </div>




        <div className="topz mx-auto mt-[5%]"
        // className="topz mx-auto md:-mt-[80%] -mt-[60%]"
        >
          <ul>
            <li><a href="#img_4"><img src="/cert/7.jpeg" className="" /></a></li>
            <li><a href="#img_5"><img src="/cert/14.jpeg" className="" /></a></li>
          </ul>
          <a href="#_4" className="lightbox trans" id="img_4"><img src="/cert/7.jpeg" /></a>
          <a href="#_5" className="lightbox trans" id="img_5"><img src="/cert/14.jpeg" /></a>
        </div>



        <div className="topz mx-auto mt-[5%]"
        // className="topz mx-auto md:-mt-[80%] -mt-[60%]"
        >
          <ul>
            <li><a href="#img_6"><img src="/cert/lcd162l.png" /></a></li>
            <li><a href="#img_7"><img src="/cert/ledseq.png" /></a></li>
            <li><a href="#img_8"><img src="/cert/padsegment.png" /></a></li>
            <li><a href="#img_9"><img src="/cert/swifunc.png" /></a></li>
          </ul>
          <a href="#_6" className="lightbox trans" id="img_6"><img src="/cert/lcd162l.png" /></a>
          <a href="#_7" className="lightbox trans" id="img_7"><img src="/cert/ledseq.png" /></a>
          <a href="#_8" className="lightbox trans" id="img_8"><img src="/cert/padsegment.png" /></a>
          <a href="#_9" className="lightbox trans" id="img_9"><img src="/cert/swifunc.png" /></a>
        </div>


      </div>
    </div>
  );
};

export default InteractiveNetowrk;
