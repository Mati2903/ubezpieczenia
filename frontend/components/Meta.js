import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
	return (
		<Head>
			<meta name="vievport" content="width=device-width, initial-scale=1" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<link rel="preconnect" href="https://fonts.googleapis.com"></link>
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
	title: "Tytuł domyślny strony na zakładce",
	keywords: "Słowa kluczowe dla wyszukiwarek",
	description: "Opis widoczny w google pod adresem strony",
};

export default Meta;
