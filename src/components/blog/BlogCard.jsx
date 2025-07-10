import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard({ id, title, description, date, image }) {
	return (
		<Link
			href={`/blog/${id}`}
			className="p-2 border border-low/10 hover:shadow-md duration-300 rounded-2xl cursor-pointer"
		>
			<Image
				src={image ? image : "https://i.ibb.co/fVrSSKFP/fff.webp"}
				alt="Blog Image"
				width={1920}
				height={1080}
				quality={100}
				className="w-full h-64 object-cover rounded-lg"
			/>
			<div className="p-3 text-left flex flex-col justify-between h-[calc(100%-256px)]">
				<div>
					<h4 className="text-xl font-bold pb-3">
						{title || "Untitled"}
					</h4>
					<p className="text-low line-clamp-4 !py-0">
						{description || "No description"}
					</p>
				</div>
				<h4 className="text-low pt-3">
					{format(new Date(date), "MMMM d, yyyy")}
				</h4>
			</div>
		</Link>
	);
}
