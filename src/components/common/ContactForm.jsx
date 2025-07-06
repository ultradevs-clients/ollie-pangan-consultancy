"use client";
import React from "react";
import { FiMail } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";

export default function ContactForm() {
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
		<div className="container py-20 flex">
			<div className="w-2/4">
				<h2>Contact me</h2>
				<p className="text-low w-9/12">
					Got a project, idea, or challenge you'd like to talk
					through? I’m always open to thoughtful conversations and
					meaningful collaborations.
				</p>
				<ul className="text-low pt-8 space-y-4">
					<li className="flex items-center gap-2 text-lg">
						<div className="bg-main/10 p-2 rounded-lg">
							<FiMail />
						</div>
						ollie@example.com
					</li>
					<li className="flex items-center gap-2 text-lg">
						<div className="bg-main/10 p-2 rounded-lg">
							<FiPhoneCall />
						</div>
						Support: (+21) 547 885 6885
					</li>
				</ul>
			</div>
			<div className="w-2/4 bg-main/15 py-6 px-7 rounded-4xl">
				<h4 className="text-2xl font-bold">Let’s get in touch</h4>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="grid grid-cols-2 gap-x-5 gap-y-3 pt-5"
				>
					<div>
						<Input
							type="text"
							placeholder="Name"
							{...register("name", {
								required: "Name is required",
							})}
							className="border-none bg-background py-7 text-base rounded-xl px-4 shadow-none"
						/>
						{errors.name && (
							<p className="text-red-500 !text-sm -mt-1 !pb-0">
								{errors.name.message}
							</p>
						)}
					</div>
					<div>
						<Input
							type="text"
							placeholder="Company"
							{...register("company")}
							className="border-none bg-background py-7 text-base rounded-xl px-4 shadow-none"
						/>
					</div>
					<div>
						<Input
							type="email"
							placeholder="Email"
							{...register("email", {
								required: "Email is required",
								pattern: {
									value: /^\S+@\S+$/i,
									message: "Invalid email address",
								},
							})}
							className="border-none bg-background py-7 text-base rounded-xl px-4 shadow-none"
						/>
						{errors.email && (
							<p className="text-red-500 !text-sm -mt-1 !pb-0">
								{errors.email.message}
							</p>
						)}
					</div>

					<div>
						<Input
							type="tel"
							placeholder="Phone number"
							{...register("phoneNumber")}
							className="border-none bg-background py-7 text-base rounded-xl px-4 shadow-none"
						/>
					</div>
					<div className="col-span-2">
						<Textarea
							{...register("message", {
								required: "Message is required",
								minLength: {
									value: 10,
									message:
										"Message must be at least 10 characters",
								},
							})}
							className="border-none bg-background pt-3 h-28 text-base rounded-xl px-4 shadow-none resize-none"
							placeholder="Type your message here."
						/>
						{errors.message && (
							<p className="text-red-500 !text-sm -mt-1 !pb-0">
								{errors.message.message}
							</p>
						)}
					</div>
					<div className="pt-2">
						<button className="btn">Send Message</button>
					</div>
				</form>
			</div>
		</div>
	);
}
