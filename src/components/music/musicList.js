import React, { useContext, useEffect, useState } from "react"
import { MusicCard } from "./musicCard"
import { MusicContext } from "./musicProvider"
import { ReviewContext } from "../review/reviewDataProvider"
import "./music.css"

export const MusicList = () => {
    const { music, getMusic } = useContext(MusicContext)
    const [filteredMusic, setFiltered] = useState([])
    const {getReviewsForMusic, review} = useContext(ReviewContext)

    

    

    useEffect(() => {
        getMusic()
        .then(getReviewsForMusic)
    }, [])

    useEffect(() => {
        const sortedMusic = music.sort((a, b) => b.time - a.time)
        setFiltered(sortedMusic)
    }, [music])

    return (
        <>
            <div className="musicList">
                {filteredMusic.map((music) => {
                    return (
                        <MusicCard
                            key={music.id}
                            music={music}
                        />)
                })}
            </div>
        </>
    )
}