import Link from "next/link";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Logo from "@/assets/images/logo-icon.png";
import Image from "next/image";

export default function Header() {
	return (
		<div>
			<div className="flex justify-between pt-6">
				<Breadcrumb className="w-max">
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href="/">Home</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href="/portfolio">Portfolio</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>

				<Image src={Logo} alt="Logo" className="w-8 lg:w-12" />
			</div>
			<h4 className="text-xl lg:text-3xl font-bold">
				Portfolio Dashboard
			</h4>
		</div>
	);
}
