"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import texture from "@/assets/images/texture.png";

export default function Navlink({ children, to }) {
	const path = usePathname();

	return (
		<Link
			href={to}
			className={`${
				path === to ? "text-accent flex flex-col relative" : "text-low"
			}`}
		>
			{children}
			{path === to && (
				<Image
					src={texture}
					alt="Texture"
					className="absolute w-full -bottom-1 object-cover h-[6px]"
				/>
			)}
		</Link>
	);
}
