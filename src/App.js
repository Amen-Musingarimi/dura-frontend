import { Fragment, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Home from './components/home/Home';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails/ProductDetails';
import Authentication from './components/auth/Authentication';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import ContactButton from './components/contact/ContactButton';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/products" index element={<Products />} />
          <Route path="/products/:id" index element={<ProductDetails />} />
          <Route path="/about" index element={<About />} />
          <Route exact path="/auth" element={<Authentication />} />
        </Routes>
      </main>
      <ContactButton />
    </Fragment>
  );
}

export default App;
