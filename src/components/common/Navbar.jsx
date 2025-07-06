"use client";
import Navlink from "@/provider/Navlink";
import React, { useEffect, useState } from "react";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY && currentScrollY > 50) {
				// Scrolling down
				setShow(false);
			} else {
				// Scrolling up
				setShow(true);
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);
	return (
		<nav
			className={`navbar fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
				show ? "translate-y-0" : "-translate-y-full"
			} `}
		>
			<div className="container flex items-center justify-between">
				<Link href={"/"}>
					<Image
						src={Logo}
						alt="Logo"
						className="w-48 object-cover"
					/>
				</Link>

				<ul className="flex items-center gap-5">
					<li>
						<Navlink to="/">Home</Navlink>
					</li>
					<li>
						<Navlink to="/about">About Me</Navlink>
					</li>
					<li>
						<Navlink to="/portfolio">Portfolio</Navlink>
					</li>
					<li>
						<Navlink to="/blog">Blog</Navlink>
					</li>
				</ul>

				<div className="lg:w-48 flex justify-end">
					<Link href={"/contact"}>
						<button className="btn">Contact me</button>
					</Link>
				</div>
			</div>
		</nav>
	);
}
