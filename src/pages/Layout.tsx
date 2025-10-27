import Footer from "../components/Footer";

type Props = {
	children: React.ReactNode;
};
export default function Layout({ children }: Props) {
	return (
		<div className="Layout">
			{children}
			<Footer />
		</div>
	);
}
