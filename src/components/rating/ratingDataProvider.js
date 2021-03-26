import React, { useState, createContext } from "react"

export const RatingContext = createContext()

export const RatingProvider = (props) => {
    const [rating, setRating] = useState([])

    const getMusicRating = () => {
        return fetch("http://localhost:8088/ratings")
        .then(res => res.json())
        .then(setRating)
    }
    return(
        <RatingContext.Provider value={{
            rating, getMusicRating
        }}>
            {props.children}
        </RatingContext.Provider>
    )
}