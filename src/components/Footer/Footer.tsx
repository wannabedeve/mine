// 'use client';

// import { useEffect, useRef } from 'react';
// import classNames from 'classnames';
// import './style.scss';

// const Footer = () => {
//     const nameRef = useRef<HTMLInputElement>(null);
//     const emailRef = useRef<HTMLInputElement>(null);
//     const msgRef = useRef<HTMLTextAreaElement>(null);

//     useEffect(() => {
//         const handleBlur = (el: HTMLInputElement | HTMLTextAreaElement) => {
//             const parent = el.closest('.field');
//             if (el.value.trim() !== '') {
//                 parent?.classList.add('focused');
//                 const span = parent?.querySelector('span');
//                 if (span) span.setAttribute('style', 'opacity: 1');
//             } else {
//                 parent?.classList.remove('focused');
//                 const span = parent?.querySelector('span');
//                 if (span) span.setAttribute('style', 'opacity: 0');
//             }
//         };

//         const inputs = [nameRef.current, emailRef.current, msgRef.current];
//         inputs.forEach((input) => {
//             if (input) {
//                 input.addEventListener('blur', () => handleBlur(input));
//             }
//         });

//         return () => {
//             inputs.forEach((input) => {
//                 if (input) {
//                     input.removeEventListener('blur', () => handleBlur(input));
//                 }
//             });
//         };
//     }, []);

//     return (
//         <div className="contact-body">
//             <section id="hire">
//                 <h1>Contact Me</h1>
//                 <form>
//                     <div className="field name-box">
//                         <input ref={nameRef} type="text" id="name" placeholder="Who Are You?" />
//                         <label htmlFor="name">Name</label>
//                         <span className="ss-icon">check</span>
//                     </div>

//                     <div className="field email-box">
//                         <input ref={emailRef} type="text" id="email" placeholder="name@email.com" />
//                         <label htmlFor="email">Email</label>
//                         <span className="ss-icon">check</span>
//                     </div>

//                     <div className="field msg-box">
//                         <textarea ref={msgRef} id="msg" rows={4} placeholder="Your message goes here..."></textarea>
//                         <label htmlFor="msg">Msg</label>
//                         <span className="ss-icon">check</span>
//                     </div>

//                     <input className="button" type="submit" value="Send" />
//                 </form>
//             </section>
//         </div>
//     );
// };

// export default Footer;



'use client'
import { useState, useEffect } from 'react';
import './style.scss';
import Swal from 'sweetalert2';
import SectionTitle from '../Work/SectionTitle';
import { BuildMomentum } from '../feature/Feature';
import { Social } from '../Social/Social';
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
            // console.log(result);
        }
    }







    // useEffect(() => {
    //     const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //         const { value, id } = e.target;
    //         if (value !== '') {
    //             if (id === 'name') setNameFocused(true);
    //             if (id === 'email') setEmailFocused(true);
    //             if (id === 'msg') setMsgFocused(true);
    //         } else {
    //             if (id === 'name') setNameFocused(false);
    //             if (id === 'email') setEmailFocused(false);
    //             if (id === 'msg') setMsgFocused(false);
    //         }
    //     };

    //     const inputs = document.querySelectorAll('input, textarea');
    //     inputs.forEach((input) => {
    //         input.addEventListener('blur', handleFocus);
    //     });

    //     return () => {
    //         inputs.forEach((input) => {
    //             input.removeEventListener('blur', handleFocus);
    //         });
    //     };
    // }, []);






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
        <section id="hire" className='glass mb-[20%]'>
            {/* <h1>Contact Me</h1> */}
            <div className="textw text-center">

                <SectionTitle title="Contact" progressBgClass="bg-primary"></SectionTitle>
                {/* <SectionTitle title="&" progressBgClassNclassName="bg-primary"></SectionTitle> */}

            </div>
            <br />
            <form onSubmit={handleSubmit}>
                <div className="field name-box">
                    <input
                        type="text"
                        id="name"
                        placeholder="Who Are You?"
                        // onBlur={(e) => handleFocus(e)}
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
                        // onBlur={(e) => handleFocus(e)}
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
                        // onBlur={(e) => handleFocus(e)}
                        className={msgFocused ? 'focused' : ''}
                        name='message'
                        required
                    />
                    <label htmlFor="msg">&nbsp;&nbsp;Msg</label>
                    <span className="ss-icon">&#10003;</span>
                </div>

                <input className="button w-full" type="submit" value="Send" />
            </form>


            <div className='md:ml-[40%] ml-[10%] mt-[5%]'>

                <Social />
            </div>
            <div className='text-center mt-[5%]'>
                Email: khaled.ahmed.alkharashi@gmail.com
                <br />
                Phone Number & WhatsApp: (+20) 1025 44 0707
                <br />
                LinkedIn: https://www.linkedin.com/in/khaled-al-kharashi-10653b247/
            </div>

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

                            <a className="" href="/khaled-alkharashi-full-stack-web-developer-resume.pdf"
                                download="khaled-alkharashi-full-stack-web-developer-resume.pdf"
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

                            <a className="" href="/khaled-alkharashi-iot-apps-developer-resume.pdf"
                                download="khaled-alkharashi-iot-apps-developer-resume.pdf"
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

        </section>
    );
};

export default Footer;
