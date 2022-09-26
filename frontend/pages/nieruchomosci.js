import Meta from "../components/Meta";
import House from "../public/assets/house.jpg";
import Image from "next/image";

const Properties = () => {
	return (
		<section className="properties">
			<Meta title="Ubezpieczenia | Nieruchomości" />
			<div className="properties__header">
				<h2 className="properties__header-title">
					Ubezpieczenia domu i mieszkania
				</h2>
				<img
					className="properties__header-image"
					src="./assets/house.jpg"
					alt="duży dom z drewna w otoczeniu zieleni"
				/>
			</div>
			<div className="properties__description">
				<img
					className="properties__desc-image"
					src="./assets/house-bubble.png"
					alt="ikona domu w bańce trzymanej w dłoni"
				/>
				<div className="properties__desc-info">
					<h3>Ubezpieczenie nieruchomości</h3>
					<p>paragraf 1</p>
					<p>paragraf 2</p>
				</div>
			</div>
		</section>
	);
};

export default Properties;
