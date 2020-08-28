import React from "react";
import s from "./Link.module.sass";
import { NavLink } from "react-router-dom";

const Link = (props) => {
	return (
		<li className={s.item}>
			<NavLink
				exact
				to={props.path}
				className={s.link}
				activeClassName={s.activeLink}
			>
				{props.text}
			</NavLink>
		</li>
	);
};

export default Link;
