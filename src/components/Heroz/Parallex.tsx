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
		// bg-[url("/slide/bg16.avif")] bg-contain bg-center
		<main className='-mt-[10%]'>


			<div className="mb-[10%]">
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
		</main>
	);
}
