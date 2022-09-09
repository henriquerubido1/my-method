import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = (props) => {
	const getStreak = Number(localStorage.getItem('finishedDays')) + 1;
	return (
		<div className="bg-gray-dark text-center">
			<div className="flex justify-between">
				<nav>
					<Link className="m-2 underline" to={props.en}>en</Link>
					<Link className="m-2 hover:underline" to={props.pt}>pt</Link>
				</nav>
				<div className="text-white w-1/12 h-10">
					<h3>Day</h3>
					<p className="text-3xl">{ getStreak }</p>
				</div>
			</div>
			<nav>
				<Link className="m-10 hover:underline" to="/">Phase 1</Link>
				<Link className="m-10 hover:underline" to="/phase2">Phase 2</Link>
				<Link className="m-10 hover:underline" to="/phase3">Phase 3</Link>
				<Link className="m-10 hover:underline" to="/phase4">Phase 4</Link>
				<Link className="m-10 hover:underline" to="/mindset">Mindset</Link>
			</nav>
		</div>
	);
};

Header.propTypes = {
	en: PropTypes.string,
	pt: PropTypes.string
}.isRequired;

export default Header;
