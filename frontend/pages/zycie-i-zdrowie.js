import Meta from "../components/Meta";

const LifeAndHealth = () => {
	return (
		<section className="life">
			<Meta title="Zycie i zdrowie" />
			<div className="life__header">
				<h1 className="life__header-title">Sekcja Ubezpieczeń na życie</h1>
				<img
					className="life__header-image"
					src="./assets/family.jpg"
					alt="rodzina z małymi dziećmi stoi na łące, w tle widać las i zachód słońca"
				/>
			</div>
			<div className="life__description">
				<img
					className="life__desc-image"
					src="./assets/family-bubble.png"
					alt="ikona rodziny w bańce trzymanej w dłoni"
				/>
				<div className="life__desc-info">
					<h3>Ubezpieczenie zdrowotne</h3>
					<p>paragraf 1</p>
					<p>paragraf 2</p>
				</div>
			</div>
		</section>
	);
};

export default LifeAndHealth;
