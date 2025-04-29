import { BuildMomentum } from '@/components/feature/Feature';
import SectionTitle from '@/components/Work/SectionTitle';
import InteractiveIoT from '@/components/Works/InterActiveIoT/InterActive';
import InteractiveIoTa from '@/components/Works/InterActiveIoTa/InterActive';
import InteractiveNetowrk from '@/components/Works/InterActiveNetwork/InterActive';
import InteractiveWeb from '@/components/Works/InterActiveWeb/InterActive';
import InteractiveWeba from '@/components/Works/InterActiveWeba/InterActive';
import { Head } from '@/components/WorksHead/Head';
import React from 'react'
import './style.css'

const page = () => {
    return (
        <div className='all'>

            <div className='mb-[40%] md:mb-[20%] mt-[15rem]'>

                <Head />
                <br />
                <div className="animate-bounce md:mx-[50%] mx-[40%]">
                    <svg
                        className="w-20 h-20 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>

            </div>




            <div className='glass'>

                <InteractiveWeb />
                <div className='m-[15%]'></div>
                <InteractiveWeba />
            </div>

            <div className='-mt-[3rem] -mb-[17rem] md:mt-[12rem] md:-mb-[18rem]'>
                <BuildMomentum />
            </div>

            <div className="glass">

                <InteractiveIoT />
                <div className='m-[15%]'></div>
                <InteractiveIoTa />
            </div>
            <div className='-mt-[3rem] -mb-[17rem] md:mt-[12rem] md:-mb-[18rem]'>
                <BuildMomentum />
            </div>

            {/* <div className="glass"> */}

            <InteractiveNetowrk />
            {/* </div> */}
            <div className='-mt-[3rem] -mb-[17rem] md:mt-[12rem] md:-mb-[18rem]'>
                <BuildMomentum />
            </div>



        </div>
    )
}


export default page;
