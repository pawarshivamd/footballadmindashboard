import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MaybeShowNav = ({ children }) => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    if (
      location.pathname === '/' ||
      location.pathname === '/forgot-password' ||
      location.pathname === '/otp' ||
      location.pathname === '*'
    ) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location.pathname]); 

  return <div>{showNavbar && children}</div>;
};

export default MaybeShowNav;
