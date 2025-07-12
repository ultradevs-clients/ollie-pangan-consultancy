import Link from "next/link";
import React from "react";
import { Marquee } from "../magicui/marquee";
import { BsArrowRight } from "react-icons/bs";
import BannerCarousel from "./BannerCarousel";

const reviews = [
	{
		name: "COO, Tech Startup",
		body: "“He only consultant who made data feel actionable, not academic.”",
	},
	{
		name: "Head of Strategy, AbortizPower",
		body: "“Ollie brought clarity and results fast - we saw ROI in weeks.”",
	},
	{
		name: "Chief Digital Officer, Retail Group",
		body: "“He turned our chaos into a roadmap. Strategic and sharp.”",
	},
];

export default function Banner() {
	return (
		<div className="bg-secondary">
			<div className="flex container lg:flex-row flex-col-reverse gap-4 lg:gap-0 lg:px-0 px-5 lg:pt-28 lg:pb-10">
				<div className="lg:w-8/12">
					<h1 className="lg:leading-14 pb-4">
						Welcome. I am Ollie Pangan. This is where bold strategy
						meets smart execution.
					</h1>
					<p className="text-low font-medium w-8/12 !pb-4">
						Automation, data, and AI — I use them to drive profit,
						efficiency, and transformation.
					</p>
					<Link
						href={"/contact"}
						className="text-xl text-low w-full underline pb-5 flex cursor-pointer  items-center gap-2"
					>
						Let’s build smarter, faster, better business—together
						<BsArrowRight className="text-2xl mt-2" />
					</Link>
					<Link href={"/contact"}>
						<button className="btn">Let's talk</button>
					</Link>
					<div className="flex items-center gap-3  pt-8 pb-7">
						<div className="w-16 h-[1px] bg-accent mt-4" />
						<h5 className="text-2xl font-semibold">Testimonials</h5>
					</div>
					<div className="relative">
						<div className="h-full absolute z-10 top-0 left-0 w-24  bg-gradient-to-r from-secondary to-transparent" />
						<div className="h-full absolute z-10 top-0 left-0 w-24  bg-gradient-to-r from-secondary to-transparent" />
						<div className="h-full absolute z-10 top-0 right-0 w-24  bg-gradient-to-l from-secondary to-transparent" />
						<div className="h-full absolute z-10 top-0 right-0 w-24  bg-gradient-to-l from-secondary to-transparent" />
						<Marquee pauseOnHover className="[--duration:20s]">
							{reviews.map((review, idx) => (
								<div
									key={idx}
									className="border w-88 px-5 py-6 rounded-2xl space-y-4 border-accent/20"
								>
									<h4 className="text-low italic">
										{review.body}
									</h4>
									<div className="flex items-center gap-3">
										<div className="w-10 h-[1px] bg-accent" />
										<h5>{review.name}</h5>
									</div>
								</div>
							))}
						</Marquee>
					</div>
				</div>
				<div className="w-full lg:w-4/12">
					<BannerCarousel />
				</div>
			</div>
		</div>
	);
}
