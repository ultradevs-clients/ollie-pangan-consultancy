"use client";

import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { fetchBlogs } from "@/lib/api";
import { Skeleton } from "../ui/skeleton";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { useBlogContext } from "@/app/context/BlogContext";
import Lottie from "lottie-react";
import animationData from "@/assets/lotties/not-found.json";

export default function Blogs() {
	const { blogs, setBlogs } = useBlogContext();

	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [pagination, setPagination] = useState({ page: 1, pageCount: 1 });

	useEffect(() => {
		const loadBlogs = async () => {
			setIsLoading(true);
			const { blogs, pagination } = await fetchBlogs(page, 9);
			setBlogs(blogs);
			setPagination(pagination);
			setIsLoading(false);
		};

		loadBlogs();
	}, [page]);

	const generatePagination = (current, total) => {
		const pages = [];

		if (total <= 7) {
			for (let i = 1; i <= total; i++) {
				pages.push(i);
			}
		} else {
			pages.push(1, 2);

			if (current > 4) pages.push("...");

			for (let i = current - 1; i <= current + 1; i++) {
				if (i > 2 && i < total - 1) {
					pages.push(i);
				}
			}

			if (current < total - 3) pages.push("...");

			pages.push(total - 1, total);
		}

		return [...new Set(pages)];
	};

	return (
		<div className="container text-center lg:px-0 px-5 pb-20 lg:pb-36">
			<h2>Blog</h2>
			<p className="text-low !pt-5">
				Because I don’t do thought leadership. I do real leadership.
			</p>
			<p className="text-low mx-auto">
				Hot takes. Hard truths. Lessons earned, not borrowed. <br /> I
				don’t write to fill a page — I write to say what everyone else
				won’t.
			</p>

			<section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
				{isLoading ? (
					[...Array(9)].map((_, index) => (
						<div
							key={index}
							className="p-2 border border-low/20 hover:shadow-md duration-300 rounded-2xl"
						>
							<Skeleton className="h-64 w-full rounded-xl bg-accent/20" />
							<div className="p-3 text-left flex flex-col justify-between h-[calc(100%-256px)]">
								<Skeleton className="h-4 mb-5 w-full rounded-xl bg-accent/20" />
								<Skeleton className="h-4 mb-4 w-full rounded-xl bg-accent/20" />
								<Skeleton className="h-4 w-2/4 rounded-xl bg-accent/20" />
							</div>
						</div>
					))
				) : blogs.length < 1 ? (
					<div className="h-96 lg:col-span-3 md:col-span-2 flex items-center flex-col justify-center">
						<div className="w-64 h-64">
							<Lottie animationData={animationData} loop={true} />
						</div>
						<h4 className="text-xl text-low/80 font-semibold">
							Blog not found
						</h4>
					</div>
				) : (
					blogs.map((item) => (
						<BlogCard
							key={item.id}
							id={item.documentId}
							title={item.title}
							description={item.description}
							date={item.date}
							image={item.image}
						/>
					))
				)}
			</section>

			{/* Pagination Controls */}

			{pagination.pageCount > 1 && (
				<Pagination className="mt-14 justify-center">
					<PaginationContent>
						{/* Previous */}
						{page > 1 && (
							<PaginationItem>
								<PaginationPrevious
									className="hover:!bg-main/20"
									href="#"
									onClick={(e) => {
										e.preventDefault();
										setPage((prev) =>
											Math.max(prev - 1, 1)
										);
									}}
								/>
							</PaginationItem>
						)}

						{/* Page numbers with ellipsis */}
						{generatePagination(page, pagination.pageCount).map(
							(pg, index) => (
								<PaginationItem key={index}>
									{pg === "..." ? (
										<span className="px-3 text-muted-foreground">
											...
										</span>
									) : (
										<PaginationLink
											href="#"
											className={
												page === pg
													? "bg-main text-background hover:bg-main rounded-full"
													: "bg-transparent text-accent hover:!bg-main/20  rounded-full"
											}
											isActive={page === pg}
											onClick={(e) => {
												e.preventDefault();
												setPage(pg);
											}}
										>
											{pg}
										</PaginationLink>
									)}
								</PaginationItem>
							)
						)}

						{/* Next */}
						{page < pagination.pageCount && (
							<PaginationItem>
								<PaginationNext
									href="#"
									className="hover:!bg-main/20"
									onClick={(e) => {
										e.preventDefault();
										setPage((prev) =>
											prev < pagination.pageCount
												? prev + 1
												: prev
										);
									}}
								/>
							</PaginationItem>
						)}
					</PaginationContent>
				</Pagination>
			)}
		</div>
	);
}
