import React from 'react';
import {TabType, TabItem} from '../../common/common';
import './tab.css';
export interface TabProps {
    key: string
    item: TabType;
    active: boolean;
    callback: (item: TabItem) => void;
}
const Tab = ({key, item, active, callback}: TabProps) => {
    let className = 'pill-nav';
    if (active === true) {
        className = 'active pill-nav';
    }
    const onClick = () => {
        const itemObj: TabItem = {
            id: item.id,
            value: item.text
        }
        if (callback) {
            callback(itemObj);
        }
    }
    return (
        <div key={key} className={className} onClick={onClick}>{item.text}</div>
    );
}

export default Tab;