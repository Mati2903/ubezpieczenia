import Meta from "../components/Meta";

const OCAC = () => {
	return (
		<section className="ocac">
			<Meta title="Ubezpieczenia | OC i AC" />
			<div className="ocac__header">
				<h2 className="ocac__header-title">Ubezpieczenia komunikacyjne</h2>
				<img
					className="ocac__header-image"
					src="./assets/car2.jpg"
					alt="widok auta z wewnątrz, przez przednią szybę widać drogę"
				/>
			</div>
			<div className="ocac__description">
				<img
					className="ocac__desc-image"
					src="./assets/car-bubble.png"
					alt="ikona auta w bańce trzymanej w dłoni"
				/>
				<div className="ocac__desc-info">
					<h3>Ubezpieczenie twojego auta</h3>
					<p>paragraf 1</p>
					<p>paragraf 2</p>
				</div>
			</div>
		</section>
	);
};

export default OCAC;
