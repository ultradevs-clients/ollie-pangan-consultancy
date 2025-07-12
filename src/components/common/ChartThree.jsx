"use client";

import {
	LineChart,
	XAxis,
	YAxis,
	ResponsiveContainer,
	Customized,
} from "recharts";

const data = [
	{ category: "Strategy", time: 12, value: "$110M" },
	{ category: "HR", time: 10, value: "$250M" },
	{ category: "Operations", time: 9, value: "$200M" },
	{ category: "Marketing", time: 10, value: "$120M" },
	{ category: "Finance", time: 7, value: "$110M" },
];

// Custom lines + dots + labels in one SVG group
const CustomRender = ({ yAxisMap, xAxisMap }) => {
	const yMap = yAxisMap[Object.keys(yAxisMap)[0]];
	const xMap = xAxisMap[Object.keys(xAxisMap)[0]];

	return (
		<g>
			{data.map((entry, index) => {
				const y = yMap.scale(entry.category) + yMap.bandSize / 2;
				const xEnd = xMap.scale(entry.time);

				return (
					<g key={index}>
						{/* Horizontal Line */}
						<line
							x1={xMap.scale(0)}
							x2={xEnd}
							y1={y}
							y2={y}
							stroke="#2E3F90"
							strokeWidth={2}
						/>
						{/* Dot */}
						<circle cx={xEnd} cy={y} r={5} fill="#F4C542" />
						{/* Value Label */}
						<text
							x={xEnd + 12}
							y={y}
							fontSize={14}
							fontWeight={500}
							fill="#000"
							alignmentBaseline="middle"
						>
							{entry.value}
						</text>
					</g>
				);
			})}
		</g>
	);
};

export default function ChartThree() {
	return (
		<div className="border border-low/10 p-5 rounded-2xl text-left w-full">
			<h4 className="text-xl font-bold mb-3">
				Function-Level Value Delivery with Time-to-Value
			</h4>
			<div className="w-full h-[300px]">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart
						layout="vertical"
						data={data}
						margin={{ top: 40, right: 60, left: 30, bottom: 30 }}
					>
						<XAxis
							type="number"
							domain={[0, 12]}
							ticks={[0, 2, 4, 6, 8, 10, 12]}
							axisLine={true}
							tickLine={true}
							fontSize={14}
							fontWeight={500}
							stroke="#000"
						/>
						<YAxis
							type="category"
							dataKey="category"
							stroke="#000"
							tickLine={false}
							axisLine={false}
							tick={{ fontSize: 14, fontWeight: 500 }}
							padding={{ bottom: 25 }}
						/>

						<Customized component={CustomRender} />
					</LineChart>
					<h5 className="text-sm font-medium text-center -mt-5">
						Average Time to Value
					</h5>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
