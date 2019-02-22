import React from 'react';
import { ListObject, ReviewRatingsObject } from '../../common/common';
import { RouteComponentProps } from 'react-router';
import * as API from '../../common/fetchData';
const LazyReviewsAndRatings = React.lazy(() => import('../../components/ReviewAndRatings/reviewandratings'));
import './detail.css';

export interface ProductDetailPageState {
    detailData: ListObject | null;
    reviewData: ReviewRatingsObject[] | null;
}

export interface DetailImageProps {
    imageUrl: string;
}

export interface DescriptionBoxProps {
    item: ListObject;
}

export interface DetailParams {
    tabId: string;
    productId: string;
}
class ProductDetailPageContainer extends React.Component<RouteComponentProps<{}>, ProductDetailPageState> {
    constructor(props: RouteComponentProps<{}>) {
        super(props);
        this.state = {
            detailData: null,
            reviewData: null
        }
    }

    async componentDidMount () {
        const detailData = await this.getDetailData();
        const reviewData = await this.getReviewData();
        this.setState({
            detailData: detailData,
            reviewData: reviewData
        });
    }

    private getDetailData = async () => {
        const params = this.props.match.params as DetailParams;
        const tabId = params.tabId;
        const productId = params.productId;
        const detailAPIUrl = `getDetail/${tabId}/${productId}`;
        const DetailData = await API.fetchData(detailAPIUrl);
        if (DetailData && DetailData.data && DetailData.data.responseData) {
            return DetailData.data.responseData;
        }
        return null;
    }

    private getReviewData = async () => {
        const reviewAPIUrl = `getReviews`;
        const reviewData = await API.fetchData(reviewAPIUrl);
        if (reviewData && reviewData.data && reviewData.data.responseData && reviewData.data.responseData.length) {
            return reviewData.data.responseData;
        }
        return null;
    }

    private getDetailHtml = () => {
        if (this.state.detailData && Object.keys(this.state.detailData).length) {
            const data = this.state.detailData;
            return (
                <React.Fragment>
                    <div className="detailLeftSection">
                        <DetailImage
                            imageUrl={data.imageUrl}
                        />
                    </div>
                    <div className="detailRightSection">
                        <DescriptionBox
                            item={data}
                        />
                        { this.state.reviewData && this.state.reviewData.length &&
                            <LazyReviewsAndRatings
                                data={this.state.reviewData}
                            />
                        }
                    </div>
                </React.Fragment>
            )
        }
        return null;
    }

    render () {
        const detailHtml = this.getDetailHtml();
        return (
            <div className="detailWrapper">
                {detailHtml}
            </div>
        )
    }
}

const DetailImage = (props: DetailImageProps) => (
    <div className="detailLargeImg">
        <img src={props.imageUrl} />
    </div>
)

const DescriptionBox = (props: DescriptionBoxProps) => (
    <div className="descriptionBox">
        <div className="itemTitle">{props.item.name}</div>
        <div className="itemDetail">{props.item.shortDescription}</div>
        <div className="itemPrice">{props.item.price}</div>
    </div>
)

export default ProductDetailPageContainer;