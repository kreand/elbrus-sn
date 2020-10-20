import React from 'react';
import LayoutComponent from './components/Layout/LayoutComponent';

import AuthLayoutComponent from './components/AuthLayoutComponent/AuthLayoutComponent';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <LayoutComponent/>
    );
  }
  return (
    <AuthLayoutComponent/>
  );
};
