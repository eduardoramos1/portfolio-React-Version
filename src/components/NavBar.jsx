import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<div>
			<header>
				<nav>
					<h3 className="logo">
						<Link to="/">Eduardo Ramos</Link>
					</h3>
					<ul className="display-flex-around">
						<li>
							<Link to="/">Sobre</Link>
						</li>
						<li>
							<Link to="/projetos">Projetos</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}
