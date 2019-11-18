import React from 'react';
import faker from 'faker';
import Card from './card';
class Profiles extends React.Component {
	render() {
		return (
			<div>
				<nav>static: Every time you REFRESH - a new content</nav>
				<section>
				<Card />
        <Card />
        <Card />
        <Card />
			</section>
			<footer>static footer for now</footer>
			</div>
		);
	}
}

export default Profiles;
