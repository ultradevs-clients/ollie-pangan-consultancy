// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";
// import texture from "@/assets/images/texture.png";

// export default function Navlink({ children, to }) {
// 	const path = usePathname();

// 	return (
// 		<Link
// 			href={to}
// 			className={`${
// 				path === to ? "text-accent flex flex-col relative" : "text-low"
// 			}`}
// 		>
// 			{children}
// 			{path === to && (
// 				<Image
// 					src={texture}
// 					alt="Texture"
// 					className="absolute w-full -bottom-1 object-cover h-[6px]"
// 				/>
// 			)}
// 		</Link>
// 	);
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { forwardRef } from "react";
import texture from "@/assets/images/texture.png";

const Navlink = forwardRef(({ children, to, ...props }, ref) => {
	const path = usePathname();
	const isActive = path === to;

	return (
		<Link
			href={to}
			ref={ref}
			className={`w-max text-base ${
				isActive ? "text-accent flex flex-col relative" : "text-low"
			}`}
			{...props}
		>
			{children}
			{isActive && (
				<Image
					src={texture}
					alt="Texture"
					className="absolute w-full -bottom-1 object-cover h-[6px]"
				/>
			)}
		</Link>
	);
});

Navlink.displayName = "Navlink";

export default Navlink;
