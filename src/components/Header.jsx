import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="active item">
        Streams
      </Link>
      <Link to="/streams/new" className="item">
        Create
      </Link>
      <Link to="/streams/edit" className="item">
        Edit
      </Link>
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
}

export default Header;
