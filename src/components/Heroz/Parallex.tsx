"use client";
import Column from "./Column";
import { images } from "./constants";
import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll } from "framer-motion";
import './style.css'
import { Hero } from "../Hero/Hero";

export default function Parallex() {
	const gallery = useRef(null);
	const [dimension, setDimension] = useState({ width: 0, height: 0 });

	const { scrollYProgress } = useScroll({
		target: gallery,
		offset: ["start end", "end start"],
	});

	const { height } = dimension;
	const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
	const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
	const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

	useEffect(() => {
		const raf = () => {
			requestAnimationFrame(raf);
		};

		const resize = () => {
			setDimension({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener("resize", resize);
		requestAnimationFrame(raf);
		resize();

		return () => {
			window.removeEventListener("resize", resize);
		};
	}, []);

	return (
		<main className='-mt-[10%] bg-[url("/slide/bg16.avif")] bg-contain bg-center'>
			{/* <div className="overlay">Overlay Text</div> */}

			{/* <div className="h-screen w-full flex items-center justify-center">
				<h1 className="text-[30px] uppercase font-bold">
					scroll down for happiness
				</h1>
			</div> */}


			<div className="mb-[10%]">
				{/* <div className="container-about">
					<div className="img-area">
						<div className="inner-area">
							<div className="component">
								<div className="text">i-Stream</div>
								<div className="reflect">i-Stream</div>
							</div>
						</div>
					</div>
					<div className="name">John Doe</div>
					<div className="about">Manager</div>
					<div className="social-icons">
						<a href="#" className="fb"><i className="fab fa-facebook-f"></i></a>
						<a href="#" className="twitter"><i className="fab fa-whatsapp"></i></a>
						<a href="#" className="insta"><i className="fab fa-instagram"></i></a>
					</div>
					<div className="buttons">
						<button>Chat</button>
						<button>Follow me</button>
					</div>
					<div className="social-share">
						<div className="row">
							<i className="fa fa-heart"></i>
							<span>30.4k </span>
						</div>
						<div className="row">
							<i className="fa fa-comment"></i>
							<span>54.2k</span>
						</div>
						<div className="row">
							<i className="fa fa-share"></i>
							<span>38.5k</span>
						</div>
					</div>
				</div> */}


				{/* <Background /> */}
				<Hero />

			</div>


			<div
				ref={gallery}
				// bg-[#2d2d2d]
				className="h-[175vh] relative flex gap-[2vw] p-[2vw] overflow-hidden">
				<Column
					images={[images[0] as any, images[1] as any, images[2] as any, images[3] as any, images[4] as any]}
					y={y}
				/>
				<Column
					images={[images[5] as any, images[6] as any, images[7] as any, images[8] as any, images[9] as any]}
					y={y2}
				/>
				{/* <Column
					images={[images[6] as any, images[7] as any, images[8] as any]}
					y={y3}
				/>
				<Column
					images={[images[9] as any, images[10 as any], images[11 as any]]}
					y={y4}
				/> */}
			</div>
			{/* <div className="bg-[#ededee] text-center">
				<h1 className="about-titles">3D Text Effect</h1>
				<p className="about-para">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem aut cumque obcaecati dolores nihil maxime temporibus laudantium quos saepe ab!
				</p>

				<h1 className="about-titles">3D Text Effect</h1>
				<p className="about-para">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem aut cumque obcaecati dolores nihil maxime temporibus laudantium quos saepe ab!
				</p>


				<h1 className="about-titles">3D Text Effect</h1>
				<p className="about-para">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem aut cumque obcaecati dolores nihil maxime temporibus laudantium quos saepe ab!
				</p>


				<h1 className="about-titles">3D Text Effect</h1>
				<p className="about-para">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem aut cumque obcaecati dolores nihil maxime temporibus laudantium quos saepe ab!
				</p>
			</div> */}
		</main>
	);
}
