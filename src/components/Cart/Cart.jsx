import { useState, useEffect } from "react";
import { useOutletContext, Link } from "react-router";
import removeFromCartIcon from "../../assets/images/trash-can-outline.svg";
import heartIcon from "../../assets/images/heart-outline.svg";
import styles from "./Cart.module.css";

function Cart () {
    const {shoppingItems: allItems, cartItems: cartedItems, removeFromCart, increaseQuantity, decreaseQuantity} = useOutletContext();
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        let newSubtotal = cartedItems.reduce((sum, item) => sum + (item.quantity * allItems[item.id - 1].price), 0);
        setSubtotal(newSubtotal.toFixed(2));
    }, [cartedItems]);

    return (
        <>
            <section className = {styles["cart-checkout"]}>
                <div className = {styles["cart-items-container"]}>
                    <h3 className = {styles["cart-header"]}>Cart</h3>
                    <ul className = {styles["cart-items"]}>
                        {cartedItems.map(item => 
                            <li key = {item.id} className = {styles["carted-item"]}>
                                <div className = {styles["carted-item-image"]}>
                                    <img src = {allItems[item.id - 1].image} alt = {allItems[item.id - 1].imageAlt} width = {250} height = {250} />
                                </div>

                                <div className = {styles["carted-item-desc"]}>
                                    <p>{allItems[item.id - 1].name}</p>

                                    <div className = {styles["interactive-buttons-wrapper"]}>
                                        <button type = "button" className = {styles["heart-icon"]}> <img src = {heartIcon} alt = "Add to Favorites" width = {24} height = {24} /> </button>
                                        <button type = "button" className = {styles["remove-from-cart-icon"]} onClick = {() => removeFromCart(item.id)}> <img src = {removeFromCartIcon} alt = "Remove from Cart" width = {24} height = {24} /> </button>
                                    </div>
                                </div>

                                <div className = {styles["carted-item-details"]}>
                                    <p className = {styles["carted-item-price"]}>${allItems[item.id - 1].price}</p>

                                    <div className = {styles["carted-item-quantity"]}>
                                        <button onClick = {() => decreaseQuantity(item.id)}><span className = "sr-only">Decrease Quantity</span>-</button>
                                        <div className = {styles["item-quantity"]}>{item.quantity}</div>
                                        <button onClick = {() => increaseQuantity(item.id)}><span className = "sr-only">Increase Quantity</span>+</button>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>

                <div className = {styles["order-summary"]}>
                    <h3 className = {styles["summary-header"]}>Order Summary</h3>
                    <div className = {styles["order-subtotal"]}>
                        <h5>Subtotal</h5>
                        <p>${subtotal}</p>
                    </div>
                    <div className = {styles["delivery-charge"]}>
                        <h5>Delivery</h5>
                        <p>$2.45</p>
                    </div>
                    <div className = {styles["order-total"]}>
                        <h5>Total</h5>
                        <p>${(Number(subtotal) + 2.45).toFixed(2)}</p>
                    </div>
                    <button className = {styles["order-checkout"]}> <Link to = "/checkout">Checkout</Link> </button>
                </div>
            </section>
        </>
    );
}

export { Cart };