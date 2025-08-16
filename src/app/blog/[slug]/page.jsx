"use client";

import Lottie from "lottie-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import animationData from "@/assets/lotties/not-found.json";
import Image from "next/image";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import axios from "axios";
import { fetchBlogById } from "@/lib/api";

export default function page() {
	const { slug } = useParams();
	const [blog, setBlog] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!slug) return;

		setLoading(true);
		fetchBlogById(slug).then((data) => {
			setBlog(data);
			setLoading(false);
		});
	}, [slug]);

	if (!blog) {
		return (
			<div className="container text-center ">
				<div className="h-[calc(100vh-80px)] flex items-center flex-col justify-center">
					<div className="w-64 h-64">
						<Lottie animationData={animationData} loop={true} />
					</div>
					<h4 className="text-xl text-low/80 font-semibold">
						Blog not found
					</h4>
				</div>
			</div>
		);
	}
	if (blog) {
		return (
			<div className="min-h-[calc(100vh-80px)]">
				{loading ? (
					<div className="container flex lg:flex-row flex-col lg:px-0 px-5 gap-6 lg:gap-6 xl:gap-20 pt-2 lg:pt-16 pb-12 ">
						<Skeleton className="lg:w-2/4 rounded-4xl h-44 md:h-72 lg:h-[400px] bg-accent/20" />
						<div className="lg:w-2/4 space-y-4">
							<Skeleton className="w-3/4 h-10 bg-accent/20" />
							<Skeleton className="w-1/4 h-5 bg-accent/20" />
							<Skeleton className="w-full h-5 bg-accent/20" />
							<Skeleton className="w-3/4 h-5 bg-accent/20" />
							<Skeleton className="w-full h-5 bg-accent/20" />
							<Skeleton className="w-2/4 h-5 bg-accent/20" />
						</div>
					</div>
				) : (
					<div className="container flex lg:flex-row flex-col lg:px-0 px-5 gap-6 lg:gap-6 xl:gap-20 pt-2 lg:pt-16 pb-12">
						<Image
							src={blog?.image}
							alt={blog?.title}
							width={1920}
							height={1080}
							quality={100}
							className="lg:w-2/4 rounded-4xl h-44 md:h-72 lg:h-[400px] object-cover"
						/>
						<div>
							<h2 className="!text-2xl lg:!text-4xl">
								{blog?.title}
							</h2>
							{blog?.date && (
								<h4 className="pt-3 pb-2">
									{format(
										new Date(blog.date),
										"MMMM d, yyyy"
									)}
								</h4>
							)}
							<p>{blog?.description}</p>
							<Link href={"/contact"}>
								<button className="btn mt-6">Let's talk</button>
							</Link>
						</div>
					</div>
				)}
			</div>
		);
	}
}
