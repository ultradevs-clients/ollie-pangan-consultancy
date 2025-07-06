import Link from "next/link";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import LeftSVG from "@/assets/images/about-banner-left.png";
import RightSVG from "@/assets/images/about-banner-right.png";
import Image from "next/image";

export default function PageBanner({ title, currentPage }) {
	return (
		<div className="container">
			<div className="bg-main my-[60px] py-10 px-9 relative text-background text-center rounded-4xl">
				<h2 className="pb-4">{title}</h2>
				<Breadcrumb className="w-max mx-auto">
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href="/">Home</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href="/about">{currentPage}</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<Image
					className="absolute w-64 top-0 left-16"
					src={LeftSVG}
					alt="Banner left svg"
				/>
				<Image
					className="absolute w-64 bottom-0 right-16"
					src={RightSVG}
					alt="Banner right svg"
				/>
			</div>
		</div>
	);
}
