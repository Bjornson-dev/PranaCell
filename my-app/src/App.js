import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App(props) {
	return (
		<div>
			<Header text={props.text} />
			<Route path="/home"></Route>
			<Route path="/immunotherapy"></Route>
			<Route path="/effects"></Route>
			<Route path="/treatment"></Route>
			<Route path="/faq"></Route>
			<Route path="/rehabelitation"></Route>
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
