import React from 'react';
import Header from './comp/Header';
import Views from './views';
import Footer from './comp/Footer';
import './App.sass';

import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Views />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
