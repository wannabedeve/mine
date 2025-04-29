import React from 'react'
import './style.css'
import SectionTitle from '../Work/SectionTitle';

const Trial2 = () => {
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

                <SectionTitle title="Skills" progressBgClass="bg-primary"></SectionTitle>
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
                <section className='mx-auto'>
                    <h2>Full Stack Web Development</h2>
                    <p>Effectively build, maintain, and manage web applications.</p>
                    <br />
                    <br />
                    <h3>Front-End Development Skills:</h3>
                    <br />
                    <p>
                        - WordPress Content Management System, CMS Build and Maintain.
                        <br />
                        - HTML5/CSS3: Strong understanding of semantic HTML5 and CSS3, including responsive design, flexbox, grid systems, and animations.
                        <br />
                        - JavaScript / TypeScript: Proficiency in vanilla JavaScript, as well as familiarity with ES6+ features (e.g., arrow functions, async/await, destructuring).
                        <br />
                        - React.js / Next.js: Building interactive UIs, managing state with hooks, and utilizing the component lifecycle in client side and server side.
                        <br />
                        - Angular: For building progressive web applications with two-way data binding and reactive programming.
                        <br />
                        - Design and 3D Libraries: TailwindCSS, Bootstrap, MatrialUI, Three.js, Framer Motion, etc...
                        <br />
                        - CSS Preprocessors: Knowledge of tools like SASS/SCSS or LESS for enhanced styling.
                        <br />
                        - Package Managers: npm/pnpm or Yarn for managing front-end dependencies.
                        <br />
                        - Version Control: Proficient with Git for version control (GitHub, GitLab).
                        <br />
                        - Testing Frameworks: Using tools like Jest to write unit and integration tests for UI components.
                    </p>


                    <br />
                    <h3>Back-End Development Skills:</h3>
                    <br />
                    <p>
                        - Node.js: Understanding of server-side JavaScript with Node.js for building RESTful APIs and handling HTTP requests.
                        <br />
                        - C# - .NET Core, PHP - Laravel, CodeIgniter4, Python - Django.
                        <br />
                        - Express.js: Experience using Express to build APIs and manage routing.
                        <br />
                        - Nest.js: to build well structure, scalable and maintainable, web application with Microservice Architecture in mind.
                    </p>



                    <br />
                    <h3>- Databases:</h3>
                    <br />
                    <p>
                        - SQL Databases: Strong knowledge of relational databases "PostgreSQL, MySQL, etc." and writing efficient SQL queries.
                        <br />
                        - NoSQL Databases: Familiarity with NoSQL databases like MongoDB for document-oriented storage.
                    </p>



                    <br />
                    <h3>- DevOps & Deployment:</h3>
                    <br />
                    <p>
                        - Version Control: Git workflows for collaboration "branches, pull requests, merges".
                        <br />
                        - Containerization: Familiarity with Docker for creating and managing containers.
                        <br />
                        - CI/CD: Knowledge of Continuous Integration and Continuous Deployment pipelines using tools like Jenkins, CircleCI, or GitHub Actions.
                        <br />
                        - Cloud Services: Experience deploying apps to cloud platforms like AWS, Azure, Google Cloud, or Heroku.
                        <br />
                        - Web Servers: Basic understanding of web servers like Nginx or Apache.

                    </p>



                </section>
            </article>
        </div>
    )
}
export default Trial2;
