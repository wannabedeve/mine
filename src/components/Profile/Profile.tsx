'use client';
import React from 'react'
import './style.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import SectionTitle from '../SectionTitle/SectionTitle';

export const Profile = () => {

    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <div>

            <div className='about-sticky about-glass' id="hello1">
                <SectionTitle title="Profile"></SectionTitle>
            </div>

            <div className='about-container' data-aos="zoom-in">

                <div className="main-container">
                    <div className="main-card">
                        <div className="main-content">
                            <div className="main-profile">
                                {/* <img className='top-[7%] md:top-[18%]'
                                    src="https://assets.codepen.io/4513998/internal/avatars/users/default.png?format=auto&version=1610262962&width=300&height=300" /> */}
                                <Image
                                    src="/social/meee.jpeg"
                                    width={100} height={100} alt='Khaled'
                                    className='top-[7%] md:top-[18%]'
                                />
                            </div>

                            <h3 className='mt-[18rem] md:mt-[20rem] signt'>About Me</h3>
                            <br />

                            <section className="text-center text-white text-shadow-xs md:text-xl">
                                <p>Hello! I’m Khaled — a passionate and versatile Web Developer with a
                                    strong foundation in both software development and electronics.</p>
                                <br />
                                <p>I specialize in building robust and scalable web applications using
                                    <span className="highlight"> JavaScript</span> and
                                    <span className="highlight"> TypeScript </span>
                                    across modern frameworks and libraries such as
                                    <span className="highlight"> React.js </span>,
                                    <span className="highlight"> Node.js </span>,
                                    <span className="highlight"> Express </span>,
                                    and <span className="highlight"> Next.js </span>.
                                    My work spans both <span className="highlight"> Frontend </span>
                                    and <span className="highlight"> Backend </span> development,
                                    with hands-on experience in working with
                                    <span className="highlight"> REST APIs </span>,
                                    <span className="highlight"> MongoDB </span>,
                                    and <span className="highlight"> MySQL </span>.</p>
                                <br />
                                <p>In addition,
                                    I’ve worked with <span className="highlight"> Java technologies </span>
                                    including <span className="highlight"> Servlets </span>,
                                    <span className="highlight"> JSP </span>,
                                    <span className="highlight"> Spring MVC </span>,
                                    and <span className="highlight"> Spring Boot </span>.
                                    I'm also comfortable using <span className="highlight"> jQuery </span>
                                    and <span className="highlight"> AJAX </span>
                                    when required by legacy or specific projects.</p>
                                <br />
                                <p>I hold a special interest in the
                                    <span className="highlight">Internet of Things (IoT)</span>.
                                    I was selected for a competitive scholarship by the
                                    <span className="highlight"> Ministry of Communications
                                        and Information Technology of Egypt </span> (ITI),
                                    where I gained practical experience in embedded systems,
                                    C programming, and IoT application development alongside
                                    MERN stack web technologies.</p>
                                <br />
                                <p>Before shifting to development,
                                    I worked in
                                    <span className="highlight"> Networking & VoiP </span>
                                    as a Technical Support Engineer and previously as an
                                    <span className="highlight"> Electronics Maintenance Technician </span>.
                                    This multidisciplinary background gives me a unique
                                    problem-solving perspective, blending hardware-level understanding with
                                    high-level software architecture.</p>
                                <br />
                                <p>I'm always eager to take on new challenges, build meaningful software,
                                    and contribute to impactful tech solutions
                                    that bridge the gap between digital and physical systems.</p>
                            </section>



                            <br />
                            <div className='float-right'>

                                <span>Best</span><br />
                                <span className='signt'>Khaled A.</span>
                            </div>




                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}
