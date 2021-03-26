
import React from "react"
import { Route } from 'react-router-dom';
import { MusicProvider } from "./components/music/musicProvider"
import { MusicList } from "./components/music/musicList"
import { GenreProvider } from "./genre/genreProvider"
import { TypeProvider } from "./musicType/musicTypeProvider"
import { MusicForm } from "./components/music/musicForm"
import { ReviewProvider } from "./components/review/reviewDataProvider"
import { RatingProvider } from "./components/rating/ratingDataProvider"
import { ReviewForm } from "./components/review/reviewForm"
import { ReviewList } from "./components/review/reviewList"
import { Home } from "./components/home/Home"

export const ApplicationView = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the music list when at http://localhost:3000/music */}
            <MusicProvider>
                <GenreProvider>
                    <TypeProvider>
                        <RatingProvider>
                            <ReviewProvider>
                                <Route exact path="/music">
                                    <MusicForm />
                                    <MusicList />
                                </Route>
                                <Route exact path="/music">
                                    <ReviewForm />
                                </Route>
                                <Route exact path="/music">
                                    <ReviewList />
                                </Route>
                            </ReviewProvider>
                        </RatingProvider>
                    </TypeProvider>
                </GenreProvider>
            </MusicProvider>

        </>
    )
}