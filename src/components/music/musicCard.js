import React, { useEffect, useState, useContext } from "react"
import "./music.css"
import { Button } from "react-bootstrap";
import { ReviewForm } from '../review/reviewForm'
import { ReviewList } from "../review/reviewList";

export function MusicCard({ music }) {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [thisPieceReviews, setThisPieceReviews] = useState(false)
    const handlePieceShow = () => setThisPieceReviews(true)
    const handlePieceClose = () => setThisPieceReviews(false)

    return (
        <section className="music">
            <a href={music.url} className="music__title">{music.title}</a>
            <p className="music__artist">Artist: {music.artistName}</p>
            <p className="music__genre">Genre: {music.genre.name}</p>
            <p className="music__type">Category: {music.type.name}</p>
            <p className="music__user">{music.user}</p>
            <p>{new Date(music.time).toLocaleTimeString('en-US')} | {new Date(music.time).toLocaleDateString('en-US')}</p>
            <Button variant="primary" onClick={handleShow}>
                Leave Review
            </Button>
            <ReviewForm
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
            musicId={music.id}
            thisMusicName={music.title}
            thisArtistName={music.artistName}
            />
            <Button variant="secondary" onClick={handlePieceShow}>Reviews</Button>
            <ReviewList 
            thisPieceReviews={thisPieceReviews}
            handlePieceShow={handlePieceShow}
            handlePieceClose={handlePieceClose}
            reviewing={music.title}
            musicId={music.id}
            />
        </section>
    )
}