import React, { Component } from "react";

// STATELESS FUNCTIONAL COMPONENTS;

const NavBar = ({ totalCounters }) => {
	return (
		<nav className='navbar navbar-light bg-light'>
			<a href='#' className='navbar-brand'>
				Navbar
				<span className='badge badge-pill badge-secondary m-2'>
					{totalCounters}
				</span>
			</a>
		</nav>
	);
};

export default NavBar;
