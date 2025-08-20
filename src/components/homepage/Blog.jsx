"use client";
import { fetchBlogs } from "@/lib/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import BlogCard from "../blog/BlogCard";
import Lottie from "lottie-react";
import animationData from "@/assets/lotties/not-found.json";

export default function Blog() {
	const [blogs, setBlogs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const loadBlogs = async () => {
			setIsLoading(true);
			const { blogs } = await fetchBlogs(1, 3);
			setBlogs(blogs);
			setIsLoading(false);
		};

		loadBlogs();
	}, []);
	return (
		<div className="bg-secondary py-12 lg:py-20 lg:px-0 px-5">
			<div className="container">
				<h2>Blog</h2>
				<p className="text-low !pt-5 !pb-4">
					Because I don’t do thought leadership. I do real leadership.
				</p>
				<div className="flex md:flex-row flex-col items-center justify-between pb-6">
					<h4 className="text-low lg:w-6/12">
						Hot takes. Hard truths. Lessons earned, not borrowed.{" "}
						<br /> I don’t write to fill a page — I write to say
						what everyone else won’t.
					</h4>
					<div className="pt-4 lg:pt-0">
						<Link href={"/blog"}>
							<button className="btn">View more</button>
						</Link>
					</div>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
					{isLoading ? (
						[...Array(3)].map((_, index) => (
							<div
								key={index}
								className="p-2 border border-low/20 hover:shadow-md duration-300 rounded-2xl"
							>
								<Skeleton className="h-64 w-full rounded-xl bg-accent/20" />
								<div className="p-3 text-left flex flex-col justify-between h-[calc(100%-256px)]">
									<Skeleton className="h-4 mb-5 w-full rounded-xl bg-accent/20" />
									<Skeleton className="h-4 mb-4 w-full rounded-xl bg-accent/20" />
									<Skeleton className="h-4 w-2/4 rounded-xl bg-accent/20" />
								</div>
							</div>
						))
					) : blogs.length < 1 ? (
						<div className="h-96 lg:col-span-3 md:col-span-2 flex items-center flex-col justify-center">
							<div className="w-64 h-64">
								<Lottie
									animationData={animationData}
									loop={true}
								/>
							</div>
							<h4 className="text-xl text-low/80 font-semibold">
								Blog not found
							</h4>
						</div>
					) : (
						blogs.map((item) => (
							<BlogCard
								key={item.id}
								id={item.documentId}
								title={item.title}
								description={item.description}
								date={item.date}
								image={item.image}
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
}
