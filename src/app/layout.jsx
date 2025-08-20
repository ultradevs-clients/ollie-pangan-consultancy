import { DM_Sans } from "next/font/google";
import "../assets/css/globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { BlogProvider } from "./context/BlogContext";

const dm_sans = DM_Sans({
	subsets: ["latin"],
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`max-w-[1920px] mx-auto ${dm_sans.className}`}>
				<BlogProvider>
					<Navbar />
					<div className="h-[80px] bg-secondary" />
					{children}
					<Footer />
				</BlogProvider>
			</body>
		</html>
	);
}
