import React, { useState, createContext } from "react"

export const GenreContext = createContext()

export const GenreProvider = (props) => {
    const [genre, setGenre] = useState([])

    const getMusicByGenre = () => {
        return fetch(`http://localhost:8088/genres`)
        .then(res => res.json())
        .then(setGenre)
    }
    return (
        <GenreContext.Provider value={{
            genre, getMusicByGenre
        }}>
            {props.children}
        </GenreContext.Provider>
    )
}