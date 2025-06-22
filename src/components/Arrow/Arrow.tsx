'use client';
import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css'; // Assuming you have some styles in Arrow.css

export const Arrow = () => {


    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);


    return (
        <section className="glass w-full py-32 mx-auto flex flex-col items-center justify-center" data-aos="flip-left">
            <h2 className="text-3xl mb-6 texta">Visit My Projects</h2>
            <br />
            <div className="animate-bounce">
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
            <br />


            <div className='btn'>
                <span className='link'>

                    <a className="" href="/works" target="_blank">Projects</a>
                </span>
            </div>

        </section>

    )
}
