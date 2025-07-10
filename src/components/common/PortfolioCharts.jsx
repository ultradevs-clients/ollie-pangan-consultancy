import React from "react";
import ChartOne from "./ChartOne";
import ChartTwo from "./ChartTwo";

export default function PortfolioCharts() {
	return (
		<div className="grid grid-cols-2 gap-6 pt-6">
			<ChartOne />
			<ChartTwo />
		</div>
	);
}
