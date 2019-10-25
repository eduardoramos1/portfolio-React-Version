import React, { useState } from "react";
import "./App.css";
import { Container } from "@material-ui/core/";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import projects from "./projects";

function App() {
	const [portfolioProjects] = useState(projects);

	return (
		<BrowserRouter>
			<div className="App">
				<Navbar></Navbar>
				<Container fixed>
					<Switch>
						<Route exact path="/" component={About} />
						<Route exact path="/projetos">
							<Projects portfolioProjects={portfolioProjects} />
						</Route>
					</Switch>
				</Container>
			</div>
		</BrowserRouter>
	);
}

export default App;
