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
			className={`relative w-max text-base group transition-colors duration-200 ${
				isActive ? "text-accent" : "text-low hover:text-accent"
			}`}
			{...props}
		>
			{children}

			{/* Active or hover underline image */}
			<span className="absolute w-full left-0 -bottom-1 h-[6px] overflow-hidden">
				{(isActive || true) && (
					<Image
						src={texture}
						alt="Texture"
						className={`w-full h-[6px] object-cover transition-opacity duration-200 ${
							isActive
								? "opacity-100"
								: "opacity-0 group-hover:opacity-100"
						}`}
					/>
				)}
			</span>
		</Link>
	);
});

Navlink.displayName = "Navlink";

export default Navlink;
