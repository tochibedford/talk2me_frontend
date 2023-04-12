import styles from "./Search.module.scss"
import { useLocation, Link } from "react-router-dom"
export default function Search() {
    const location = useLocation()

    return (
        <div className={`${styles.container} ${location.pathname === "/" ? styles.focused : ""}`}>
            <Link to="/tochibedford/chat">Search</Link>
        </div>
    )
}