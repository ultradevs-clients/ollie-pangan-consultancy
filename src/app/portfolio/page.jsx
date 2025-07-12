import PortfolioCards from "@/components/common/PortfolioCards";
import PortfolioCharts from "@/components/common/PortfolioCharts";
import Footer from "@/components/portfolio/Footer";
import Header from "@/components/portfolio/Header";

export const metadata = {
	title: "Portfolio | Ollie Pangan",
	description: "Description.",
};
export default function page() {
	return (
		<>
			<div className="container lg:px-0 px-5 pb-6">
				<Header />
				<PortfolioCards />
				<PortfolioCharts />
			</div>
			<Footer />
		</>
	);
}
