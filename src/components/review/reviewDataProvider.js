import React, { useState, createContext } from "react"

export const ReviewContext = createContext()

export const ReviewProvider = (props) => {
    const [review, setReview] = useState([])

    const getReviewsForMusic = () => {
        return fetch(`http://localhost:8088/reviews?&_expand=music&_expand=rating`)
            .then(res => res.json())
            .then(setReview)
    }

    const addReview = (reviewObject) => {
        return fetch("http://localhost:8088/reviews?_expand=music", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewObject)
        })
        .then(getReviewsForMusic)
    
    }

    return (
        <ReviewContext.Provider value={{
            review, getReviewsForMusic, addReview
        }}>
            {props.children}
        </ReviewContext.Provider>
    )
}