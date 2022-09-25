import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="footer">
			<div className="footer__sitemap">
				Mapa strony :
				<ul>
					<li>
						<a href="/oc-ac">Ubezpieczenie pojazdu</a>
					</li>
					<li>
						<a href="/nieruchomosci">Ubezpieczenie nieruchomości</a>
					</li>
					<li>
						<a href="/zycie-i-zdrowie">Ubezpieczenie na życie i zdrowie</a>
					</li>
				</ul>
			</div>
			<div className="footer__localization">
				Adres :<span>ul. Brzozowa 2</span>
				<span>24-320 Poniatowa</span>
				<a
					target="_blank"
					href="https://www.google.com/maps/place/Ubezpieczenia+Anna+K%C5%82odnicka/@51.189387,22.066877,17z/data=!3m1!4b1!4m6!3m5!1s0x47228fba13faa2b9:0x973f335825a23f15!8m2!3d51.189387!4d22.066877!16s%2Fg%2F11ns55623h"
				>
					<FaMapMarkerAlt
						style={{ fontSize: "1.7rem", marginRight: "5px", color: "#EA4335" }}
					/>
					Znajdź nas na mapie
				</a>
			</div>
			<div className="footer__copyright">Copyright © {year} Nazwa firmy</div>
		</footer>
	);
};

export default Footer;
