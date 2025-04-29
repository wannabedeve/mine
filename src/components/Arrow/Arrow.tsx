import React from 'react'

export const Arrow = () => {
    return (
        <section className="glass w-full bg-gray-900 py-16 flex flex-col items-center justify-center">
            <h2 className="text-white text-3xl mb-6 textw">Visit My Projects</h2>
            <br />
            <div className="animate-bounce">
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

                    <a className="" href="/works" target="_blank">Projects</a>
                </span>
            </div>

        </section>

    )
}
