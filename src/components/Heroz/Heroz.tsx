"use client";
import { useEffect } from "react";
import Parallex from "./Parallex";
import Lenis from "@studio-freight/lenis";

export default function Heroz() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<>
			<Parallex />
		</>
	);
}
