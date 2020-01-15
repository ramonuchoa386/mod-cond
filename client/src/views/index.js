import React from 'react';
import Home from './Home';
import About from './About';
import Notes from './Notes';
import AddNote from './AddNote';

import {
	Switch,
	Route
} from "react-router-dom";

function Views() {
	return (
		<section>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/my-notes">
					<Notes />
				</Route>
				<Route path="/add-note">
					<AddNote />
				</Route>
			</Switch>
		</section>
	);
}

export default Views;

