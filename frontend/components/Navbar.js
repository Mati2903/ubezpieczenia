import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
	const router = useRouter();
	const [open, setOpen] = useState(false); //stan hamburgera

	// obsługa zmiany koloru navbara z transparent na dany kolor poprzez dodanie lub usunięcie klasy
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 70) {
				document.querySelector("nav").classList.add("scroll");
			} else {
				document.querySelector("nav").classList.remove("scroll");
			}
		});
	});

	//funkcja do obsługi klika w menu hamburger zmieniająca stan (a przez to klasę) dla urządzeń mobilnych
	const handleMenuClick = () => {
		if (window.innerWidth < 768) {
			!open ? setOpen(true) : setOpen(false);
		}
	};

	//usuwanie klas open (zamykanie menu) po kliknięciu na stronie poza navbarem
	useEffect(() => {
		if (open) {
			document.querySelector("main").addEventListener("click", () => {
				setOpen(false);
			});
		}
	}, [open]);

	return (
		<nav>
			<Link href="/">
				<a className="company-logo">Logo</a>
			</Link>
			<ul onClick={handleMenuClick} className={`navbar ${open ? "open" : ""}`}>
				<li className={router.pathname == "/" ? "active" : ""}>
					<Link href="/">
						<a>Strona główna</a>
					</Link>
				</li>
				<li className={router.pathname == "/oc-ac" ? "active" : ""}>
					<Link href="/oc-ac">
						<a>OC i AC</a>
					</Link>
				</li>
				<li className={router.pathname == "/nieruchomosci" ? "active" : ""}>
					<Link href="/nieruchomosci">
						<a>Nieruchomości</a>
					</Link>
				</li>
				<li className={router.pathname == "/zycie-i-zdrowie" ? "active" : ""}>
					<Link href="/zycie-i-zdrowie">
						<a>Życie i zdrowie</a>
					</Link>
				</li>
				<li className={router.pathname == "/kontakt" ? "active" : ""}>
					<Link href="/kontakt">
						<a>Kontakt</a>
					</Link>
				</li>
			</ul>
			{/* ikona hamburgera */}
			<div
				className={`hamburger ${open ? "open" : ""}`}
				onClick={handleMenuClick}
			>
				<div className="hamburger__icon"></div>
			</div>
		</nav>
	);
};

export default Navbar;
