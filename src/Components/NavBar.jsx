import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between bg-gradient-to-r from-blue-500 to-purple-500 p-6">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 0 24 24"
            width="20px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
          </svg>
          <Link to="/" className="text-white">
            Add Note
          </Link>
        </div>
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="22px"
            viewBox="0 0 24 24"
            width="22px"
            fill="#EFEFEF"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </button>
        <div className="hidden md:flex gap-16">
          <Link to="/notes" className="text-white">
            Notes
          </Link>
          <Link to="/edit-note" className="text-white">
            Edit Notes
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col items-start bg-blue-500 p-6 md:hidden">
          <Link to="/notes" className="text-white mb-2">
            Notes
          </Link>
          <Link to="/edit-note" className="text-white">
            Edit Notes
          </Link>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default NavBar;

