import { Link } from "react-router";
import styles from "./ErrorPage.module.css";

function ErrorPage () {
    return (
        <div className = {styles["error-container"]}>
            <p>404 Not Found</p>
            <h2>Oops! Page Not Found</h2>
            <p>The page you are looking for doesn't exist or was removed.</p>
            <Link to = "/">Back to Homepage</Link>
        </div>
    );
}

export { ErrorPage };