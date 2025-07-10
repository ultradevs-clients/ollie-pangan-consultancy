import Services from "@/components/common/Services";
import Banner from "@/components/homepage/Banner";
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
		</div>
	);
}
