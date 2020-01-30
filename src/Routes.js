import App from './App';
import BrowsePageRenderer from './pages/BrowsePage/BrowsePageRenderer';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetailsRenderer from './components/ProductDetails/ProductDetailsRenderer';

export default [
  {
    ...App,
    routes: [
      {
        component: ProductDetailsRenderer,
        path: '/shop/:id',
        exact: true
      },
      {
        component: BrowsePageRenderer,
        path: '/',
        exact: true
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
