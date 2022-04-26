import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-gray-dark text-center">
        <nav>
          <Link className="m-10 hover:underline" to="/">Phase 1</Link>
          <Link className="m-10 hover:underline" to="/phase2">Phase 2</Link>
          <Link className="m-10 hover:underline" to="/phase3">Phase 3</Link>
          <Link className="m-10 hover:underline" to="/phase4">Phase 4</Link>
          <Link className="m-10 hover:underline" to="/mindset">Mindset</Link>
        </nav>
    </div>
  )
}

export default Header;
