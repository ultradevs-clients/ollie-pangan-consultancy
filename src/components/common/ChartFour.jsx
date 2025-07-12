import { LuDot } from "react-icons/lu";
import { MdMan } from "react-icons/md";
import { MdFolder } from "react-icons/md";
const data = [
	{
		country: "Qatar",
		industries: ["Telecommunications*"],
		peopleDeveloped: 25,
		Projects: 21,
	},
	{
		country: "Philippines",
		industries: ["Energy*", "FMCG*", "Healthcare**"],
		peopleDeveloped: 30,
		Projects: 20,
	},
	{
		country: "UK",
		industries: ["Telecom*", "Retail*"],
		peopleDeveloped: 15,
		Projects: 10,
	},
	{
		country: "Russia",
		industries: ["FMCG**"],
		peopleDeveloped: 12,
		Projects: 7,
	},
	{
		country: "UAE",
		industries: ["Media*", "Real Estate*"],
		peopleDeveloped: 8,
		Projects: 3,
	},
];
export default function ChartFour() {
	return (
		<div className="border border-low/10 p-5 rounded-2xl text-left w-full overflow-auto">
			<h4 className="text-xl font-bold mb-3">
				Global Leadership Footprint
			</h4>

			<ul className="w-max lg:w-full">
				<div className="text-sm font-semibold flex  w-full bg-low/10 py-3 px-4 rounded-xl">
					<div className="w-2/4 flex gap-6">
						<h4 className="w-1/6">Country</h4>
						<h4 className="w-5/6">Industries</h4>
					</div>
					<div className="w-2/4 flex justify-between">
						<h4>People Developed</h4>
						<h4>Projects Led</h4>
					</div>
				</div>
				{data.map((item, idx) => (
					<li
						key={idx}
						className="border-b px-4 py-2 border-low/10 flex text-sm"
					>
						<div className="w-2/4 flex items-center gap-8">
							<h4 className="w-1/6">{item.country}</h4>
							<h4 className="w-5/6 flex truncate">
								{item.industries.join(", ")}
							</h4>
						</div>
						<div className="w-2/4 flex gap-6">
							<div className="w-2/4 flex gap-2 items-center">
								<h4>{item.peopleDeveloped}</h4>
								<div className="flex flex-wrap">
									{Array.from({
										length: item.peopleDeveloped,
									}).map((_, idx) => (
										<MdMan
											key={idx}
											className="text-[10px] text-[#2E3F90]"
										/>
									))}
								</div>
							</div>
							<div className="w-2/4 flex gap-2 items-center">
								<h4>{item.Projects}</h4>
								<div className="flex flex-wrap">
									{Array.from({
										length: item.Projects,
									}).map((_, idx) => (
										<MdFolder
											key={idx}
											className="text-[10px] text-[#2E3F90]"
										/>
									))}
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
			<h4 className="font-semibold flex gap-6 pt-5">
				Footnotes:
				<span className="text-sm font-normal flex">
					<LuDot className="text-2xl" /> * Full-time employment
				</span>
				<span className="text-sm font-normal flex">
					<LuDot className="text-2xl" /> ** Consultancy projects
				</span>
			</h4>
		</div>
	);
}
