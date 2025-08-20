"use client";
import React, { useState } from "react";
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

	const [result, setResult] = useState("Send Message");

	const onSubmit = async (formData) => {
		setResult("Sending...");
		const form = new FormData();
		for (const key in formData) {
			form.append(key, formData[key]);
		}

		form.append("access_key", "df7fa67d-81a9-4cec-b85c-c3263e55eaad");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: form,
		});

		const data = await response.json();

		if (data.success) {
			setResult("Message sent!");
			reset();
			setTimeout(() => setResult("Send Message"), 5000);
		} else {
			setResult(data.message || "Something went wrong");
			setTimeout(() => setResult("Send Message"), 5000);
		}
	};
	return (
		<div className="container py-12 lg:py-20 flex lg:flex-row flex-col gap-6 lg:gap-0 items-center lg:px-0 px-5">
			<div className="lg:w-2/4">
				<h2>Contact me</h2>
				<p className="text-low lg:w-9/12">
					Got a project, idea, or challenge you'd like to talk
					through? I’m always open to thoughtful conversations and
					meaningful collaborations.
				</p>
				<ul className="text-low pt-3 lg:pt-8 space-y-4">
					<li className="flex items-center gap-2 text-lg">
						<div className="bg-main/10 p-2 rounded-lg">
							<FiMail />
						</div>
						<a href="mailto:hello@olliepangan.com">
							hello@olliepangan.com
						</a>
					</li>
					<li className="flex items-center gap-2 text-lg">
						<div className="bg-main/10 p-2 rounded-lg">
							<FiPhoneCall />
						</div>
						<a href="tel:+639171238553">Support: +639171238553</a>
					</li>
				</ul>
			</div>
			<div className="lg:w-2/4 bg-main/15 w-full py-4 md:py-6 px-5 md:px-7 rounded-2xl lg:rounded-4xl">
				<h4 className="text-2xl font-bold">Let’s get in touch</h4>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="grid grid-cols-2 gap-x-5 gap-y-3 pt-5"
				>
					<div className="col-span-2 md:col-span-1">
						<Input
							type="text"
							placeholder="Name"
							{...register("name", {
								required: "Name is required",
							})}
							className="border-none bg-background py-5 lg:py-7 text-base rounded-xl px-4 shadow-none"
						/>
						{errors.name && (
							<p className="text-red-500 !text-sm -mt-1 !pb-0">
								{errors.name.message}
							</p>
						)}
					</div>
					<div className="col-span-2 md:col-span-1">
						<Input
							type="text"
							placeholder="Company"
							{...register("company")}
							className="border-none bg-background py-5 lg:py-7 text-base rounded-xl px-4 shadow-none"
						/>
					</div>
					<div className="col-span-2 md:col-span-1">
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
							className="border-none bg-background py-5 lg:py-7 text-base rounded-xl px-4 shadow-none"
						/>
						{errors.email && (
							<p className="text-red-500 !text-sm -mt-1 !pb-0">
								{errors.email.message}
							</p>
						)}
					</div>

					<div className="col-span-2 md:col-span-1">
						<Input
							type="tel"
							placeholder="Phone number"
							{...register("phoneNumber")}
							className="border-none bg-background py-5 lg:py-7 text-base rounded-xl px-4 shadow-none"
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
							className="border-none bg-background pt-3 h-20 lg:h-28 text-base rounded-xl px-4 shadow-none resize-none"
							placeholder="Type your message here."
						/>
						{errors.message && (
							<p className="text-red-500 !text-sm -mt-1 !pb-0">
								{errors.message.message}
							</p>
						)}
					</div>
					<div className="lg:pt-2 col-span-2 md:col-span-1 flex items-center gap-4">
						<button className="btn">{result}</button>
					</div>
				</form>
			</div>
		</div>
	);
}
