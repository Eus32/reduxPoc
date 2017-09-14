import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Software from './components/software/SoftwarePage';
import About from './components/common/AboutPage';
import BookPage from './components/book/BookPage';
import CartPage from './components/cart/CartPage';
import BookDetailsPage from './components/book/BookDetailsPage';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Software}></IndexRoute>
    <Route path="/about" component={About}></Route>
    <Route path="/books" component={BookPage}></Route>
    <Route path="/books/:id" component={BookDetailsPage}></Route>
    <Route path="/cart" component={CartPage}></Route>
  </Route>
);
