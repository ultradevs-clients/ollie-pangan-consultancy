"use client";

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	LabelList,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ category: "Digital Transformation", percent: 95, impact: "$350M" },
	{ category: "Data & Analytics Strategy", percent: 88, impact: "$280M" },
	{ category: "AI & Automation", percent: 80, impact: "$220M" },
	{ category: "Customer Experience (CX)", percent: 90, impact: "$150M" },
];

export default function ChartTwo() {
	return (
		<div className="border border-low/10 p-5 rounded-2xl text-left w-full overflow-x-auto">
			<h4 className="text-xl font-bold">
				Enterprise Transformations: Adoption & Impact by Category
			</h4>
			<div className="min-w-[400px] xl:w-full h-[320px]">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						data={data}
						layout="vertical"
						margin={{ top: 30, right: 60, left: -30, bottom: -20 }}
					>
						<XAxis
							axisLine={true}
							stroke="#2E3F90"
							type="number"
							tick={false}
						/>
						<YAxis
							dataKey="category"
							type="category"
							tickLine={false}
							axisLine={true}
							width={150}
							stroke="#2E3F90"
							tick={{
								fill: "#000000",
								fontSize: 14,
								fontWeight: 500,
							}}
						/>

						<Bar
							dataKey="percent"
							fill="#2E3F90"
							radius={[0, 8, 8, 0]}
							barSize={45}
						>
							<LabelList
								dataKey="percent"
								position="insideRight"
								fill="#fff"
								fontWeight={700}
								offset={10}
								formatter={(value) => `${value}%`}
							/>
							<LabelList
								dataKey="impact"
								position="right"
								offset={10}
								fill="#000"
								fontSize={16}
								fontWeight={700}
							/>
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
