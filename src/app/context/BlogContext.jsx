"use client"; // 👈 Only needed if you use this in a client component

import { createContext, useContext, useState } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
	const [blogs, setBlogs] = useState([]);

	return (
		<BlogContext.Provider value={{ blogs, setBlogs }}>
			{children}
		</BlogContext.Provider>
	);
};

// Custom hook
export const useBlogContext = () => useContext(BlogContext);
