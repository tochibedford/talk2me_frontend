import styles from "./Search.module.scss"
import { useLocation } from "react-router-dom"
export default function Search() {
    const location = useLocation()

    return (
        <div className={`${styles.container} ${location.pathname === "/" && styles.focus}`}>

        </div>
    )
}