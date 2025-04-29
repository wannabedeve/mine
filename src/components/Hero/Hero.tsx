import React from 'react'
import './style.css'
import { Social } from '../Social/Social'


export const Hero = () => {
    return (
        <div className=''>
            <div className="">
                {/* <h1>Hello, world!</h1>

                <p>Let me give you a wave...</p> */}


                <div className="container-about">
                    <div className="img-area">
                        <div className="inner-area">
                            <div className="componentw mt-[70%] text-center md:mt-[20%]">
                                <div className="textw md:text-[5rem] text-[3rem]">Khaled A.</div>
                                <div className='textw'>Software Developer</div><br />
                                <div className='textw'>(+20) 1025 44 0707</div><br />
                                <div className="reflectw md:text-[5rem] text-[3rem]">Khaled A.</div>
                                {/* <div className="textw">Al-Kharashy</div>
                                <div className="reflectw">Al-Kharashy</div> */}
                                <div id='downloads' className='glass mt-[5%]'>
                                    {/* <div className="subtitle text-xl my-[5%] w-fit mx-auto">Web Developer
                                        <br /> & <br />
                                        IoT Apps Developer</div> */}
                                    <div className="text-xl">
                                        <h2>Download my resume as </h2>
                                        <br />
                                        <div className="animate-bounce md:mx-[50%] mx-[40%]">
                                            <svg
                                                className="w-10 h-10 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </div>
                                        <br />
                                        <div className='btn'>
                                            <span className='link'>

                                                <a className="" href="./Khaled-IT-Education.pdf" download="Khaled-IT-Education.pdf"
                                                    target="_blank">Web Developer</a>
                                            </span>
                                        </div>
                                        <br />
                                        <h2 className='ml-[2%]'>or as </h2>
                                        <br />
                                        <div className="animate-bounce md:mx-[50%] mx-[40%]">
                                            <svg
                                                className="w-10 h-10 text-white"
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

                                                <a className="" href="./Khaled-IT-Education.pdf" download="Khaled-IT-Education.pdf"
                                                    target="_blank">IoT Developer</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="social-iconsw">
                                        {/* <a href="#" className="fb">
                                        <img src="/social/linkedin.webp" alt="" />
                                    </a>
                                    <a href="#" className="twitter">
                                        <img src="/social/wtsapp.webp" alt="" />
                                    </a>
                                    <a href="#" className="insta">
                                        <img src="/social/gmail.webp" alt="" />
                                    </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:ml-[42%] ml-[10%]'>

                            <Social />
                        </div>
                    </div>
                    {/* <div className="buttons">
                        <button>Chat</button>
                        <button>Follow me</button>
                    </div>
                    <div className="social-share">
                        <div className="row">
                            <i className="fa fa-heart"></i>
                            <span>30.4k </span>
                        </div>
                        <div className="row">
                            <i className="fa fa-comment"></i>
                            <span>54.2k</span>
                        </div>
                        <div className="row">
                            <i className="fa fa-share"></i>
                            <span>38.5k</span>
                        </div>
                    </div> */}
                </div>

                {/* <svg className="shadow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#fff" fill-opacity="1" d="M0,128L80,144C160,160,320,192,480,181.3C640,171,800,117,960,101.3C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>

                </svg> */}





                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,128L40,138.7C80,149,160,171,240,202.7C320,235,400,277,480,266.7C560,256,640,192,720,138.7C800,85,880,43,960,37.3C1040,32,1120,64,1200,101.3C1280,139,1360,181,1400,202.7L1440,224L1440,0L1100,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
</svg> */}




                {/* <svg className="separator" xmlns="http://www.w3.org/2000/svg" width="100%" height="166.61502" viewBox="0.4 0.2 200 44" preserveAspectRatio="none">
                    <g className="separator" transform="translate(-9.2218046,-83.494585)">
                        <path style={{ fill: "#b5002b" }} d="M 9.484815,89.716055 H 209.81018 V 126.90507 L 110.46368,93.705147 9.579391,127.39334 Z" />
                        <path style={{ fill: "#ff1a51" }} d="M 9.3544335,83.626877 H 209.68181 V 120.29057 L 110.46368,93.705147 9.4490103,120.77195 Z" />
                    </g>
                </svg> */}



                {/* <svg viewBox="0 0 500 200">
  <path d="M 0,100 C 150,200 350,0 500,100 L 500,00 L 0,0"></path>
</svg> */}

            </div>

            {/* <div className="wave-container2">
                <h1>Well, a second section</h1>

                <p>Could be better...</p>

                <svg xmlns="http://www.w3.org/2000/svg" className="shadow" viewBox="0 0 1440 320">
                    <path fill="purple" fill-opacity="1" d="M0,128L80,144C160,160,320,192,480,181.3C640,171,800,117,960,101.3C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>

                </svg>

                <div className="from">
                    <p> Code copied and "expanded" from
                        <a href="https://blog.prototypr.io/how-to-add-svg-waves-to-your-next-web-project-b720efe1c692" target="_blank"> this article</a>.
                    </p>
                </div>

            </div> */}
        </div>
    )
}
