import { useState } from "react";
import { Outlet } from "react-router";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { shoppingItems } from "./clothingItems.js";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart (itemId, itemQuantity) {
    if (itemQuantity < 1) return;

    const itemExists = cartItems.some(item => item.id === itemId);
    if (itemExists) {
      return setCartItems(cartItems.map(item => {
        if (item.id !== itemId) return {...item};
        return {...item, quantity: itemQuantity};
      }));
    }

    setCartItems([...cartItems, { id: itemId, quantity: itemQuantity }]);
  }

  function removeFromCart (itemId) {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  }

  function increaseQuantity (itemId) {
    const currentItem = cartItems.find(item => item.id === itemId);
    addToCart(itemId, currentItem.quantity + 1);
  }

  function decreaseQuantity (itemId) {
    const currentItem = cartItems.find(item => item.id === itemId);
    if (currentItem.quantity > 1) addToCart(itemId, currentItem.quantity - 1);
  }

  return (
    <>
      <Header cartItemsLength = {cartItems.length} />
      <main>
        <Outlet context = { {shoppingItems, cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity} } />      
      </main>
      <Footer />
    </>
  );
}

export default App;