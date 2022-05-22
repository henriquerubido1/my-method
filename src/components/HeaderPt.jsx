import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeaderPt = (props) => {
	return (
		<div className="bg-gray-dark text-center">
			<nav className="flex justify-end">
				<Link className="m-2 hover:underline" to={ props.en }>en</Link>
				<Link className="m-2 underline" to={ props.pt }>pt</Link>
			</nav>
			<nav>
				<Link className="m-10 hover:underline" to="/pt/phase1">Fase 1</Link>
				<Link className="m-10 hover:underline" to="/pt/phase2">Fase 2</Link>
				<Link className="m-10 hover:underline" to="/pt/phase3">Fase 3</Link>
				<Link className="m-10 hover:underline" to="/pt/phase4">Fase 4</Link>
				<Link className="m-10 hover:underline" to="/pt/mindset">Mindset</Link>
			</nav>
		</div>
	);
};

HeaderPt.propTypes = {
	en: PropTypes.string,
	pt: PropTypes.string
}.isRequired;

export default HeaderPt;
