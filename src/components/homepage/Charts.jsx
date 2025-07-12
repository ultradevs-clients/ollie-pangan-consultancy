import React from "react";
import PortfolioCards from "../common/PortfolioCards";
import PortfolioCharts from "../common/PortfolioCharts";

export default function Charts() {
	return (
		<div className="container text-center py-12 lg:py-20 lg:px-0 px-5">
			<h5 className="font-medium">Portfolio</h5>
			<h4 className="lg:text-[44px] text-3xl font-bold lg:leading-12 pt-6">
				Real Impact. Real Numbers. <br /> No Slides, Just Results.{" "}
			</h4>
			<PortfolioCards />
			<PortfolioCharts />
		</div>
	);
}
