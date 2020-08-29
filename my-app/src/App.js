import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import g from "./components/Global.module.sass";

function App(props) {
	return (
		<div>
			<Header text={props.text} />
			<main className={g.main}>
				<div className={g.container + " " + "container"}>
					<Route
						path="/home"
						render={() => <HomePage text={props.text.home} />}
					></Route>
					<Route path="/immunotherapy"></Route>
					<Route path="/effects"></Route>
					<Route path="/treatment"></Route>
					<Route path="/faq"></Route>
					<Route path="/rehabelitation"></Route>
				</div>
			</main>
		</div>
	);
}

export default App;

// {/* <NavLink exact to="/">
//   Русский
// </NavLink>
// <NavLink to="/en">Английский</NavLink>

// <Route exact path="/" render={() => <Header text={props.langs.ru} />} />
// <Route path="/en" render={() => <Header text={props.langs.en} />} /> */}
