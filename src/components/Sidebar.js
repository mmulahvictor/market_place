import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar () {
  return (
    <div className="div4">
      <Link to='/' className='link'>Home</Link>
      <Link to='/register' className='link'>Register</Link>
      <Link to='/newlist' className='link'>Add Crop</Link>
    </div>
  );
}

export default Sidebar;