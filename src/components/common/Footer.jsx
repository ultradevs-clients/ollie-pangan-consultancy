"use client";
import Logo from "@/assets/images/logo-footer.png";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { usePathname } from "next/navigation";
import { getYear } from "date-fns";

export default function Footer() {
	const pathName = usePathname();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log("Form submitted:", data);
	};

	return (
		<div
			className={`${
				pathName === "/portfolio"
					? "hidden"
					: "bg-footer pt-12 lg:pt-20 footer lg:px-0 px-5"
			}`}
		>
			<div className="container flex lg:flex-row flex-col lg:gap-0 gap-10 text-background/70 pb-8 lg:pb-14">
				<div className="lg:w-2/4">
					<Image
						src={Logo}
						alt="Footer Logo"
						className="w-36 lg:w-48 object-cover"
					/>
					<p className="!py-4 lg:!py-8 lg:!text-lg !text-base">
						Turning bold ideas into functional design.
					</p>
					<h5 className="text-lg font-medium text-background">
						Social Links
					</h5>
					<ul className="flex items-center gap-3 pt-3">
						<li>
							<a
								href="https://www.facebook.com/olliep28/"
								target="_blank"
								className="text-xl"
							>
								<FaFacebook />
							</a>
						</li>
						<li>
							<a
								href="https://x.com/iamolliepangan"
								target="_blank"
								className="text-xl"
							>
								<FaXTwitter />
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/olliepangan/?hl=en"
								target="_blank"
								className="text-xl"
							>
								<FaInstagram />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/olliepangan/"
								target="_blank"
								className="text-xl"
							>
								<FaLinkedin />
							</a>
						</li>
					</ul>
				</div>
				<div className="lg:w-2/4 flex md:flex-row flex-col justify-between gap-5">
					<ul className="space-y-2 lg:space-y-3 text-lg link-container">
						<h4 className="text-background font-medium">
							Quick Links
						</h4>
						<li>
							<Link href={"/"}>Home</Link>
						</li>
						<li>
							<Link href={"/about"}>About</Link>
						</li>
						<li>
							<Link href={"/portfolio"}>Portfolio</Link>
						</li>
						<li>
							<Link href={"/blog"}>Blog</Link>
						</li>
						<li>
							<Link href={"/contact"}>Contact</Link>
						</li>
					</ul>

					<ul className="lg:w-3/5 space-y-2 lg:space-y-4">
						<h4 className="text-background text-lg font-medium">
							Contact Info
						</h4>
						<li className="flex items-center gap-2 lg:text-lg">
							<div className="bg-background/10 p-2 rounded-lg">
								<FiMail />
							</div>
							hello@olliepangan.com
						</li>
						<li className="flex items-center gap-2 lg:text-lg">
							<div className="bg-background/10 p-2 rounded-lg">
								<FiPhoneCall />
							</div>
							Support: +639171238553
						</li>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="flex items-center mt-5 lg:mt-7 lg:pr-[3px] border border-background/20 bg-background/10 rounded-2xl justify-between">
								<input
									type="email"
									placeholder="Email"
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^\S+@\S+$/i,
											message: "Invalid email address",
										},
									})}
									className="border-none rounded-xl placeholder:text-background/70 focus:outline-none  lg:py-4 text-base w-full px-3 lg:px-4 shadow-none"
								/>
								<button className="btn !px-4 !w-max lg:!px-6 !py-2 lg:!py-3 !bg-background !text-accent">
									Subscribe
								</button>
							</div>
							{errors.email && (
								<p className="text-red-500 !text-sm -mt-1 !pb-0">
									{errors.email.message}
								</p>
							)}
						</form>
					</ul>
				</div>
			</div>
			<div className="container text-sm lg:text-base flex lg:flex-row flex-col items-center justify-between text-background/70 border-t border-background/15 pt-3 lg:pt-6 pb-4 lg:pb-8">
				<h5>Copyright {new Date().getFullYear()} © Ollie Pangan</h5>
				<div className="flex gap-2">
					<a href="#">Terms & Condition</a>
					<span>|</span>
					<a href="#">Privacy Policy</a>
				</div>
			</div>
		</div>
	);
}
