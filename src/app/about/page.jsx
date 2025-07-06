import AboutHeader from "@/components/about/AboutHeader";
import Services from "@/components/about/Services";
import ContactForm from "@/components/common/ContactForm";
import Footer from "@/components/common/Footer";
import React from "react";

export const metadata = {
	title: "About Me | Ollie Pangan",
	description: "Description.",
};

export default function page() {
	return (
		<div className="about">
			<AboutHeader />
			<Services />
			<ContactForm />
		</div>
	);
}
