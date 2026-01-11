import githubLogo from "../../assets/images/github.svg";
import instagramLogo from "../../assets/images/instagram.svg";
import whatsappLogo from "../../assets/images/whatsapp.svg";
import footerModel from "../../assets/models/man-1.jpg";
import styles from "./Footer.module.css";

function Footer () {
    return (
        <footer>
            <section className = {styles["footer-main-content"]}>
                <div className = {styles["footer-logo"]}>
                    <h4 className = {styles["footer-heading"]}>ShopCart</h4>
                    <img src = {footerModel} alt = "" width = {250} height = {250} />
                </div>

                <nav className = {styles["about-us"]}>
                    <h4>Links</h4>
                    <ul>
                        <li><a href = "/shop">Shop</a></li>
                        <li><a href = "/our-story">Our Story</a></li>
                        <li><a href = "/inside-shopcart">Inside ShopCart</a></li>
                    </ul>
                </nav>

                <div className = {styles["contact-details"]}>
                    <div className = {styles["social-media"]}>
                        <h4>Follow Us</h4>
                        <ul>
                            <li>
                                <a href = "https://www.instagram.com/">
                                    <img src = {instagramLogo} alt = "Contact us on Instagram" width = {32} height = {32} />
                                </a>
                            </li>

                            <li>
                                <a href = "https://www.whatsapp.com/">
                                    <img src = {whatsappLogo} alt = "Contact us on WhatsApp" width = {32} height = {32} />
                                </a>
                            </li>

                            <li>
                                <a href = "https://github.com/gldsct">
                                    <img src = {githubLogo} alt = "Contact us on Github" width = {32} height = {32} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className = {styles["email-address"]}>
                        <h4>Email</h4>
                        <a href = "mailto:contact@example.com">contact@example.com</a>
                    </div>
                </div>
            </section>
            <p>&copy; gldsct (2025 - {new Date().getFullYear()}). All rights reserved.</p>
        </footer>
    );
}

export { Footer };