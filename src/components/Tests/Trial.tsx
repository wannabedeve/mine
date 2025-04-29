import React from 'react'
import './style.css'
import SectionTitle from '../Work/SectionTitle';

const Trial = () => {
    return (

        <div className='glass' id='about'>

            {/* <nav>
                <a href="#hello1">article 1</a>
                <a href="#hello2">article 2</a>
                <a href="#hello3">article 3</a>
            </nav> */}



            {/* Hello! I’m Khaled Ahmed Al-Kharashi, a Software developer, Network Administrator, IT Specialist, Electronics and hardware technician with a passion for creating web based services, digitalize service then integrate it with bussiness proccess. Over the past [ 10 years ], I’ve dedicated myself to building innovative solutions and gain experience in various fields in Software Engineering and IT Field.
            I started my journey during my university studies with frontend web development with basic technologies with Html, Css, Javascrtipt, then PHP, then i continue with Python - Django and i've made projects with both technologies PHP and Django,
            - Since then, I’ve worked on a diverse range of projects from responsive and interactive web pages to Restful API with MVC Pattern and CRUD operations. Each experience has taught me the importance of continuous learning, adaptability, and creativity.
            - After that, I
            joined the scholarship provided by the Ministry of Communications and Information Technology for software engineering in the field of Internet of Things after successfully passing the tests. Through it, I learned low-level programming in C language, web programming, and Internet of Things software technologies.
            - Today, I specialize in web development, developing scalable web applications, and services integration. My work often involves on building backend for api Rest/Restful or GraphQL thats serve required functionalties [ Autentication - Autherization - CRUD operations - store response and make analytics and give back dynamic response - integrate with other services - CRM - Admin Control ] with security and performance consideration with web development technologies
            - JavaScript: NestJS/NodeJS - ReactJS/NextJS - Redux/toolkit - VueJS.
            - PHP: Laravel 10/11 - CodeIgniter4 (PHP MyAdmin)/ Pyhone3: Django Framework.
            - Databases: MySQL, NoSQL - MongoDB, and provided ORM like prisma, TypeORM.
            - Design Tools [ ReactJS Libraries, Bootstrap, TailwindCSS, JQeury, Figma, Canava ].
            - Apache2/Nginx: configuration to optmize performance and security.
            I’m driven by a commitment to quality and a deep curiosity about how things work, and I’m always looking for new challenges to push my limits. Beyond my professional life, I enjoy with search and reading about new technologies and techniques to follow most right way while developing and include advantages of new features provided. These activities help me stay inspired and bring fresh perspectives to my work. Whether I’m coding late into the night, crafting a data-driven report, or brainstorming for a new project, I’m grateful to be in a field that excites me every day. I’m always open to collaborating on interesting projects, so feel free to reach out! Thank you for taking the time to learn a bit about me, and I hope to connect soon! */}



            {/* <div className="img-area">
                <div className="inner-area">
                    <div className="component">
                        <div className="text">Khaled A. Al-Kharashy</div>
                        <div className="reflect">Khaled A. Al-Kharashy</div>
                    </div>
                </div>
            </div> */}


            <div className='sticky-h3 text1 text-xs' id="hello1">

                <SectionTitle title="Profile" progressBgClass="bg-primary"></SectionTitle>
                {/* <SectionTitle title="Me" progressBgClass="bg-primary"></SectionTitle> */}

            </div>

            <article className='sticky-article'>
                {/* <span>1</span> */}

                {/* <div className="relative">
  <img
    src="/path/to/image.jpg"
    alt="background"
    className="absolute inset-0 w-full h-full object-cover opacity-50 -z-10"
/>
  <div className="relative z-10">
    Your content here
  </div>
</div> */}

                {/* bg-[url("/slide/bg12.jpg")] bg-cover bg-center bg-no-repeat */}
                <section className='text-center text-white'>
                    <p className=''>Hello! I’m Khaled, Software Developer and IoT Apps Developer.</p>
                    <p className=''>I work mainly in <span className='highlight'> Web Development </span> and <span className='highlight'> Internet of Things </span> applications.</p>
                    <p className=''>In addition to some experience in the fields of <span className='highlight'> Electronics, </span> <span className='highlight'> Low-level Programming </span> and <span className='highlight'> Networks / VOIP </span>.</p>
                    <br />
                    <p className=''>
                        - I started my journey during my university studies with
                        frontend web development with basic technologies with <span className='highlight'> HTML, CSS, Javascrtipt </span>.
                        to make responsive and interactive web pages.
                        <br />
                        <br />
                        then i started to learn Backend and Full-stack web development with <span className='highlight'> MERN stack </span> technologies.
                        <br />
                        Also worked via defferent technologies and enviroments like <br /><span className='highlight'> PHP - Laravel, CodeIgniter, CMS Wordpress </span> / <span className='highlight'> Python - Django </span> . <br />to make full stack applications.
                    </p>
                    <br />
                    <p className=''>
                        - Worked with both Rational and Non-Rational Databases " <span className='highlight'> Design / Administration </span> ",
                        <br />
                        Design ERD Diagram for <span className='highlight'> MYSQL Databases </span> , and make it with <span className='highlight'> SQL Workbench </span> ,
                        <br />
                        Worked with PHPMyAdmin, Postgress, Graphql/Apollo server.
                        <br />
                        NoSQL - <span className='highlight'> MongoDB, MongoDB Atlas </span>

                        and provided ORMs prisma, TypeORM.

                    </p>
                    <br />
                    <p className=''>
                        - Since then, I’ve worked on a diverse range of projects from responsive
                        and interactive web pages to <span className='highlight'> MVC Pattern </span> and <span className='highlight'> CRUD operations </span> with <span className='highlight'> Rest/Restful API </span>.
                        <br />
                        Each experience has taught me the importance of continuous learning, adaptability,
                        and creativity.
                    </p>
                    <br />
                    <p className=''>
                        - Today, I specialize in web development,
                        developing scalable web applications, and services integration.
                        My work often involves on building backend for api Rest/Restful or GraphQL thats serve
                        required functionalties [ Autentication - Autherization - CRUD operations -
                        store response and make analytics and give back dynamic response - integrate with other
                        services - CRM - Admin Control ] with security and performance consideration with web
                        development technologies

                    </p>
                    <br />
                    <br />
                    <p className=''>
                        - Joined the scholarship provided by the Ministry of Communications and Information Technology
                        for software engineering in the field of Internet of Things.
                        <br />
                        <br />
                        Through it, I learned low-level programming with <span className='highlight'> C language </span>,
                        Data Structure & Algorithms, MERN stack web development,
                        <br />
                        and Internet of Things technologies IoT Kits / Embedded Systems / Arduino /
                        PCB Design with Proteus / Enablement Platforms / Google Cloud IoT Core / Cloud Computing / Web Server Apache2 / GIT - Github.
                    </p>
                    <br />
                    <div className='float-right'>

                        <span>Best</span><br />
                        <span className='signt'>Khaled A.</span>
                    </div>
                </section>
            </article>
        </div>
    )
}
export default Trial;
