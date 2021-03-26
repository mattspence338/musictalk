import React, { useContext } from "react"
import { ReviewCard } from "./reviewCard"
import { ReviewContext } from "./reviewDataProvider"
import "./review.css"
import Modal from 'react-bootstrap/Modal'
import { Button } from "react-bootstrap";

export const ReviewList = ({ thisPieceReviews, handlePieceClose, reviewing, musicId }) => {
    const { review } = useContext(ReviewContext)

    return (
        <Modal
            show={thisPieceReviews}
            onHide={handlePieceClose}
            backdrop="static"
            keyboard={false}
            className="reviewList"
        >
            <Modal.Header closeButton>
                <Modal.Title>Reviews for: "{reviewing}"</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {review?.filter(review => review.musicId === musicId).sort((a, b) => b.time - a.time).map((review) => {
                    return (
                        <ReviewCard
                            key={review.id}
                            review={review}
                        />)
                })}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handlePieceClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

