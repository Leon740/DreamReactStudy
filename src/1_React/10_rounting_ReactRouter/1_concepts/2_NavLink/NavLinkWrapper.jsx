import React from 'react';
import { NavLink } from 'react-router-dom';

function NavLinkWrapper(props) {
  const { to = '', className = '', children } = props;

  return (
    <NavLink to={to}>
      {({ isActive, isPending }) => (
        <span
          className={`mx-2 block ${className} ${
            isActive ? 'text-rose-600' : ''
          }`}
        >
          {children} {isActive ? 'isActive' : ''}
          {isPending ? 'isPending' : ''}
        </span>
      )}
    </NavLink>
  );
}
export default NavLinkWrapper;
