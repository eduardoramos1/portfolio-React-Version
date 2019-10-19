import React from "react";
import vuePng from "./../imgs/vue.png";
import bootstrapPng from "./../imgs/bootstrap.png";
import css3Png from "./../imgs/css3.png";
import expressPng from "./../imgs/express.png";
import html5Png from "./../imgs/html5.png";
import jQueryPng from "./../imgs/jQuery.png";
import nodePng from "./../imgs/node.png";
import reactPng from "./../imgs/react.png";
import jsPng from "./../imgs/javascript.png";

function Skills() {
	return (
		<React.Fragment>
			<h2 className="h2 about">Minhas skills </h2>
			<div className="skills">
				<div>
					<img src={vuePng} alt="vue"></img>
				</div>
				<div>
					<img src={bootstrapPng} alt="bootstrap"></img>
				</div>
				<div>
					<img src={css3Png} alt="css"></img>
				</div>
				<div>
					<img src={expressPng} alt="express"></img>
				</div>
				<div>
					<img src={html5Png} alt="html"></img>
				</div>
				<div>
					<img src={jQueryPng} alt="jQuery"></img>
				</div>
				<div>
					<img src={nodePng} alt="node"></img>
				</div>
				<div>
					<img src={reactPng} alt="react"></img>
				</div>
				<div>
					<img src={jsPng} alt="react"></img>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Skills;
