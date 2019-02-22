import * as  React from 'react';
import { ReviewRatingsObject } from '../../common/common';
import './reviews.css';

export interface ReviewsAndRatingsProps {
    data: ReviewRatingsObject[];
}
class ReviewsAndRatings extends React.Component<ReviewsAndRatingsProps> {
    private getHtml = () => {
        if (this.props.data && this.props.data.length > 0) {
            const reviewsData = this.props.data;
            const reviewsHtml = reviewsData.map((item) => {
                const ratings = `${item.ratingStar} * `;
                const ratingClass = (item.ratingStar > 2) ? 'ratingPill ratingGreenPill' : 'ratingPill ratingRedPill';
                const reviewData = item.review;
                const key = `reviews-${item.key}`;
                return (
                    <div key={key} className="reviewItems">
                        <div className={ratingClass}>{ratings}</div>
                        <div className="review">
                            <div className="reviewDesc">{reviewData.description}</div>
                            <div className="reviewDetails">
                                <div className="reviewerName">{reviewData.reviewerName}</div>
                                <div className="reviewDate">{reviewData.date}</div>
                            </div>
                        </div>
                    </div>
                );
            });

            return (
                <div className="reviewsWrapper">
                    <div className="reviewHeading">Ratings & Reviews</div>
                    <div className="reviewData">{reviewsHtml}</div>
                </div>
            )
        }
        return null;
    }

    render () {
        return this.getHtml();
    }
}

export default ReviewsAndRatings;