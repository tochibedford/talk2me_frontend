import styles from "./Search.module.scss"
import { useLocation, Link } from "react-router-dom"
export default function Search() {
    const location = useLocation()

    return (
        <section role="search" className={`${styles.container} ${location.pathname === "/" ? styles.focused : ""}`}>
            <form action="" method="get">
                <fieldset>
                    <legend>PUT IN A PUBLIC TWITTER HANDLE</legend>
                    <label htmlFor="search">
                        <span className={styles.atSymbol}>@</span>
                        <input type="search" name="search" id="searchInput" />
                        <button type="submit" title="Chat with this user now">CHAT</button>
                    </label>
                </fieldset>
            </form>
        </section>
    )
}