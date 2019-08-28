import React, { Component } from 'react';
import 'bulma/bulma';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<section class="section">
					<div class="container">
						<h1 class="title">Katalog</h1>
						<p class="subtitle">
							Daftar produk untuk <strong>Dropship</strong>!
						</p>
					</div>
				</section>
			</div>
		);
	}
}

export default App;
