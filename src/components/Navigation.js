import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="Nav">
        <div>
        <Link to="/">Home</Link>
        </div>
        <div>
        <Link to="/Characters">Characters</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
