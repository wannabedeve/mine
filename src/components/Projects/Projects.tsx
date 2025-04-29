'use client'
import { project } from "./types";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import SectionTitle from "../Work/SectionTitle";
import { BuildMomentum } from "../feature/Feature";

interface Props {
    projectsData: project[]
}



export const mockProjects: project[] = [
    {
        name: "VOIP System Implementation",
        image: "/slide/voip8.webp",
        category: "Network",
        techstack: "Linux, Avaya, SIP",
        links: {
            visit: "/works",
            // "https://chatapp.example.com",
            code: "https://github.com/username/chatapp",
            video: "https://youtu.be/chatapp-demo"
        }
    },
    {
        name: "C Library",
        image: "/iot/23.jpg",
        category: "IoT",
        techstack: "C Language, ANSIC, STD-IO",
        links: {
            visit: "/works",
            // "https://portfolio.example.com",
            code: "https://github.com/username/portfolio",
            video: ""
        }
    },
    {
        name: "Simulation",
        image: "/iot/22.jpg",
        category: "IoT",
        techstack: "Enablement platform, Accelerator",
        links: {
            visit: "/works",
            // "https://portfolio.example.com",
            code: "https://github.com/username/portfolio",
            video: ""
        }
    },
    {
        name: "Smart Bag",
        image: "/iot/21.jpg",
        category: "IoT",
        techstack: "GPS, Light sensor, Enablement platform",
        links: {
            visit: "/works",
            // "https://portfolio.example.com",
            code: "https://github.com/username/portfolio",
            video: ""
        }
    },
    {
        name: "Smart Lighting",
        image: "/iot/13.jpg",
        category: "IoT",
        techstack: "RAID, Light sensor, Enablement platform",
        links: {
            visit: "/works",
            // "https://portfolio.example.com",
            code: "https://github.com/username/portfolio",
            video: ""
        }
    },
    {
        name: "Smart Parking",
        image: "/iot/12.jpg",
        category: "IoT",
        techstack: "Proximity sensor, Enablement platform",
        links: {
            visit: "/works",
            // "https://portfolio.example.com",
            code: "https://github.com/username/portfolio",
            video: ""
        }
    },
    {
        name: "Tracking Location",
        image: "/iot/11.jpg",
        category: "IoT",
        techstack: "GPS, Google maps, consolidated sensor",
        links: {
            visit: "/works",
            // "https://portfolio.example.com",
            code: "https://github.com/username/portfolio",
            video: ""
        }
    },

    {
        name: "3D Design",
        image: "/slide/3.jpg",
        category: "Web",
        techstack: "React.js, Framer-Motion, Three.js",
        links: {
            visit: "/works",
            // "https://ecommerce.example.com",
            code: "https://github.com/username/ecommerce",
            video: "https://youtu.be/ecommerce-demo"
        }
    },
    {
        name: "Chat Website",
        image: "/slide/ss.png",
        category: "Web",
        techstack: "Next.js, Clerk Auth, Socket.io",
        links: {
            visit: "/works",
            // "https://ecommerce.example.com",
            code: "https://github.com/username/ecommerce",
            video: "https://youtu.be/ecommerce-demo"
        }
    },
    {
        name: "Library System",
        image: "/slide/1.jpg",
        category: "Web",
        techstack: "Java, Spring-boot, MySQL",
        links: {
            visit: "/works",
            // "https://ecommerce.example.com",
            code: "https://github.com/username/ecommerce",
            video: "https://youtu.be/ecommerce-demo"
        }
    },
    {
        name: "Blog Website",
        image: "/slide/3.jpeg",
        category: "Web",
        techstack: "MongoDB, RTK, Express, React, Node.js",
        links: {
            visit: "/works",
            // "https://ecommerce.example.com",
            code: "https://github.com/username/ecommerce",
            video: "https://youtu.be/ecommerce-demo"
        }
    },
    {
        name: "Proposal System",
        image: "/slide/1.webp",
        category: "Web",
        techstack: "MongoDB, RTK, Express, React, Node.js",
        links: {
            visit: "/works",
            // "https://ecommerce.example.com",
            code: "https://github.com/username/ecommerce",
            video: "https://youtu.be/ecommerce-demo"
        }
    },
    {
        name: "E-Commerce Website",
        image: "/slide/ecom.png",
        category: "Web",
        techstack: "MongoDB, Express, RTK, React, Node.js",
        links: {
            visit: "/works",
            // "https://ecommerce.example.com",
            code: "https://github.com/username/ecommerce",
            video: "https://youtu.be/ecommerce-demo"
        }
    },
    // {
    //     name: "IoT Dashboard",
    //     image: "/images/projects/iot-dashboard.jpg",
    //     category: "IoT",
    //     techstack: "React, MQTT, Node-RED",
    //     links: {
    //         visit: "https://iot-dashboard.example.com",
    //         code: "https://github.com/username/iot-dashboard",
    //         video: ""
    //     }
    // },
    // {
    //     name: "Blog Platform",
    //     image: "/images/projects/blog.jpg",
    //     category: "CMS",
    //     techstack: "Payload CMS, Next.js, MongoDB",
    //     links: {
    //         visit: "https://blog.example.com",
    //         code: "https://github.com/username/blog-platform",
    //         video: "https://youtu.be/blog-demo"
    //     }
    // },
    // {
    //     name: "Admin Dashboard",
    //     image: "/images/projects/admin-dashboard.jpg",
    //     category: "React",
    //     techstack: "React, Redux, Chart.js",
    //     links: {
    //         visit: "",
    //         code: "https://github.com/username/admin-dashboard",
    //         video: ""
    //     }
    // }
];




const Projects = () => {

    const [projects, setProjects] = useState([...mockProjects].reverse() as project[])

    // const categories = ['All', ...Array.from(new Set(projects.map((s) => s.category)))]
    const categories = [...Array.from(new Set(projects.map((s) => s.category)))]

    // const [category, setCategory] = useState(categories[0] || "All")
    const [category, setCategory] = useState(categories[0])

    const [filteredProjects, setFilteredProjects] = useState(projects as project[])
    const [viewAll, setViewAll] = useState(false)

    const filterProjects = (cat: string) => {
        setViewAll(false)
        setCategory(cat)
        // cat === "All" ? setFilteredProjects(projects) :
        setFilteredProjects(projects.filter((p: project) => p.category.toLowerCase() === cat.toLowerCase()));
    }

    useEffect(() => {
        filterProjects(categories.includes('Web') ? "Web" : categories[0])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <SectionWrapper id="projects" className="glass mx-4 md:mx-0 min-h-screen">
            {/* <h2 className="text-4xl text-center">Projects</h2> */}
            <div className="text1 text-center">

                <SectionTitle title="Projects" progressBgClass="bg-primary"></SectionTitle>
                <SectionTitle title="&" progressBgClass="bg-primary"></SectionTitle>
                <SectionTitle title="Works" progressBgClass="bg-primary"></SectionTitle>

            </div>

            {/* bg-slate-600 dark:bg-grey-800 */}
            <div className="overflow-x-auto bg-gray-600 scroll-hide md:w-full max-w-screen-sm mx-auto mt-6 flex justify-between items-center gap-2 md:gap-3 p-2 rounded-md">
                {categories.map((c: string = "", i: number) => (
                    <span key={i} onClick={() => filterProjects(c)} className={`p-1.5 md:p-2 w-full text-sm md:text-base text-center capitalize rounded-md ${category.toLowerCase() === c.toLowerCase() ? "bg-violet-600 text-white" : "hover:bg-orange-300 hover:dark:bg-grey-900"} cursor-pointer transition-all`}>
                        {c}
                    </span>
                ))}
            </div>

            <div className="md:mx-6 lg:mx-auto lg:w-5/6 2xl:w-3/4 my-4 md:my-8 mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
                {filteredProjects.slice(0, viewAll ? filteredProjects.length : 3).map((p: project, i: number) => (
                    <ProjectCard key={i} {...p} />
                ))}
            </div>


            {filteredProjects.length > 3
                &&
                <ViewAll scrollTo='projects' title={viewAll ? 'Okay, I got it' : 'View All'} handleClick={() => setViewAll(!viewAll)} />
            }
        </SectionWrapper>
    )
}

export default Projects

type MouseEventHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

export const ViewAll = ({ handleClick, title, scrollTo }: { handleClick: MouseEventHandler, title: string, scrollTo: string }) => {
    return (
        <div className="">
            <div className="w-4/5 mx-auto  z-20 -translate-y-14 h-16"></div>
            <div className="text-center -translate-y-24">
                {title === 'View All' ?
                    <button onClick={handleClick} className={`bg-violet-600 text-white px-4 ${title === 'View All' ? 'animate-bounce' : 'animate-none'} py-1.5 rounded-md hover:shadow-xl transition-all`}>
                        {title}
                    </button>
                    :
                    <Link
                        to={scrollTo}
                        className={`bg-violet-600 text-white px-4 ${title === 'View All' ? 'animate-bounce' : 'animate-none'} cursor-pointer py-1.5 rounded-md hover:shadow-xl transition-all`}
                        offset={-60}
                        smooth={true}
                        duration={500}
                        // @ts-ignore
                        onClick={() => handleClick()}
                    >{title}</Link>
                }
            </div>
        </div>
    )
}