import React, { Component } from 'react';
import 'bulma/bulma';
import './App.scss';

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
						<div class="field">
							<div class="control">
								<input class="input" type="text" placeholder="Masukkan judul produk..." />
							</div>
						</div>
						<div class="buttons">
							<a class="button is-link">Search</a>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default App;
