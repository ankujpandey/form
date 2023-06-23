import React from "react";
import { NavLink } from "react-router-dom";
import { Icons } from "../icons/Icons";

function Header(props) {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<div>
					<a className="navbar-brand h1 ms-3" href="#">
						Form
					</a>
				</div>
				<div className="d-flex justify-content-end">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink className="nav-link" to="/">
									Users List
								</NavLink>
							</li>
							<li className="nav-item me-3">
								<NavLink className="nav-link" to="/form">
									Add User
								</NavLink>
							</li>
							{/* <li className="nav-item">
								<NavLink className="nav-link" to="/individual">
									Individual
								</NavLink>
							</li> */}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Header;
