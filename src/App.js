import React from "react";
import "./App.css";
import { Container } from "@material-ui/core/";
import Navbar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar></Navbar>
				<Container fixed>
					<Switch>
						<Route exact path="/" component={About} />
						<Route exact path="/projetos" component={Projects} />
						<Route exact path="/skills">
							<Skills></Skills>
						</Route>
					</Switch>
				</Container>
			</div>
		</BrowserRouter>
	);
}

export default App;
