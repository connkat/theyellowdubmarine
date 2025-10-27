import Layout from "./Layout";
import construction from "../assets/consbar.gif";

export default function Photos() {
	return (
		<Layout>
			<div className="flex flex-col items-center mx-auto pt-[10%] w-1/2 text-center">
				<img src={construction} className="max-w-full" alt="Under construction" />
				<h3 className="my-4">
					We're working hard to track down evidence of the party bus! Come back soon!
				</h3>
				<img src={construction} className="max-w-full" alt="Under construction" />
			</div>
		</Layout>
	);
}
