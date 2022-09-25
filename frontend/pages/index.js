import Meta from "../components/Meta";
import { MdKeyboardArrowDown } from "react-icons/md";
import Services from "../components/Services";
import LogoSlider from "../components/LogoSlider";

export default function Home({ header }) {
	return (
		<div>
			<Meta
				title="Ubezpieczenia - Anna Kłodnicka"
				keywords="Słowa klucze"
				description="Opis strony"
			/>

			<section className="main">
				{/* <h1>{header.data.attributes.title}</h1> */}

				<div className="main__header-section">
					<h1 className="main__header-title">Zadbaj o bezpieczną przyszłość</h1>
					<img
						className="main__header-image"
						src="./assets/beach-1920.jpg"
						alt="dwoje ludzi z dzieckiem stoi na plaży i patrzy na morze"
					/>
					<a href="#more" className="main__header-more">
						<span className="main__see-more">Sprawdź szczegóły</span>
						<MdKeyboardArrowDown />
					</a>
				</div>
				<div id="more">
					<Services />
				</div>
				<LogoSlider />
			</section>
		</div>
	);
}

// export async function getStaticProps() {
// 	const resHeader = await fetch(`${process.env.STRAPIURL}/header`);
// 	const header = await resHeader.json();
// 	return {
// 		props: { header },
// 		revalidate: 60,
// 	};
// }
