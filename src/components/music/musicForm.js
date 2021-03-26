import React, { useContext, useEffect, useState } from "react"
import { MusicContext } from "./musicProvider"
import "./music.css"
import { TypeContext } from "../../musicType/musicTypeProvider"
import { GenreContext } from "../../genre/genreProvider"

export const MusicForm = () => {
    const { addMusic, getMusic } = useContext(MusicContext)
    const { type, getMusicByType } = useContext(TypeContext)
    const { genre, getMusicByGenre } = useContext(GenreContext)

    const [piece, setPiece] = useState({
        title: "",
        artistName: "",
        genreId: 0,
        typeId: 0,
        url: "",
        user: ""
    })

    const handleControlledInputChange = (event) => {
        const newPiece = { ...piece }
        newPiece[event.target.name] = event.target.value
        setPiece(newPiece)
    }

    const handleSaveMusic = () => {
        if (piece.title === "" || piece.artistName === "" || piece.url === "" || piece.genre === 0 || piece.type === 0 || piece.user === "") {
            window.alert("Please enter all music info")
        } else {
            addMusic({
                title: piece.title,
                artistName: piece.artistName,
                genreId: parseInt(piece.genreId),
                typeId: parseInt(piece.typeId),
                url: piece.url,
                time: parseInt(Date.now()),
                user: piece.user
            })
            .then(() => setPiece({
                title: "",
                artistName: "",
                genreId: 0,
                typeId: 0,
                url: "",
                user: ""
            })).then(() => {getMusic()})
        }
    }

    useEffect(() => {
        getMusicByGenre().then(getMusicByType)
    }, [])

    return (
        <form className="musicForm">
            <h2 className="musicForm__title">New Music</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="musicTitle">Musicical Work</label>
                    <input type="text" id="musicTitle" name="title" value={piece.title} required autoFocus className="form-control"
                        placeholder="Enter here..."
                        onChange={handleControlledInputChange}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="music__artistName">Artist Name</label>
                    <input type="text" id="artistName" name="artistName" value={piece.artistName} required autoFocus className="form-control"
                        placeholder="Enter here..."
                        onChange={handleControlledInputChange}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="music__genreId">Genre</label>
                    <select value={piece.genreId} name="genreId" id="musicGenre" className="form-control" onChange={handleControlledInputChange}>
                        <option value="0">Select a genre</option>
                        {genre.map(g => (
                            <option key={g.id} value={g.id}>
                                {g.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="music__typeId">Music Type</label>
                    <select value={piece.typeId} name="typeId" id="musicType" className="form-control" onChange={handleControlledInputChange}>
                        <option value="0">Select a category</option>
                        {type.map(t => (
                            <option key={t.id} value={t.id}>
                                {t.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="musicUrl">Url</label>
                    <input type="text" id="musicUrl" name="url" value={piece.url} required autoFocus className="form-control"
                        placeholder="Enter here..."
                        onChange={handleControlledInputChange}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="musicUser">User</label>
                    <input type="text" id="musicUser" name="user" value={piece.user} required autoFocus className="form-control"
                        placeholder="Your name"
                        onChange={handleControlledInputChange}/>
                </div>
            </fieldset>
            <button className="btn btn-primary"
            onClick={event => {
                event.preventDefault()
                handleSaveMusic()
                getMusic()
            }}>
                {<>Post Music</>}</button>
        </form>
    )
}