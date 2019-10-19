import React from "react";
import { Grid } from "@material-ui/core/";

function About() {
	return (
		<div>
			<h2 className="h2 about">Sobre mim</h2>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<div className="content">
						<p>
							Olá meu nome é Luis Eduardo Ramos, sou técnico de informática
							certificado pelo Centro Paula Souza, estudante de Tecnologia em
							Análise e Desenvolvimento de Sistemas e autodidata nas horas
							vagas. Programação para mim não é só trabalho, é também, um hobby.{" "}
						</p>
						<p>
							Procuro sempre me manter estudando sobre a área de tecnologia e se
							quiser saber um pouco mais sobre meu trabalho, entre na aba
							"projetos" ou entre em uma das minhas redes sociais nos links
							abaixo:
						</p>
					</div>
				</Grid>
				<Grid item xs={12}>
					<div className="bg-light button">
						<span class="icon">
							<a href="https://github.com/eduardoramos1" target="tab">
								<i class="fab fa-github"></i> Github
							</a>
						</span>
					</div>
				</Grid>
				<Grid item xs={12}>
					<div className="bg-light button mb-3">
						<span class="icon">
							<a
								href="https://www.linkedin.com/in/eduardoramosxavier"
								target="tab"
							>
								<i class="fab fa-linkedin"></i> Linkedin
							</a>
						</span>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default About;
