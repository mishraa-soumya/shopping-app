import React from 'react';
import {TabType, TabItem} from '../common';
import Tab from '../Tabs/Tab';

export interface NavbarProps {
    tabs: TabType[];
    activeTab: TabItem;
    onTabClick: (item: TabItem) => void;
}


class Navbar extends React.Component<NavbarProps> {

    private tabClick = (item: TabItem) => {
        if (this.props.onTabClick) {
            this.props.onTabClick (item);
        }
    }

    private getHtml = () => {
        let tabHtml: JSX.Element[];
        if (this.props.tabs && this.props.tabs.length > 0) {
            const tabs = this.props.tabs;
            tabHtml = tabs.map((tab, index) => {
                const key = `${tab.text.toLowerCase()}-${index}`;
                const activeTab = (this.props.activeTab.id === tab.id) ? true : false;
                return (
                    <Tab
                        key={key}
                        item={tab}
                        active={activeTab}
                        callback={this.tabClick}
                    />
                )
            });
            return (
                <div className="pill-nav">
                    { tabHtml && tabHtml.length && tabHtml}
                </div>
            )
        }
        return null;
    }
    
    render () {
        return this.getHtml();
    }
}

export default Navbar;
