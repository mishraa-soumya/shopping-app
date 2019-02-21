import React, { Component, Suspense } from "react";
import Header from '../components/Layout/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import ListPageContainer from './ListPage/ListPageContainer';
import { default as ProductDetailPage } from './ProductDetailPage/ProductDetailPageContainer';
import '../assets/styles/App.css';

class AppContainer extends Component {
    private getPage = () => {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/" exact component={ListPageContainer} />
                    <Route path="/detail/:productId" exact component={ProductDetailPage} />
                    <Redirect to="/"/>
                </Switch>
            </Suspense>
        )
    }

    render() {
        const routes = this.getPage();
        const cartValue = sessionStorage.getItem('jpCart') ? 1 : 0;
        return (
            <div className="app-wrapper">
                <Suspense fallback={<div>Loading...</div>}>
                    <Header
                        cartCount={cartValue}
                    />
                </Suspense>
                <main>
                    {routes}
                </main>
            </div>
        );
    }
}

export default AppContainer;