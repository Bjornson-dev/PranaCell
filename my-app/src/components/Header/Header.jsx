import React from "react";
import s from "./Header.module.sass";
import Link from "./Link/Link";
import logo from "./../../images/logo.jpg";

const Header = (props) => {
	return (
		<header className={s.header}>
			<div className={s.logoContainer}>
				<img className={s.logo} src={logo} alt="Логотип" />
			</div>

			<nav className={s.nav}>
				<ul className={s.list}>
					<Link path="/" text="Главная" />
					<Link path="/immunotherapy" text="Имуннотерапия" />
					<Link path="/effects" text="Побочные эффекты" />
					<Link path="/treatment" text="Лечение" />
					<Link path="/faq" text="Частые вопросы" />
					<Link path="/rehabelitation" text="Реабелитация" />
				</ul>
			</nav>
		</header>
	);
};

export default Header;
