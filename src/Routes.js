import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import BrowsePageRenderer from './pages/BrowsePage/BrowsePageRenderer';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

export default [
  {
    ...App,
    routes: [
      {
        ...BrowsePageRenderer,
        path: '/',
        exact: true
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...BrowsePageRenderer,
        path: '/shop/cookware/newall'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
