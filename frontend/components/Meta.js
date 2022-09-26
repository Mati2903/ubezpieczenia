import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
	return (
		<Head>
			<meta name="vievport" content="width=device-width, initial-scale=1" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin
			></link>
			<link
				href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
				rel="stylesheet"
			></link>
			<title>{title}</title>
		</Head>
	);
};

Meta.defaultProps = {
	title: "Ubezpieczenia Anna Kłodnicka - Agencja Ubezpieczeniowa w Poniatowej",
	keywords:
		"ubezpieczenia Poniatowa, ubezpieczenie auta poniatowa, ubezpieczenie domu poniatowa, ubezpieczenie mieszkania poniatowa, gdzie ubezpieczyć w poniatowej, ubezpieczenia zdrowotne poniatowa, ubezpieczenia na życie poniatowa, ubezpieczenia nnw poniatowa",
	description:
		"Oferujemy Państwu ubezpieczenia OC, AC, NNW, majątkowe, komunikacyjne, turystyczne, zdrowotne, na życie. Mieścimy się na ul. Brzozowej 2 w Poniatowej. Zadzwoń i zapytaj o wycenę!",
};

export default Meta;
