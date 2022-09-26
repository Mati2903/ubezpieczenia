const LogoSlider = () => {
	const images = [
		"./assets/MTU.png",
		"./assets/PZU.png",
		"./assets/Aviva.png",
		"./assets/HDI.png",
		"./assets/AXA.png",
		"./assets/Allianz.png",
		"./assets/Compensa.png",
		"./assets/Hestia.png",
		"./assets/Generali.png",
		"./assets/Proama.png",
		"./assets/Warta.png",
	];

	const imgCarousel = images.map((image) => {
		return (
			<div className="slide" key={image}>
				<img src={image} alt="logo ubezpieczyciela" height="100" />
			</div>
		);
	});

	return (
		<section className="carousel">
			Nasi partnerzy
			<div className="slider">
				<div className="slide-track">
					{imgCarousel}
					{imgCarousel}
				</div>
			</div>
		</section>
	);
};

export default LogoSlider;
