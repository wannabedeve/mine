// "use client";
// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import clsx from "clsx";
// import "./style.css";




// export default function Menu() {
//     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [isDropdownOpen, setDropdownOpen] = useState(false);
//     const dropdownRef = useRef<HTMLLIElement>(null);

//     useEffect(() => {
//         const handleClickOutside = (e: MouseEvent) => {
//             if (
//                 dropdownRef.current &&
//                 !dropdownRef.current.contains(e.target as Node)
//             ) {
//                 setDropdownOpen(false);
//             }
//         };

//         document.addEventListener("click", handleClickOutside);

//         return () => {
//             document.removeEventListener("click", handleClickOutside);
//         };
//     }, []);

//     return (
//         <section className="navigation">
//             <div className="nav-container">
//                 <div className="brand">
//                     <Link href="#">Logo</Link>
//                 </div>
//                 <nav>
//                     <div className="nav-mobile">
//                         <a
//                             id="nav-toggle"
//                             href="#!"
//                             onClick={(e) => {
//                                 e.preventDefault();
//                                 setMobileMenuOpen((prev) => !prev);
//                             }}
//                             className={clsx({ active: isMobileMenuOpen })}
//                         >
//                             <span></span>
//                         </a>
//                     </div>
//                     <ul className={clsx("nav-list", { hidden: !isMobileMenuOpen })}>
//                         <li>
//                             <Link href="#!">Home</Link>
//                         </li>
//                         <li>
//                             <Link href="#!">About</Link>
//                         </li>
//                         {/* <li
//                             className="dropdown"
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 setDropdownOpen((prev) => !prev);
//                             }}
//                             ref={dropdownRef}
//                         >
//                             <a href="#!">Services</a>
//                             <ul
//                                 className="nav-dropdown"
//                                 style={{ display: isDropdownOpen ? "block" : "none" }}
//                             >
//                                 <li>
//                                     <Link href="#">Web Design</Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#">Web Development</Link>
//                                 </li>
//                                 <li>
//                                     <Link href="#">Graphic Design</Link>
//                                 </li>
//                             </ul>
//                         </li> */}
//                         <li
//                             className={`dropdown ${isDropdownOpen ? "open" : ""}`}
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 setDropdownOpen((prev) => !prev);
//                             }}
//                             ref={dropdownRef}
//                         >
//                             <a href="#!">Services</a>
//                             <ul
//                                 className="nav-dropdown"
//                                 style={{ display: isDropdownOpen ? "block" : "none" }}
//                             >
//                                 <li><Link href="#">Web Design</Link></li>
//                                 <li><Link href="#">Web Development</Link></li>
//                                 <li><Link href="#">Graphic Design</Link></li>
//                             </ul>
//                         </li>

//                         <li>
//                             <Link href="#!">Pricing</Link>
//                         </li>
//                         <li>
//                             <Link href="#!">Contact</Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </section>
//     );
// }






"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import './style.css';


export default function Menu() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isDropdownOpen2, setDropdownOpen2] = useState(false);
    const [isDropdownOpen3, setDropdownOpen3] = useState(false);


    const dropdownRef = useRef<HTMLLIElement>(null);
    const dropdownRef2 = useRef<HTMLLIElement>(null);
    const dropdownRef3 = useRef<HTMLLIElement>(null);

    const mobileMenuRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;

            // Close dropdown if click outside
            if (dropdownRef.current && !dropdownRef.current.contains(target)) {
                setDropdownOpen(false);
            }


            // Close mobile menu if click outside
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(target) &&
                !(document.getElementById("nav-toggle")?.contains(target))
            ) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <section className="navigation">
            <div className="nav-container">
                <div className="brand textw">
                    <Link href="#" className="textw">Khaled A.</Link>

                </div>
                <nav>
                    <div className="nav-mobile">
                        <a
                            id="nav-toggle"
                            href="#!"
                            onClick={(e) => {
                                e.preventDefault();
                                setMobileMenuOpen((prev) => !prev);
                            }}
                            className={isMobileMenuOpen ? "active" : ""}
                        >
                            <span></span>
                        </a>
                    </div>
                    <ul
                        ref={mobileMenuRef}
                        className="nav-list"
                        style={{ display: isMobileMenuOpen ? "block" : "none" }}
                    >
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        {/* <li>
                            <Link href="#about">About</Link>
                        </li> */}
                        {/* <li
                            className="dropdown"
                            onClick={(e) => {
                                e.stopPropagation(); // prevent triggering outside click
                                setDropdownOpen((prev) => !prev);
                            }}
                            ref={dropdownRef}
                        >
                            <a href="#!">Services</a>
                            <ul
                                className="nav-dropdown"
                                style={{ display: isDropdownOpen ? "block" : "none" }}
                            >
                                <li>
                                    <Link href="#">Web Design</Link>
                                </li>
                                <li>
                                    <Link href="#">Web Development</Link>
                                </li>
                                <li>
                                    <Link href="#">Graphic Design</Link>
                                </li>
                            </ul>
                        </li> */}

                        <li
                            className={`dropdown ${isDropdownOpen ? "open" : ""}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setDropdownOpen((prev) => !prev);
                            }}
                            ref={dropdownRef}
                        >
                            <a href="#projects">Works </a>
                            <ul
                                className="nav-dropdown"
                                style={{ display: isDropdownOpen ? "block" : "none" }}
                            >
                                <li><Link href="/works">Web</Link></li>
                                <li><Link href="/works">IoT</Link></li>
                                <li><Link href="/works">Network</Link></li>
                            </ul>
                        </li>



                        <li
                            className={`dropdown ${isDropdownOpen2 ? "open" : ""}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setDropdownOpen2((prev) => !prev);
                            }}
                            ref={dropdownRef2}
                        >
                            <a href="#downloads">Downloads </a>
                            <ul
                                className="nav-dropdown"
                                style={{ display: isDropdownOpen2 ? "block" : "none" }}
                            >
                                <li>

                                    <a className="" href="/khaled-alkharashi-full-stack-web-developer-resume.pdf"
                                        download="khaled-alkharashi-full-stack-web-developer-resume"
                                        target="_blank">Web Resume</a>
                                </li>
                                <li>

                                    <a className="" href="/khaled-alkharashi-iot-apps-developer-resume.pdf"
                                        download="khaled-alkharashi-iot-apps-developer-resume"
                                        target="_blank">IoT Resume</a>
                                </li>
                            </ul>
                        </li>



                        <li
                            className={`dropdown ${isDropdownOpen3 ? "open" : ""}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                setDropdownOpen3((prev) => !prev);
                            }}
                            ref={dropdownRef2}
                        >
                            <a href="#hire">Contact </a>
                            <ul
                                className="nav-dropdown"
                                style={{ display: isDropdownOpen3 ? "block" : "none" }}
                            >
                                <li>
                                    <span>khaled.ahmed.alkharashi@gmail.com</span>
                                </li>
                                <br />
                                <li>

                                    <span>(+20) 10 25 44 0707</span>
                                </li>
                                <br />
                                <li>
                                    <span>
                                        linkedin: khaled-al-kharashi-10653b247/
                                    </span>
                                </li>
                            </ul>
                        </li>




                        {/* <li>
                            <Link href="#!">Pricing</Link>
                        </li> */}
                        {/* <li>
                            <Link href="#hire">Contact</Link>
                        </li> */}

                    </ul>
                </nav>
            </div>
        </section>
    );
}
