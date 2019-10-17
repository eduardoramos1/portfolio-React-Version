import React from "react";
import "./App.css";
import { Container } from "@material-ui/core/";
import Navbar from "./components/NavBar";
import About from "./components/About";

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<Container fixed>
				<About></About>
			</Container>
		</div>
	);
}

export default App;
