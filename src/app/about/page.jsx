import ContactForm from "@/components/common/ContactForm";
import PageBanner from "@/components/common/PageBanner";
import Services from "@/components/common/Services";
import React from "react";

export const metadata = {
	title: "About me | Ollie Pangan",
	description: "Description.",
};

export default function page() {
	return (
		<div className="about ">
			<PageBanner title={"About Me"} currentPage={"About me"} />
			<Services />
			<ContactForm />
		</div>
	);
}
