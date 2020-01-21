import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/header/HeaderRenderer';
import Footer from './components/Footer/Footer'
import { getProducts } from './actions';

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
      <Footer />
    </div>
  );
};

export default {
  component: App
};

