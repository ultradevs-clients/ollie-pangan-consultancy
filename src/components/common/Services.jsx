import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import UserImage from "@/assets/images/user.png";
import Image from "next/image";

export default function Services() {
	return (
		<div className="bg-secondary py-12 lg:py-20 lg:px-0 px-5">
			<div className="container flex md:flex-row flex-col gap-6">
				<div className="md:w-2/4">
					<h2>What I'm Here For? </h2>
					<p>
						To help people and companies see what's possible-even
						when they can't see it yet.
					</p>
					<div className="bg-main/10 relative rounded-3xl mt-5 lg:mt-8 overflow-hidden xl:w-8/12">
						<div className="p-5 lg:p-8">
							<h4 className="text-xl lg:text-2xl font-semibold">
								What I’m Here For?
							</h4>
							<h5 className="text-lg lg:text-xl font-medium italic py-2 lg:py-3">
								“To help people and companies see what’s
								possible—even when they can’t see it yet.”
							</h5>
						</div>
						<Image
							src={UserImage}
							alt="User Image"
							className="w-72 lg:w-96"
						/>

						<div class="w-60 h-40 2xl:scale-100 lg:scale-90 md:scale-[70%] scale-[65%] bg-background/50 backdrop-blur-md  absolute 2xl:bottom-3 2xl:right-3 xl:-bottom-2 lg:-bottom-2 lg:right-0 md:-bottom-6 md:-right-7 -bottom-8 -right-8 mask-line">
							<h4 className="text-xl font-medium absolute top-8 left-8 ">
								Experience
							</h4>
							<h4 className="text-4xl font-bold absolute bottom-10 left-8 ">
								20+ Years
							</h4>
						</div>
					</div>
				</div>
				<div className="md:w-2/4">
					<h4 className="text-2xl lg:text-3xl font-bold">
						10 Things You Should Know About Me
					</h4>
					<p className="!text-base lg:!text-lg">
						(That Aren't on my CV)
					</p>
					<Accordion
						type="single"
						collapsible
						defaultValue="item-1"
						className="space-y-4 py-2"
					>
						{accordionData.map(({ value, title, content }) => (
							<AccordionItem
								key={value}
								value={value}
								className="rounded-2xl border border-main/10 bg-background/50 overflow-hidden"
							>
								<AccordionTrigger className="data-[state=open]:bg-main data-[state=open]:rounded-none data-[state=open]:text-background px-6 py-5 data-[state=open]:pb-2 text-left text-base lg:text-xl font-bold hover:no-underline cursor-pointer">
									{title}
								</AccordionTrigger>
								<AccordionContent className="bg-main text-background px-6  pb-5 text-base font-light">
									{content}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</div>
	);
}

const accordionData = [
	{
		value: "item-1",
		title: "1. I've Done the Work – Globally",
		content:
			"20+ years across industries and continents. I started at the bottom, earned every rung, and turned every setback into strategy.",
	},
	{
		value: "item-2",
		title: "2. Transformation Is My Playground",
		content:
			"I thrive in chaos. Whether it's broken processes or scattered data, I know how to clean it up, stich it together, and turn it into profit",
	},
	{
		value: "item-3",
		title: "3. I Don't Believe in Corporate Theater",
		content:
			"No buzzwords. No performative decks. I fix systems, deliver results, and leave the theater to the actors.",
	},
	{
		value: "item-4",
		title: "4. I'm a Cancer Survivor",
		content:
			"I rewrote the ending. I don't waste time, energy, or second chances.",
	},
	{
		value: "item-5",
		title: "5. I've Run 13 Marathons (Almost All the Majors)",
		content:
			"Because mental toughness doesn't live in slides. It lives in grit, endurance, and the discipline to show up -even when it hurts.",
	},
	{
		value: "item-6",
		title: "6. I Used to Run a Purposeful Kitchen",
		content:
			"Food-ollie-gy wasn't just about great meals -donated 70% of profits to causes that mattered. Even when I had little, I gave big",
	},
	{
		value: "item-7",
		title: "7. I've Built My Own Practice",
		content:
			"I've pitched, failed, pivoted, and built again. My consultancy taught me more than any MBA ever could.",
	},
	{
		value: "item-8",
		title: "8. I Show Up With People, Not Just Projects",
		content:
			"My teams stay loyal-not because I'm perfect, but because I lead with empathy, clarity, and follow-through.",
	},
	{
		value: "item-9",
		title: "9. I Speak Business and Tech — Fluently",
		content:
			"I move between C-suite boardrooms and data engineering sprints like I belong in both -because I do.",
	},
	{
		value: "item-10",
		title: "10. I'm Building a Legacy That Outlives Me",
		content:
			"I'm not here for titles. I'm here to leave something behind that lifts others long after I'm gone.",
	},
];
