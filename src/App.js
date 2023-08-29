import { Fragment, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Home from './components/home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

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
          <Route path="/shop" index element={<Products />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
