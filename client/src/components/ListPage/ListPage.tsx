import * as React from 'react';
import {ListObject, TabItem} from '../../common/common';
import EmptyPage from '../EmptyPage/EmptyPage';
import Button from '../Button/Button';
import './list.css';

export interface ListPageProps {
    listData: ListObject[];
    currentTab: TabItem | null;
    onCartBtnClick: () => void;
}

export interface ItemImageProps {
    imgUrl: string;
}

export interface ItemBoxProps {
    key: string;
    item: ListObject;
    handleAddToCart: () => void;
    tabId: number | string;
}

class ListPage extends React.Component<ListPageProps> {
    private getListHtml = (): JSX.Element => {
        let content;
        if (this.props.listData && this.props.listData.length > 0) {
            const listData =
            this.props.listData.map((item, index) => {
                const key = `itembox-${index}`;
                const tabId = (this.props.currentTab && this.props.currentTab.id) ? this.props.currentTab.id : 1;
                return (
                    <ItemBox
                        key={key}
                        tabId={tabId}
                        item={item}
                        handleAddToCart={this.props.onCartBtnClick}
                    />
                );
            });
            content = <div className="listCont">
                        {listData}
                    </div>
        }
        else
        {
            const message = "LIST NOT FOUND";
            content = <EmptyPage
                        message={message}
                    />
        }
        return content;
    }

    render () {
        const listHtml = this.getListHtml();
        return (
            <React.Fragment>
                {listHtml}
            </React.Fragment>
        );
    }
}

const ItemBox = (props: ItemBoxProps) => {
    const imageUrl = props.item.imageUrl;
    const btnText = "Add To Cart";
    const detailHref = `/detail/${props.tabId}/${props.item.id}`;
    return (
        <div key={props.item.key} className="itemBox">
            <ItemImage
                imgUrl={imageUrl}
            />
            <div className="itemDescription">
                <div className="itemTitle"><a href={detailHref}>{props.item.name}</a></div>
                <div className="itemDesc">{props.item.shortDescription}</div>
                <div className="itemAction">
                    <div className="itemPrice">{props.item.price}</div>
                    <div className="addToCartBtn">
                        <Button
                            text={btnText}
                            onClick={props.handleAddToCart}
                            cssClasses="cartbtn"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

const ItemImage = (props: ItemImageProps) => {
    return (
        <div className="itemImage">
            <img
                src={props.imgUrl}
            />
        </div>
    );
}

export default ListPage;