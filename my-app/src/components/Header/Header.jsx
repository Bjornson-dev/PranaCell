import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.sass";
import logo from "./../../images/logo.jpg";

const Header = (props) => {
	let text = props.text;
	return (
		<header className={s.header}>
			<div className={`container ${s.container}`}>
				<div className={s.logoWrapper}>
					<img src={logo} alt="Логотип PranaCell" />
				</div>

				<nav>
					<NavLink to="/home">{text.home.link}</NavLink>
					<NavLink to="/immunotherapy">{text.immuno.link}</NavLink>
					<NavLink to="/effects">{text.effects.link}</NavLink>
					<NavLink to="/treatment">{text.treat.link}</NavLink>
					<NavLink to="/faq">{text.faq.link}</NavLink>
					<NavLink to="/rehabelitation">{text.reha.link}</NavLink>
				</nav>
			</div>
		</header>
	);
};

export default Header;
