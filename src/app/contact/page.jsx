import ContactForm from "@/components/common/ContactForm";
import PageBanner from "@/components/common/PageBanner";
import Cards from "@/components/contact/Cards";
import Map from "@/components/contact/Map";
import React from "react";

export const metadata = {
	title: "Contact me | Ollie Pangan",
	description: "Description.",
};

export default function page() {
	return (
		<div>
			<PageBanner title={"Contact Me"} currentPage={"Contact me"} />
			<Cards />
			<ContactForm />
			<Map />
		</div>
	);
}
