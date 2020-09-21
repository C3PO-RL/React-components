import React from 'react';

const NavBar = ({ Task = [] }) => {
  return (
    <div className='App'>
      <nav className='navbar navbar-dark bg-dark'>
        <a href='' className='text-white'>
          TASKS
          <span className='badge badge-pill badge-light ml-2'>{Task.length}</span>
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
