import Blogs from "@/components/blog/Blogs";
import PageBanner from "@/components/common/PageBanner";
import React from "react";

export const metadata = {
	title: "Blog | Ollie Pangan",
	description: "Description.",
};

export default function page() {
	return (
		<div>
			<PageBanner title={"Blog"} currentPage={"Blog"} />
			<Blogs />
		</div>
	);
}
