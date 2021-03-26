import React, { useState, createContext } from "react"

export const MusicContext = createContext()

export const MusicProvider = (props) => {
    const [music, setMusic] = useState([])

    const getMusic = () => {
        return fetch("http://localhost:8088/musics?_expand=genre&_expand=type")
        .then(res => res.json())
        .then(setMusic)
    }

    const addMusic = (musicObject) => {
        return fetch("http://localhost:8088/musics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(musicObject)
        })
    }

    const getMusicById = (id) => {
        return fetch(`http://localhost:8088/musics/${id}?_expand=genre&_expand=type`)
        .then(res => res.json())
    }

    return (
        <MusicContext.Provider value={{
            music, getMusic, addMusic, getMusicById
        }}>
            {props.children}
        </MusicContext.Provider>
    )
}