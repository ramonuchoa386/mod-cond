import React from 'react';
import {
  Link
} from "react-router-dom";

function Nav() {
	return(
		<nav>
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/my-notes">My Notes</Link>
			<Link to="/add-note">Add Note</Link>
		</nav>
	);
}

export default Nav;
