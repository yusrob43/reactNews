var React = require('react');

var Jumbotron = React.createClass({

	render: function(){

		return(
			<div className="jumbotron">
				<h2 className="text-center"><strong>React - New York Times Article Scraper</strong></h2>
				<h3 className="text-center">Search for your favorite ariticles.</h3>
			</div>
		)
	}
});

module.exports = Jumbotron;