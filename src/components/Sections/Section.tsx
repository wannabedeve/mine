'use client'
import SectionTitle from '../SectionTitle/SectionTitle';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';

export const Section = () => {

    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (

        <div className='mb-[5%]'>

            <div className='sticky-sec glasso text-center' id="hello1">
                <SectionTitle title="Skills"></SectionTitle>
            </div>

            <section className="cyberpunk black overflow-hidden">
                <p className="cyberpunk" data-aos="slide-up">
                    <h1 className='text-3xl font-bold text-white p-5 text-center'>
                        💻 Full Stack Web Development
                    </h1>
                    <p className='p-5'>
                        With a solid foundation in modern JAVA SE / EE, JavaScript/TypeScript and practical experience across both frontend and backend frameworks, I’m capable of delivering responsive, scalable, and maintainable web applications from scratch or within existing codebases.
                    </p>
                </p>
                <br />
                <br />
                <ul className="cyberpunk p-6" data-aos="slide-left">

                    <li>
                        Languages & Frameworks: JAVA (Jakarta EE, Java SE), JavaScript (ES6+), TypeScript, HTML5, CSS3, SCSS
                    </li>
                    <br />
                    <li>
                        Frontend: React & Angular, Next.js, State Management & Redux, RTK, jQuery, AJAX, Tailwind CSS, Bootstrap
                    </li>
                    <br />
                    <li>
                        Backend: Java, Servlet, JSP, Beans, Spring / Nest.js - Node.js, Express.js, RESTful APIs, JWT Authentication, Bcrypt, Multer
                    </li>
                    <br />
                    <li>
                        Full-Stack:
                        <br />
                        - Java (Spring, JSP, JQuery, Angular, Tomcat, Oracle, MySQL),
                        <br />
                        - MERN Stack (Nest.js, Node.js, MongoDB, Express, React)
                    </li>
                    <br />
                    <li>
                        Templating & SSR: EJS, JSP
                    </li>
                    <br />
                    <li>
                        Java Web Technologies: Java Servlets, JSP, Spring MVC, Spring Boot, Maven
                    </li>
                    <br />
                    <li>Git/Github, Apache Web Server, Tomcat, Linux Administration</li>
                    <br />
                    <li>
                        Basics of PHP, Laravel, CodeIgniter, Wordpress
                    </li>
                </ul>
                <br />
                <br />
                <br />

                <p className="cyberpunk inverse  text-center" data-aos="slide-right">
                    <h1 className='text-3xl font-bold !text-slate-500 p-5'>
                        🛢️ Databases
                    </h1>
                    Whether working with relational or NoSQL databases,
                    I ensure efficient data handling, integration,
                    and performance optimization to support robust full-stack applications.
                </p>
                <br />
                <br />
                {/* <p className="cyberpunk inverse dotted">Cyberpunk is a subgenre of science fiction in a dystopian futuristic setting that tends to focus on a "combination of low-life and high tech"[1] featuring advanced technological and scientific achievements, such as artificial intelligence and cybernetics, juxtaposed with a degree of breakdown or radical change in the social order.[2] Much of cyberpunk is rooted in the New Wave science fiction movement of the 1960s and 1970s, when writers like Philip K. Dick, Roger Zelazny, John Brunner, J. G. Ballard, Philip José Farmer and Harlan Ellison examined the impact of drug culture, technology, and the sexual revolution while avoiding the utopian tendencies of earlier science fiction.</p> */}
                {/* <br /> */}
                <ol className="cyberpunk p-6" data-aos="slide-left">
                    <li>
                        SQL: MySQL, Postgresql, MSSQL, Oracle
                    </li>
                    <br />
                    <li>
                        NoSQL: MongoDB (Mongoose), document-oriented storage
                    </li>
                    <br />
                    <p className='text-center'>
                        Skills: ERD, DDL, DML, DCL, Data modeling, basic indexing, CRUD operations
                    </p>
                </ol>
                <br />
                <br />
                <br />
                <p className="cyberpunk">
                    <h1 className='text-3xl font-bold p-5 text-center'>
                        🚀 My Ambition & Learning Path
                    </h1>
                    <p className='text-center p-5' data-aos="slide-up">
                        As a developer with a multidisciplinary background in web development, IoT, and networking, my next major focus is advancing into Microservices Architecture and DevOps Engineering.
                        <br />
                        I'm actively learning how to:
                    </p>
                    <ul className="cyberpunk p-6" data-aos="slide-left">

                        <li>
                            Design and build scalable, modular services using tools like Docker, Kubernetes, and Spring Boot microservices
                        </li>
                        <br />
                        <li>
                            Implement CI/CD pipelines with GitHub Actions, Jenkins, and Docker Hub
                        </li>
                        <br />
                        <li>
                            Apply infrastructure as code practices using Terraform and Ansible
                        </li>
                        <br />
                        <li>
                            Work in cloud-native environments, starting with AWS and Azure
                        </li>
                    </ul>

                </p>
                <br />
                <br />
                <br />
            </section>
            <section className="cyberpunk overflow-hidden">
                <p className="cyberpunk text-center" data-aos="slide-up">
                    <h1 className='text-3xl font-bold !text-slate-500 p-5'>
                        📡 Internet of Things (IoT) & Embedded Systems
                    </h1>
                    Combining my knowledge in embedded systems with full-stack development,
                    I create end-to-end IoT solutions that interact seamlessly between devices and cloud interfaces.
                </p>
                <br />
                <br />
                <ul className="cyberpunk p-6" data-aos="slide-right">
                    <li>
                        Proficient in C/EmeddedC (MikroC) Microcontrollers for low-level programming of microcontrollers (PIC16F87XA, Arduino, ESP32, sensors, actuators).
                        <br />
                        Able to understanding their architecture and interfacing
                        <br />
                        Hands-on experience with development boards & Proteus
                    </li>
                    <br />
                    <li>
                        Familiar with communication protocols such as MQTT, CoAP, HTTP/HTTPS, and WebSockets for real-time data transmission between devices and cloud servers.
                    </li>
                    <br />
                    <li>
                        Wireless Communication Technologies: Knowledge of Wi-Fi, Bluetooth/BLE, and LoRa, LoRaWan for device connectivity.
                    </li>
                    <br />
                    <li>
                        IoT and Web Integration: Built full-stack IoT applications with real-time dashboards using JavaScript/TypeScript, Node.js, Python, and frameworks like Django, Express or NestJS for backend APIs.
                    </li>
                    <br />
                    <li>
                        IoT Platforms (basic): Google Cloud Core industrial IoT, Blynk, AWS IoT, and other cloud platforms for device management, data storage, and analytics.
                    </li>
                    <br />
                    <li>
                        IoT Security Basics: Awareness of encryption, asymmetric cryptography (Keys Pair), device authentication, and safe data transmission practices.
                    </li>
                    <br />
                    <li>
                        Project Experience: Developed several IoT prototypes as part of the Egyptian Ministry of Communications & Information Technology scholarship (ITI) program, combining software, hardware, and networking.
                    </li>
                </ul>
                <br />
                <br />
                <br />
                <p className="cyberpunk inverse text-center" data-aos="slide-up">
                    <h1 className='text-3xl font-bold p-5'>
                        🌐 Networking & VoiP
                    </h1>
                    With hands-on experience in both traditional networking and VoIP systems, I can support and troubleshoot connectivity issues across physical networks and infrastructure and real-time communication platforms, ensuring reliable and efficient system performance.
                </p>
                <br />
                <br />
                <ul className="cyberpunk p-6" data-aos="slide-right">
                    <li>
                        Network Technical Support Engineer (ISP-level) logical/physical, VOIP/Unified Communications System implementation
                    </li>
                    <br />
                    <li>
                        Protocols & Concepts: LAN/WAN, TCP/IP, DHCP, DNS, NAT, Routing and Switching, VLANs, VPNs, VoIP
                    </li>
                    <br />
                    <li>
                        VoIP Support: SIP configuration, softphone setup, basic Asterisk/Traditional PBX, Landlines knowledge, QoS troubleshooting
                    </li>
                </ul>
                <br />
                <br />
                <br />
                <p className="cyberpunk inverse dotted text-center" data-aos="slide-up">
                    <h1 className='text-3xl font-bold p-5'>
                        🔌 Electronics & Hardware
                    </h1>
                    My hands-on background in electronics enables me to diagnose, repair, and build real-world systems, bridging the gap between hardware reliability and software control.
                </p>
                <br />
                <br />
                <ol className="cyberpunk p-6" data-aos="slide-right">
                    <li>
                        Soldering & PCB Troubleshooting: Proficient in soldering components, diagnosing PCB issues, and performing repairs on electronic devices.
                    </li>
                    <br />
                    <li>
                        Component-Level Repair & Diagnostics: Skilled in identifying and replacing faulty components on PCBs, ensuring devices are restored to full functionality.
                    </li>
                    <br />
                    <li>
                        Analog/Digital Circuits and Components: Understanding of basic electronic components (resistors, capacitors, diodes, transistors) and their roles in circuit design.
                    </li>
                    <br />
                    <li>
                        Power Supply & Circuit Testing: Experience in testing and repairing power supply circuits, ensuring stable voltage and current for electronic devices.
                    </li>
                    <br />
                    <li>
                        Basic Schematic Reading: Ability to read and interpret electronic schematics, aiding in troubleshooting and repair processes.
                    </li>
                </ol>
                <br />
                <br />
                <br />
                <br />

                <br />
                <p className="cyberpunk">
                    <p data-aos="slide-up">
                        <h1 className='text-3xl font-bold text-slate-500 p-5 text-center'>
                            🧠 Soft Skills
                        </h1>
                        <p className='text-center p-5'>
                            I believe that technical skills are only part of the equation. My soft skills, including effective communication, teamwork, and problem-solving, enable me to collaborate effectively with cross-functional teams and deliver high-quality solutions,
                            My ability to adapt, communicate clearly, and solve problems efficiently allows me to contribute positively to teams and projects in diverse and dynamic environments.
                        </p>
                    </p>
                    <ul className="cyberpunk p-6" data-aos="slide-left">

                        <li>
                            Problem Solving: Able to troubleshoot complex issues across software, hardware, and network layers with a practical, hands-on approach.
                        </li>
                        <br />
                        <li>
                            Adaptability: Comfortable transitioning between different technologies, from embedded systems to web platforms and networking support.
                        </li>
                        <br />
                        <li>
                            Continuous Learning: Actively expanding my skill set in microservices, DevOps, and cloud computing through self-study and projects.
                        </li>
                        <br />
                        <li>
                            Analytical Thinking: Strong logical reasoning and the ability to break down problems into manageable components.
                        </li>
                        <br />
                        <li>
                            Team Collaboration: Experienced in working with cross-functional teams, understanding the importance of clear communication and shared goals.
                        </li>
                        <br />
                        <li>
                            Communication: Capable of explaining technical concepts clearly to both technical and non-technical stakeholders.
                        </li>
                        <br />
                        <li>
                            Time Management: Able to juggle multiple priorities, learn new technologies quickly, and deliver results within deadlines.
                        </li>
                        <br />
                        <li>
                            Initiative: Self-motivated to explore new tools and contribute beyond assigned tasks when building full-stack or IoT-based solutions.
                        </li>
                        <br />
                        <li>
                            Cross-domain Thinking: Ability to integrate software, hardware, and network knowledge to create complete, real-world systems.
                        </li>
                    </ul>

                </p>
            </section>
        </div>
    );
};
