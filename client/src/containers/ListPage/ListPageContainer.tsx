import React from 'react';
import { RouteComponentProps } from 'react-router';
import * as API from '../../common/fetchData';
import { TabType, TabItem, ListObject, TabID } from '../../common/common';
const Navbar = React.lazy(() => import('../../components/Layout/Navbar'));
const ListPage = React.lazy(() => import('../../components/ListPage/ListPage'));
const styles = require('./ListPage.css') as {[key:string]: string};

export interface ListPageContainerState {
    tabData: TabType[];
    listData: ListObject[];
    currentTab: TabItem | null;
}
class ListPageContainer extends React.Component<RouteComponentProps<{}>, ListPageContainerState> {
    constructor(props: RouteComponentProps<{}>) {
        super(props);
        this.state = {
            tabData: [],
            listData: [],
            currentTab: null
        };
    }

    async componentDidMount () {
        const tabAPIUrl = 'getTabData';
        const tabData = await API.fetchData(tabAPIUrl);
        const currentTab = (tabData.data && tabData.data.responseData && tabData.data.responseData.tabs) ?
                        {id: tabData.data.responseData.tabs[0].id, value: tabData.data.responseData.tabs[0].text}: null;
        if (currentTab && currentTab.id) {
            const listData = await this.getListData(currentTab.id);
            this.setState({
                tabData: tabData.data && tabData.data.responseData && tabData.data.responseData.tabs ? tabData.data.responseData.tabs : [],
                currentTab: currentTab,
                listData: listData && listData.data && listData.data.responseData && listData.data.responseData.items ? listData.data.responseData.items : []
            });
        }
    }

    private getListData = async (tabId: number) => {
        const listAPIUrl = `getListData/${tabId}`;
        const listData = await API.fetchData(listAPIUrl);
        return listData;
    }

    private onTabClick = async (tab: TabItem) => {
        const currentTabId: number = tab.id as number;
        console.log(`currentTabId ${typeof currentTabId}`);
        const listData = await this.getListData(currentTabId);
        this.setState({
            currentTab: tab,
            listData: listData && listData.data && listData.data.responseData && listData.data.responseData.items ? listData.data.responseData.items : []
        })
    }

    private getNavbar = () => {
        if (this.state.tabData && this.state.tabData.length > 0 && this.state.currentTab) {
            return (
                <Navbar
                    tabs={this.state.tabData}
                    activeTab = {this.state.currentTab}
                    onTabClick={this.onTabClick}
                />
            )
        }
        else{
            return null;
        }
    }

    private getProductList = () => {
        return (
            <React.Suspense fallback={<div>Loading...</div>}>
                <ListPage
                    listData={this.state.listData}
                />
            </React.Suspense>
        );
    }

    render () {
        const getNavbar = this.getNavbar();
        const getProductList = this.getProductList();
        return (
            <div className={styles.listWrapper}>
                {getNavbar}
                {getProductList}
            </div>
        )
    }
}

export default ListPageContainer;