import { useState } from "react";
import { useOutletContext } from "react-router";
import styles from "./Shop.module.css";

function Shop () {
    const {shoppingItems, addToCart} = useOutletContext();
    const [cartedItems, setCartedItems] = useState({});

    const shirtItems = shoppingItems.filter(item => item.category === "shirt");
    const coatItems = shoppingItems.filter(item => item.category === "coat");

    function changeQuantity (itemId, itemQuantity) {
        if (itemQuantity >= 0) setCartedItems({ ...cartedItems, [itemId]: Number(itemQuantity) });
    }

    function increaseQuantity (itemId) {
        const currentQuantity = cartedItems[itemId] ?? 1;
        changeQuantity(itemId, currentQuantity + 1);
    }

    function decreaseQuantity (itemId) {
        const currentQuantity = cartedItems[itemId] ?? 1;
        if (currentQuantity > 1) changeQuantity(itemId, currentQuantity - 1);
    }

    return (
        <>
            <section className = {styles["shirt-category"]}>
                <h3 className = {styles["category-heading"]}>The Essence of Elegance</h3>

                <ul className = {styles["clothing-container"]}>
                    {shirtItems.map(item => {
                        return (
                            <li key = {item.id} className = {styles["clothing-item"]}>
                                <div className = {styles["clothing-image"]}>
                                    <img src = {item.image} alt = {item.imageAlt} />
                                </div>

                                <div className = {styles["clothing-info"]}>
                                    <p className = {styles["clothing-name"]}>{item.name}</p>
                                    <p className = {styles["clothing-price"]}>${item.price}</p>
                                </div>

                                <form className = {styles["add-to-cart"]}>
                                    <div className = {styles["quantity-input"]}>
                                        <label htmlFor = "quantity"> Quantity: </label>
                                        <button type = "button" onClick = {() => decreaseQuantity(item.id)}>-</button>
                                        <input type = "number" id = "quantity" name = "quantity" min = "1" value = {cartedItems[item.id] ?? 1} onChange = {(event) => changeQuantity(item.id, event.target.value)}/>
                                        <button type = "button" onClick = {() => increaseQuantity(item.id)}>+</button>
                                    </div>

                                    <button type = "button" className = {styles["add-to-cart-button"]} onClick = {() => addToCart(item.id, cartedItems[item.id] ?? 1)}>+</button>
                                </form>
                            </li>
                        );
                    })}
                </ul>
            </section>

            <section className = {styles["coat-category"]}>
                <h3 className = {styles["category-heading"]}>Daily Classics Let You Make Them Yours Everyday</h3>

                <ul className = {styles["clothing-container"]}>
                    {coatItems.map(item => {
                        return (
                            <li key = {item.id} className = {styles["clothing-item"]}>
                                <div className = {styles["clothing-image"]}>
                                    <img src = {item.image} alt = {item.imageAlt} />
                                </div>

                                <div className = {styles["clothing-info"]}>
                                    <p className = {styles["clothing-name"]}>{item.name}</p>
                                    <p className = {styles["clothing-price"]}>${item.price}</p>
                                </div>

                                <form className = {styles["add-to-cart"]}>
                                    <div className = {styles["quantity-input"]}>
                                        <label htmlFor = "quantity"> Quantity: </label>
                                        <button type = "button" onClick = {() => decreaseQuantity(item.id)}>-</button>
                                        <input type = "number" id = "quantity" name = "quantity" min = "1" value = {cartedItems[item.id] ?? 1} onChange = {(event) => changeQuantity(item.id, event.target.value)}/>
                                        <button type = "button" onClick = {() => increaseQuantity(item.id)}>+</button>
                                    </div>

                                    <button type = "button" className = {styles["add-to-cart-button"]} onClick = {() => addToCart(item.id, cartedItems[item.id] ?? 1)}>+</button>
                                </form>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
}

export { Shop };