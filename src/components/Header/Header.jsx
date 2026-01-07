import cartIcon from "../../assets/images/cart-outline.svg";
import accountIcon from "../../assets/images/account-box-outline.svg";
import menuIcon from "../../assets/images/menu.svg";

function Header ({ cartItemsLength }) {
    return (
        <header>
            <nav aria-label = "main navigation">
                <div>
                    <img src = {menuIcon} alt = "Navigate the website" width = {32} height = {32} />
                    <ul>
                        <li>Home</li>
                        <li>Shop Now</li>
                        <li>New Arrivals</li>
                    </ul>
                </div>

                <h1>
                    ShopCart
                </h1>

                <ul>
                    <li>
                        <p>CART</p>
                        <img src = {cartIcon} alt = "Access your shopping cart" width = {32} height = {32} />
                        <p>
                            <span>Total items in cart: </span> 
                            <span>{cartItemsLength}</span>
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