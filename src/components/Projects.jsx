import React from "react";
import PropTypes from "prop-types";

export default function Projects(props) {
	return (
		<React.Fragment>
			<h2 className="h2 about">Meus Projetos</h2>
			<div className="grid-projects">
				{" "}
				{props.portfolioProjects.map(p => {
					return (
						<div className="card grid-row-3">
							<h3 className="mb-3">{p.project}</h3>
							<div>
								<p className="mb-2">Tecnologias utilizadas: {p.tecnologies}</p>
								<p className="mb-2">
									Veja no Github{" "}
									<a href={p.github} target="tab" className="dark">
										{" "}
										clicando aqui
									</a>
								</p>
								{p.website && (
									<p>
										Website:{" "}
										<a href={p.website} target="tab" className="dark">
											Clique aqui
										</a>
									</p>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</React.Fragment>
	);
}

Projects.propTypes = {
	portfolioProjects: PropTypes.array.isRequired
};
