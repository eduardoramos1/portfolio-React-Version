import React from "react";
import PropTypes from "prop-types";

export default function Projects(props) {
	return (
		<React.Fragment>
			<h2 className="h2 about">Meus Projetos</h2>
			<div className="grid-projects">
				{" "}
				{props.portfolioProjects.map((p, i) => {
					return (
						<div className="card grid-row-3" key={i}>
							<h3 className="mb-3 deep-dark">{p.project}</h3>
							<div className="dark ">
								<p className="mb-2">Tecnologias utilizadas: {p.tecnologies}</p>
								<p className="mb-2">
									Repositório no Github :
									<a href={p.github} target="tab" className="dark underlined">
										{" "}
										Clique aqui
									</a>
								</p>
								{p.website && (
									<p>
										Website:{" "}
										<a
											href={p.website}
											target="tab"
											className="dark underlined"
										>
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
