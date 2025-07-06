import { DM_Sans } from "next/font/google";
import "../assets/css/globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const dm_sans = DM_Sans({
	subsets: ["latin"],
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`max-w-[1920px] mx-auto ${dm_sans.className}`}>
				<Navbar />
				<div className="h-[80px]" />
				{children}
				<Footer />
			</body>
		</html>
	);
}
