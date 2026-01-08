import cartIcon from "../../assets/images/cart-outline.svg";
import accountIcon from "../../assets/images/account-box-outline.svg";
import menuIcon from "../../assets/images/menu.svg";
import styles from "./Header.module.css";

function Header ({ cartItemsLength }) {
    return (
        <header>
            <nav aria-label = "main navigation" className = {styles["navbar"]}>
                <div className = {styles["dropdown-menu"]}>
                    <img src = {menuIcon} alt = "Navigate the website" width = {32} height = {32} />
                    <ul className = {styles["shopping-links"]}>
                        <li>Home</li>
                        <li>Shop Now</li>
                        <li>New Arrivals</li>
                    </ul>
                </div>

                <h1 className = {styles["navbar-header"]}>
                    ShopCart
                </h1>

                <ul className = {styles["account-links"]}>
                    <li className = {styles["cart-link"]}>
                        <p className = {styles["cart-label"]}>CART</p>
                        <img src = {cartIcon} alt = "Access your shopping cart" width = {32} height = {32} />
                        <p>
                            <span className = "sr-only">Total items in cart:</span> 
                            <span className = {styles["cart-quantity"]}>{cartItemsLength}</span>
                        </p>
                    </li>

                    <li>
                        <img src = {accountIcon} alt = "Access your personal account" width = {32} height = {32} />
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export { Header };