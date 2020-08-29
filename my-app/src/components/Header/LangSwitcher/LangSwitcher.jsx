import React from "react";
import s from "./LangSwitcher.module.sass";
import { Route, NavLink, Redirect } from "react-router-dom";

const LangSwitcher = (props) => {
	return (
		<div className={s.wrapper}>
			<div className={`container ${s.container}`}>
				<span className={s.contact}>
					Address: TURKEY / TOSMUR Mah. 7 Sok. Aqua Aprt
				</span>
				<span className={s.contact}>
					Tel: +90 5304004353 / +90 552 726 7099
				</span>

				<div className={s.dropdown}>
					<button className={s.dropbtn}>
						<Route path="/ru">
							<Redirect from="/en" to="/ru" />
							Русский
						</Route>

						<Route path="/en">
							<Redirect from="/ru" to="/en" />
							English
						</Route>
					</button>

					<div className={s.dropdownContent}>
						<NavLink to="/ru">Русский</NavLink>
						<NavLink to="/en">English</NavLink>
					</div>
				</div>

				<a className={s.mail} href="mailto:bkteam2211@gmail.com">
					bkteam2211@gmail.com
				</a>
			</div>
		</div>
	);
};

export default LangSwitcher;
