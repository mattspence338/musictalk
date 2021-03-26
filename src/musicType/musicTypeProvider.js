import React, { useState, createContext } from "react"

export const TypeContext = createContext()

export const TypeProvider = (props) => {
    const [type, setType] = useState([])

    const getMusicByType = () => {
        return fetch (`http://localhost:8088/types`)
        .then(res => res.json())
        .then(setType)
    }
    return (
        <TypeContext.Provider value={{
            type, getMusicByType
        }}>
            {props.children}
        </TypeContext.Provider>
    )
}