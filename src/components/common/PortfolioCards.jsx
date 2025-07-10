const cards = [
	{
		title: "Total Value Delivered",
		value: "$1B+",
		bgColor: "rgba(17, 186, 17, 0.1)", // #11BA11
		textColor: "#11BA11",
	},
	{
		title: "Direct P&L Contribution",
		value: "$90M+",
		bgColor: "rgba(46, 63, 144, 0.1)", // #2E3F90
		textColor: "#2E3F90",
	},
	{
		title: "Enterprise Transformations",
		value: "15",
		bgColor: "rgba(18, 187, 217, 0.1)", // #12BBD9
		textColor: "#12BBD9",
	},
	{
		title: "Countries Worked In",
		value: "10",
		bgColor: "rgba(244, 197, 66, 0.1)", // #F4C542
		textColor: "#F4C542",
	},
	{
		title: "Industries Covered",
		value: "12",
		bgColor: "rgba(202, 18, 178, 0.1)", // #CA12B2
		textColor: "#CA12B2",
	},
	{
		title: "Leaders Coached / Mentored",
		value: "100+",
		bgColor: "rgba(94, 25, 255, 0.1)", // #5E19FF
		textColor: "#5E19FF",
	},
	{
		title: "User Adoption of Solutions",
		value: "90%+",
		bgColor: "rgba(242, 123, 50, 0.1)", // #F27B32
		textColor: "#F27B32",
	},
	{
		title: "Total Projects & Programs",
		value: "50+",
		bgColor: "rgba(16, 27, 63, 0.1)", // #101B3F
		textColor: "#101B3F",
	},
];

export default function PortfolioCards() {
	return (
		<div className="mt-10 py-7 px-5 border border-low/10 rounded-2xl grid grid-cols-4 gap-4">
			{cards.map((card, idx) => (
				<div
					key={idx}
					className="py-4 px-6 text-left rounded-xl"
					style={{ background: card.bgColor }}
				>
					<h4>{card.title}</h4>
					<h4
						className="text-2xl font-bold pt-2"
						style={{ color: card.textColor }}
					>
						{card.value}
					</h4>
				</div>
			))}
		</div>
	);
}
