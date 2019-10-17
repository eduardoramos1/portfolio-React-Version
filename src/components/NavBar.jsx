import React from "react";
import "./../App.css";

export default function NavBar() {
	return (
		<div>
			<header>
				<nav>
					<h3 className="logo">Eduardo Ramos</h3>
					<ul className="display-flex-around">
						<li>Sobre</li>
						<li>Skills</li>
						<li>Projetos</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}
