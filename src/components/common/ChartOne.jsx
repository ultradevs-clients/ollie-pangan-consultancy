"use client";
import { ResponsiveContainer } from "recharts";
import { BarChart, Bar, CartesianGrid, XAxis, LabelList } from "recharts";

const chartData = [
	{
		label: "Revenue Growth (Vodafone)",
		value: 10,
		valueText: "$10M",
	},
	{
		label: "ERP & Forecasting (PepsiCo)",
		value: 12,
		valueText: "$12M",
	},
	{
		label: "Automation (Shell)",
		value: 15,
		valueText: "$15M",
	},
	{
		label: "10% Profitability Lift (AboitizPower)",
		value: 5,
		valueText: "$5M",
	},
	{
		label: "PSL Influence",
		value: 15,
		valueText: "$15M",
	},
	{
		label: "Other Strategic Programs",
		value: 20,
		valueText: "$20M",
	},
	{
		label: "Other Strategic Programs",
		value: 25,
		valueText: "$25M",
	},
];

export default function PortfolioImpactChart() {
	return (
		<div className="border border-low/10 p-3 lg:p-5 rounded-2xl text-left w-full  overflow-x-auto">
			<h4 className="text-xl font-bold">Portfolio Impact Breakdown</h4>
			<h5 className="text-low pt-3">
				Selected highlights from my $18M+ portfolio. Each project
				delivered measurable business value.
			</h5>
			<div className="min-w-[600px] lg:w-full h-[250px]">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						data={chartData}
						margin={{ top: 10, bottom: -20 }}
						barCategoryGap="0%" // 👈 category-to-category gap
						barGap="0%"
					>
						<XAxis
							dataKey="label"
							tickLine={false}
							axisLine={false}
							interval={0}
							height={80}
							tick={({ x, y, payload }) => {
								const words = payload.value.split(" ");
								const maxCharsPerLine = 15;
								const lines = [];
								let currentLine = "";

								words.forEach((word) => {
									if (
										(currentLine + " " + word).trim()
											.length > maxCharsPerLine
									) {
										lines.push(currentLine.trim());
										currentLine = word;
									} else {
										currentLine += " " + word;
									}
								});
								lines.push(currentLine.trim());

								return (
									<g transform={`translate(${x},${y + 10})`}>
										{lines.map((line, index) => (
											<text
												key={index}
												x={0}
												y={index * 14}
												textAnchor="middle"
												fill="#000000"
												fontSize={11}
											>
												{line}
											</text>
										))}
									</g>
								);
							}}
						/>
						<Bar
							dataKey="value"
							fill="#2E3F90"
							radius={[8, 8, 0, 0]}
							barSize={45}
						>
							<LabelList
								dataKey="valueText"
								position="top"
								fill="#000000"
								fontSize={13}
								fontWeight={500}
								offset={10}
							/>
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
