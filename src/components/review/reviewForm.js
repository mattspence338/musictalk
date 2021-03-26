import React, { useContext, useEffect, useState } from "react"
import { ReviewContext } from "./reviewDataProvider"
import { RatingContext } from "../rating/ratingDataProvider"
import { useHistory } from "react-router-dom"
import "./review.css"
import Modal from 'react-bootstrap/Modal'

export const ReviewForm = ({ show, handleClose, musicId, thisMusicName, thisArtistName }) => {
    const { addReview } = useContext(ReviewContext)
    const { rating, getMusicRating } = useContext(RatingContext)
    let history = useHistory()
   
    const [thisReview, setThisReview] = useState({
        userName: "",
        pieceReview: "",
        ratingId: 0
    })

    const handleControlledInputChange = (event) => {
        const newReview = { ...thisReview }
        newReview[event.target.name] = event.target.value
        setThisReview(newReview)
    }

    const handleSaveReview = () => {
        console.log(musicId)
        if (thisReview.userName === "" || thisReview.pieceReview === "" || thisReview.rating === 0) {
            window.alert("Please enter all review information")
        } else {
            addReview({
                userName: thisReview.userName,
                pieceReview: thisReview.pieceReview,
                ratingId: parseInt(thisReview.ratingId),
                musicId: musicId,
                time: parseInt(Date.now())
            })
            .then(() => setThisReview({
                userName: "",
                pieceReview: "",
                ratingId: 0
            })).then(handleClose)
        }
        history.push("/music")
        window.alert("Thank you for your review!")
            
    }

    useEffect(() => {
        getMusicRating()
    }, [])

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            className="reviewForm">
            <Modal.Header closeButton>
                <Modal.Title>New Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="reviewUserName">Reviewing: "{thisMusicName}" by {thisArtistName}</label>
                        <input type="text" id="reviewUserName" name="userName" value={thisReview.userName} required autoFocus className="form-control"
                            placeholder="Your Name..."
                            onChange={handleControlledInputChange}/>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="reviewPieceReview">Review</label>
                        <input type="text" id="reviewPieceReview" name="pieceReview" value={thisReview.pieceReview} required autoFocus className="form-control"
                            placeholder="Type Here.."
                            onChange={handleControlledInputChange}/>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="review__ratingId">Rating</label>
                        <select value={thisReview.ratingId} name="ratingId" id="reviewRating" className="form-control" onChange={handleControlledInputChange}>
                            <option value="0">Select a rating</option>
                            {rating.map(r => (
                                <option key={r.id} value={r.id}>
                                    {r.rate}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <button className="btn btn-primary"
                    onClick={event => {
                        event.preventDefault()
                        handleSaveReview()
                        
                    }}>
                    {<>Save Review</>}</button>
            </Modal.Body>
        </Modal>
    )
}



