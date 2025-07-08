"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

export default function Blogs() {
	const [blogs, setBlogs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const itemsPerPage = 9;

	useEffect(() => {
		setIsLoading(true);
		axios.get("/data/blogs.json").then((res) => {
			setBlogs(res.data);
			setIsLoading(false);
		});
	}, []);

	return (
		<div className="container text-center pb-36">
			<h2>Blog</h2>
			<p className="text-low !pt-5">
				Because I don’t do thought leadership. I do real leadership.
			</p>
			<p className="text-low mx-auto">
				Hot takes. Hard truths. Lessons earned, not borrowed. <br /> I
				don’t write to fill a page — I write to say what everyone else
				won’t.
			</p>
			<section className="grid lg:grid-cols-3 gap-6 pt-6">
				{blogs?.map((item) => (
					<BlogCard
						key={item.id}
						title={item.title}
						description={item.description}
						date={item.date}
						image={item.image}
					/>
				))}
			</section>
		</div>
	);
}
