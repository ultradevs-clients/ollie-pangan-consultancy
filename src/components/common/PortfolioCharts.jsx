import React from "react";
import ChartOne from "./ChartOne";
import ChartTwo from "./ChartTwo";
import ChartThree from "./ChartThree";
import ChartFour from "./ChartFour";

export default function PortfolioCharts() {
	return (
		<div className="w-full space-y-4 xl:space-y-0 xl:grid xl:grid-cols-2 gap-6 pt-6">
			<ChartOne />
			<ChartTwo />
			<ChartThree />
			<ChartFour />
		</div>
	);
}
