import styles from "./Search.module.scss"
import { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom"

export default function Search() {
    const location = useLocation()
    let navigate = useNavigate()
    const [twitterHandle, setTwitterHandle] = useState("")

    return (
        <section role="search" className={`${styles.container} ${location.pathname === "/" ? styles.focused : ""}`}>
            <form action="" method="get" onSubmit={e => { e.preventDefault(); navigate(`/${twitterHandle}/chat`) }}>
                <fieldset>
                    <legend>PUT IN A PUBLIC TWITTER HANDLE</legend>
                    <label htmlFor="search">
                        <span className={styles.atSymbol}>@</span>
                        <input type="search" name="search" id="searchInput" onChange={(e) => setTwitterHandle(e.target.value)} value={twitterHandle} required />
                        <button type="submit" title="Chat with this user now">CHAT</button>
                    </label>
                </fieldset>
            </form>
        </section>
    )
}