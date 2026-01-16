import { useState } from "react";
import { Outlet } from "react-router";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { shoppingItems } from "./clothingItems.js";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Header cartItemsLength = {cartItems.length} />
      <main>
        <Outlet />      
      </main>
      <Footer />
    </>
  );
}

export default App;