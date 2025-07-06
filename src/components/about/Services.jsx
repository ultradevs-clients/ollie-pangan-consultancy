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
		<div className="bg-secondary py-20">
			<div className="container flex gap-6">
				<div className="w-2/4">
					<h2>What I'm Here For? </h2>
					<p>
						To help people and companies see what's possible-even
						when they can't see it yet.
					</p>
					<div className="bg-main/10 relative rounded-3xl mt-8 overflow-hidden">
						<div className="p-8">
							<h4 className="text-2xl font-semibold">
								What I’m Here For?
							</h4>
							<h5 className="text-xl font-medium italic py-3">
								“To help people and companies see what’s
								possible—even when they can’t see it yet.”
							</h5>
						</div>
						<Image
							src={UserImage}
							alt="User Image"
							className="w-96"
						/>

						<div className="absolute bottom-12 right-8 z-10">
							<div className="rounded-t-2xl  px-7 pt-6 pb-2 bg-background w-max relative card">
								<h4 className="text-xl font-medium">
									Experience
								</h4>
							</div>
							<div className="rounded-b-2xl rounded-tr-2xl px-7 pt-2 pb-6 bg-background ">
								<h4 className="text-[44px] font-extrabold">
									20+ Years
								</h4>
							</div>
						</div>
					</div>
				</div>
				<div className="w-2/4">
					<h4 className="text-3xl font-bold">
						10 Things You Should Know About Me
					</h4>
					<p>(That Aren't on my CV)</p>
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
								<AccordionTrigger className="data-[state=open]:bg-main data-[state=open]:rounded-none data-[state=open]:text-background px-6 py-5 data-[state=open]:pb-2 text-left text-xl font-bold hover:no-underline cursor-pointer">
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
		content: "",
	},
	{
		value: "item-3",
		title: "3. I Don't Believe in Corporate Theater",
		content: "",
	},
	{
		value: "item-4",
		title: "4. I'm a Cancer Survivor",
		content: "",
	},
	{
		value: "item-5",
		title: "5. I've Run 13 Marathons (Almost All the Majors)",
		content: "",
	},
	{
		value: "item-6",
		title: "6. I Used to Run a Purposeful Kitchen",
		content: "",
	},
	{
		value: "item-7",
		title: "7. I've Built My Own Practice",
		content: "",
	},
	{
		value: "item-8",
		title: "8. I Show Up With People, Not Just",
		content: "",
	},
	{
		value: "item-9",
		title: "9. I Speak Business and Tech — Fluently",
		content: "",
	},
	{
		value: "item-10",
		title: "10. I'm Building a Legacy That Outlives Me",
		content: "",
	},
];
