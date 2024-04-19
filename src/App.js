import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
// import Data from './Components/Data/Data';
// import Routes from './Components/Router/Routes';
import Product from "./Components/Product/Product";
// import Model from './Components/Model/Model';
import Cartlist from "./Components/Model/Cartlist";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Form/Login";
import Slider from "./Components/Slider/Slider";
import Table from "./Components/Table/Table";
import About from "./Components/About/About";
import Footer from "./Components/Footer/footer";

function App() {
  const [count, setCount] = useState(0);
  const cnum = () => {
    setCount(count + 1);
  };
  const [cart, setCart] = useState([]);
  const addToCart = (data1) => {
    console.log(cart);
    console.log(data1);
    setCart([...cart, { ...data1, quantity: 1 }]);
  };
  const [showcart, setShowcart] = useState(false);
  const handleshow = (value) => {
    setShowcart(value);
  };
  return (
    <>
      <div className="App">
        <Router>
          <Nav
            setCount={setCount}
            count1={cart.length}
            handleshow={handleshow}
          />
          <Routes>
            <Route
              path="/cart"
              element={
                showcart ? (
                  <Cartlist cart={cart} handleshow={handleshow} />
                ) : (
                  <Product
                    cnum={cnum}
                    addToCart={addToCart}
                    handleshow={handleshow}
                  />
                )
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Slider />
                  <Product cnum={cnum} addToCart={addToCart} />
                </>
              }
            />
            <Route path="/order" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/table"
              element={<Table cart={cart} handleshow={handleshow} />}
            />
          </Routes>
          {/* <div style={{ paddingBottom: "50px" }}>
            <Footer />
          </div> */}
        </Router>
      </div>
    </>
  );
}

export default App;

// <Model count={count}/>
// <Cartlist cart={cart}/>
// <Model/>
