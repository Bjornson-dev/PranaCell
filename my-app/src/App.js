import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Immunotherapy from "./components/Immunotherapy/Immunotherapy";
import Effects from "./components/Effects/Effects";
import Treatment from "./components/Treatment/Treatment";
import Faq from "./components/Faq/Faq";
import Rehabelitation from "./components/Rehabelitation/Rehabelitation";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />

				<Route exact path="/" render={() => <MainPage />} />
				<Route path="/immunotherapy" render={() => <Immunotherapy />} />
				<Route path="/effects" render={() => <Effects />} />
				<Route path="/treatment" render={() => <Treatment />} />
				<Route path="/faq" render={() => <Faq />} />
				<Route path="/rehabelitation" render={() => <Rehabelitation />} />
			</div>
		</BrowserRouter>
	);
}

export default App;
