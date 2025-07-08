import Logo from "@/assets/images/logo.png";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import Navlink from "@/provider/Navlink";
import Image from "next/image";
import Link from "next/link";
import { RiMenu4Line } from "react-icons/ri";
export default function Sidebar() {
	return (
		<Sheet>
			<SheetTrigger className="block lg:hidden" asChild>
				<RiMenu4Line className="text-xl" />
			</SheetTrigger>
			<SheetContent className="border-none">
				<SheetHeader>
					<SheetClose asChild>
						<Link href={"/"}>
							<Image
								src={Logo}
								alt="Logo"
								className="w-36 lg:w-48 object-cover"
							/>
						</Link>
					</SheetClose>
				</SheetHeader>
				<ul className="flex flex-col text-sm px-5 w-max gap-4">
					<li>
						<SheetClose asChild>
							<Navlink to="/">Home</Navlink>
						</SheetClose>
					</li>
					<li>
						<SheetClose asChild>
							<Navlink to="/about">About Me</Navlink>
						</SheetClose>
					</li>
					<li>
						<SheetClose asChild>
							<Navlink to="/portfolio">Portfolio</Navlink>
						</SheetClose>
					</li>
					<li>
						<SheetClose asChild>
							<Navlink to="/blog">Blog</Navlink>
						</SheetClose>
					</li>
				</ul>

				<SheetFooter>
					<SheetClose asChild>
						<Link href={"/contact"}>
							<button className="btn">Contact Me</button>
						</Link>
					</SheetClose>
					<SheetClose asChild>
						<button className="btn outline">Close</button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
