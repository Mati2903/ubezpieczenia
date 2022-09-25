import Meta from "../components/Meta";

const Properties = () => {
	return (
		<section className="properties">
			<Meta title="Nieruchomości" />
			<div className="properties__header">
				<h1 className="properties__header-title">Sekcja Nieruchomości</h1>
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
