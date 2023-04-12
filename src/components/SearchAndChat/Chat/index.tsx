import styles from "./Chat.module.scss"
import { useParams, Link } from "react-router-dom"

export default function Chat() {
    const { twitterId } = useParams()
    return (
        <div>
            <Link to="/">
                Chat
            </Link>
            {twitterId}
        </div>
    )
}