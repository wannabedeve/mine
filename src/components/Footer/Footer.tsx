'use client'
import { useState, useEffect } from 'react';
import './style.scss';
import Swal from 'sweetalert2';
import SectionTitle from '../Work/SectionTitle';
import Social from '../Social2/Social';

const Footer = () => {
    const [nameFocused, setNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [msgFocused, setMsgFocused] = useState(false);


    async function handleSubmit(event: any) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "516d5bdc-1265-422d-b00c-48400c623a8b");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            Swal.fire({
                title: 'Thanks!',
                text: 'Your message has been sent successfully.',
                icon: 'success',
            })

        }
    }






    useEffect(() => {
        function handleFocus(e: Event) {
            const target = e.target as HTMLInputElement | HTMLTextAreaElement;
            const { value, id } = target;

            if (value !== '') {
                if (id === 'name') setNameFocused(true);
                if (id === 'email') setEmailFocused(true);
                if (id === 'msg') setMsgFocused(true);
            } else {
                if (id === 'name') setNameFocused(false);
                if (id === 'email') setEmailFocused(false);
                if (id === 'msg') setMsgFocused(false);
            }
        }

        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach((input) => {
            input.addEventListener('blur', handleFocus);
        });

        return () => {
            inputs.forEach((input) => {
                input.removeEventListener('blur', handleFocus);
            });
        };
    }, []);

    return (

        <div className='contact-body'>
            <section id="hire" className='glass mb-[2%]'>
                <div className="text-c text-center">

                    <SectionTitle title="Contact" progressBgClass="bg-primary"></SectionTitle>

                </div>
                <div className=''>

                    <Social />
                </div>

                <br />
                <form onSubmit={handleSubmit}>
                    <div className="field name-box">
                        <input
                            type="text"
                            id="name"
                            placeholder="Who Are You?"
                            className={nameFocused ? 'focused' : ''}
                            name='name'
                            required
                        />
                        <label htmlFor="name">&nbsp;&nbsp;Name</label>
                        <span className="ss-icon">&#10003;</span>
                    </div>

                    <div className="field email-box">
                        <input
                            type="text"
                            id="email"
                            placeholder="name@email.com"
                            className={emailFocused ? 'focused' : ''}
                            name='email'
                            required
                        />
                        <label htmlFor="email">&nbsp;&nbsp;Email</label>
                        <span className="ss-icon">&#10003;</span>
                    </div>

                    <div className="field msg-box">
                        <textarea
                            id="msg"
                            rows={4}
                            placeholder="Your message goes here..."
                            className={msgFocused ? 'focused' : ''}
                            name='message'
                            required
                        />
                        <label htmlFor="msg">&nbsp;&nbsp;Msg</label>
                        <span className="ss-icon">&#10003;</span>
                    </div>

                    <input className="button w-full" type="submit" value="Send" />
                </form>

                <br /><br /><br />

                <div className='text-center mt-[5%] text-black'>
                    Email: <br />
                    <span className='text-[.8rem]'>
                        khaled.ahmed.alkharashi@gmail.com
                    </span>
                    <br />
                    <br />
                    Phone Number & WhatsApp: <br /> (+20) 1025 44 0707
                    <br />
                    <br />
                    LinkedIn: <br />
                    <span className='text-[.8rem]'>
                        https://www.linkedin.com/in/khaled-al-kharashi-10653b247/
                    </span>
                </div>

                <div id='downloads' className='glass mt-[5%]'>

                    <div className="text-xl">
                        <h2 className='text-black'>Download my resume as </h2>
                        <br />
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
                        <br />
                        <div className='btn'>
                            <span className='link'>

                                <a className="" href="/khaled-alkharashi-full-stack-web-developer-resume.pdf"
                                    download="khaled-alkharashi-full-stack-web-developer-resume.pdf"
                                    target="_blank">Web Developer</a>
                            </span>
                        </div>
                        <br />
                        <h2 className='ml-[2%] text-black'>or as </h2>
                        <br />
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
                </div>

            </section>
        </div>
    );
};

export default Footer;
