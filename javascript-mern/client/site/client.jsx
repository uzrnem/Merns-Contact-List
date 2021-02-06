import React from "react"
import ReactDOM from "react-dom"
import { HashRouter } from "react-router-dom"
import Container from "./lib/Container.jsx"

const app = document.getElementById("app")

ReactDOM.render(
	<div>
		<HashRouter>
			<Container />
		</HashRouter>
	</div>,
	app
);
