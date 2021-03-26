import "./review.css"

export function ReviewCard({review}){
    return(
        <section className="review">
            <p className="review__userName">User: {review.userName}</p>
            <p className="review__review">Review: {review.pieceReview}</p>
            <p className="review__ratingId">Rating: {review.rating.rate}</p>
            <p className="review__time">{new Date(review.time).toLocaleTimeString('en-US')} | {new Date(review.time).toLocaleDateString('en-US')}</p>
        </section>
    )
}