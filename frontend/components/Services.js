import { AiFillCar } from "react-icons/ai";
import { FaHome, FaHeartbeat } from "react-icons/fa";
import Link from "next/link";

const Services = () => {
	return (
		<section className="services">
			<Link href="/oc-ac">
				<div className="services__card">
					<AiFillCar className="services__card-icon" />
					<h3 className="services__card-desc">OC i AC</h3>
				</div>
			</Link>
			<Link href="/nieruchomosci">
				<div className="services__card">
					<FaHome className="services__card-icon" />
					<h3 className="services__card-desc">Nieruchomości</h3>
				</div>
			</Link>
			<Link href="/zycie-i-zdrowie">
				<div className="services__card">
					<FaHeartbeat className="services__card-icon" />
					<h3 className="services__card-desc">Życie i zdrowie</h3>
				</div>
			</Link>
		</section>
	);
};

export default Services;
