import React from 'react';
import AuthLayoutComponent from './components/AuthLayoutComponent/AuthLayoutComponent';
import LayoutComponent from './components/Layout/LayoutComponent';

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
