import ContactForm from "@/components/common/ContactForm";
import Services from "@/components/common/Services";
import Banner from "@/components/homepage/Banner";
import Blog from "@/components/homepage/Blog";
import Charts from "@/components/homepage/Charts";
import React from "react";
export const metadata = {
	title: "Home | Ollie Pangan",
	description: "Description.",
};
export default function page() {
	return (
		<div>
			<Banner />
			<Services />
			<Charts />
			<Blog />
			<ContactForm />
		</div>
	);
}
