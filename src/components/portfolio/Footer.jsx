import { FaBagShopping } from "react-icons/fa6";

export default function Footer() {
	return (
		<div className="text-center py-14 bg-footer text-background space-y-4 lg:px-0 px-5">
			<h4 className="text-xl lg:text-3xl font-semibold flex justify-center gap-3">
				<FaBagShopping className="text-background/70 mt-[2px]" />
				<span>Leadership Style & Work Ethic</span>
			</h4>
			<h5 className="text-lg lg:text-2xl font-medium">
				Direct. Hands-on. Outcome-obsessed.
			</h5>
			<h6 className="text-sm lg:text-lg">
				I lead with clarity, speed, and accountability. I roll up my
				sleeves. I fix what's broken. No fluff. No excuses. Just
				traction.
			</h6>
		</div>
	);
}
