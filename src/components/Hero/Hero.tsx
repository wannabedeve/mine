import React from 'react'
import './style.css'
import Social from '../Social2/Social'


export const Hero = () => {
    return (
        <div className=''>
            <div className="">
                {/* <h1>Hello, world!</h1>

                <p>Let me give you a wave...</p> */}


                <div className="container-about">
                    <div className="img-area">
                        <div className="inner-area">
                            <div className="componenth mt-[70%] text-center md:mt-[20%]">
                                <div className="texth md:text-[5rem] text-[3rem]">Khaled A.</div>
                                <div className='texth'>Software Developer</div><br />
                                <div className='texth'>(+20) 1025 44 0707</div><br />
                                <div className='-mt-7'><Social /></div>
                                <div className="reflectw md:text-[5rem] text-[3rem]">Khaled A.</div>
                                {/* <div className="texth">Al-Kharashy</div>
                                <div className="reflectw">Al-Kharashy</div> */}
                                <div id='downloads' className='bg-slate-300 p-5 mt-[5%]'>
                                    {/* <div className="subtitle text-xl my-[5%] w-fit mx-auto">Web Developer
                                        <br /> & <br />
                                        IoT Apps Developer</div> */}
                                    <div className="text-xl text-black">
                                        <h2>Download my resume as </h2>
                                        {/* <br /> */}
                                        <div className="animate-bounce md:mx-[50%] mx-[40%]">
                                            <svg
                                                className="w-10 h-10"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </div>
                                        {/* <br /> */}
                                        <div className='btn'>
                                            <span className='link'>

                                                <a className="" href="/khaled-alkharashi-full-stack-web-developer-resume.pdf"
                                                    download="khaled-alkharashi-full-stack-web-developer-resume.pdf"
                                                    target="_blank">Web Developer</a>
                                            </span>
                                        </div>
                                        <br />
                                        <h2 className='ml-[2%]'>or as </h2>
                                        {/* <br /> */}
                                        <div className="animate-bounce md:mx-[50%] mx-[40%]">
                                            <svg
                                                className="w-10 h-10 text-black"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </div>
                                        <div className='btn'>
                                            <span className='link'>

                                                <a className="" href="/khaled-alkharashi-iot-apps-developer-resume.pdf"
                                                    download="khaled-alkharashi-iot-apps-developer-resume.pdf"
                                                    target="_blank">IoT Developer</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="social-iconsw">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}
