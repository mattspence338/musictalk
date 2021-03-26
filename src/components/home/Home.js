import React from "react"
import { useHistory } from "react-router-dom"


export const Home = () => {
    let history = useHistory()

    return(
    <section> 
    <h2>Music Talk</h2>
    <button onClick={() => history.push("/music")}>Let's Talk Music!</button>

    </section>
    )
}