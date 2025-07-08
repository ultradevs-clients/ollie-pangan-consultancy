import Image from "next/image";
import React from "react";

export default function BlogCard({ title, description, date, image }) {
	return (
		<div className="p-2 border border-low/20 hover:shadow-md duration-300 rounded-2xl cursor-pointer">
			<Image
				src={image ? image : "/"}
				alt="Blog Image"
				width={1920}
				height={1080}
				quality={100}
				className="w-full h-64 object-cover rounded-lg"
			/>
			<div className="p-3 text-left flex flex-col justify-between h-[calc(100%-256px)]">
				<div>
					<h4 className="text-xl font-bold pb-3">{title}</h4>
					<p className="text-low line-clamp-4 !py-0">{description}</p>
				</div>
				<h4 className="text-low pt-3">{date}</h4>
			</div>
		</div>
	);
}
