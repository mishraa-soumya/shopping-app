import React, { Component } from "react";
import Header from '../components/Layout/Header';
import '../assets/styles/App.css';
import { Route, Switch } from 'react-router-dom';
import ListPageContainer from './ListPageContainer';
import { default as ProductDetailPage } from './ProductDetailPageContainer';

class AppContainer extends Component {
    private getPage = () => {
        return (
            <Switch>
                <Route path="/" exact component={ListPageContainer} />
                <Route path="/detail/:productId" exact component={ProductDetailPage} />
            </Switch>
        )
    }

    render() {
        const routes = this.getPage();
        return (
            <div className="app-wrapper">
                <Header/>
                <main>
                    {routes}
                </main>
            </div>
        );
    }
}

export default AppContainer;