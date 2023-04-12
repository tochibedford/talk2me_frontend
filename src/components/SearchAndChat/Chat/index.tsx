import styles from "./Chat.module.scss"
import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"

export default function Chat() {
    const { twitterId } = useParams()
    return (
        <div className={`${styles.container} ${twitterId ? styles.focused : ""}`}>
            <Link to="/">
                Chat
            </Link>
        </div>
    )
}