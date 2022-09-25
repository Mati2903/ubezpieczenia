import Meta from "../components/Meta";

const Contact = () => {
	return (
		<section className="contact">
			<Meta title="Ubezpieczenia | Kontakt" />
			<div className="contact__header">
				<h1 className="contact__header-title">Sekcja kontakt</h1>
				<img
					className="contact__header-image"
					src="./assets/contact1.jpg"
					alt="kobieta patrzy na smartfon, obok na biurku stoi laptop"
				/>
			</div>
			<div className="contact__description">
				<img
					className="contact__desc-image"
					src="./assets/contact-icon1.png"
					alt="ikony przedstawiające dostępne formy kontaktu"
				/>
				<div className="contact__desc-info">
					<h3>Dane kontaktowe</h3>
					<h4>Anna Kłodnicka</h4>
					<a className="contact__phone" href="tel:+48669045574">
						Telefon: <strong>+48&nbsp;669&nbsp;045&nbsp;574</strong>
					</a>
					<br />
					<a className="contact__email" href="mailto:ubezpieczenia20@op.pl">
						Email: <strong>ubezpieczenia20@op.pl</strong>
					</a>
					<p className="contact__adress">
						Adres: ul. Brzozowa 2 <br /> 24-320 Poniatowa
					</p>
				</div>
			</div>
		</section>
	);
};

export default Contact;
