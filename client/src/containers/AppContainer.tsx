import React, { Component, Suspense } from "react";
import Header from '../components/Layout/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import ListPageContainer from './ListPage/ListPageContainer';
import { default as ProductDetailPage } from './ProductDetailPage/ProductDetailPageContainer';
import '../assets/styles/App.css';
import AboutUs from './AboutUS/aboutus';
import ContactUs from './ContactUs/contactus';


export interface AppContainerState {
    cartCount: number;
}
class AppContainer extends Component<{},AppContainerState> {
    private readonly defaultSettings = () => {
        const SessionCartValue = sessionStorage.getItem('jpCart');
        if (SessionCartValue && parseInt(SessionCartValue) > 0) {
            return {
                cartCount: parseInt(SessionCartValue)
            }
        }
        else {
            return {
                cartCount: 0
            }
        }
    }
    constructor (props = {}) {
        super(props);
        this.state = this.defaultSettings();
        this.addToCartHandler = this.addToCartHandler.bind(this);
    }
    private getPage = () => {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/" exact render={(props) => <ListPageContainer {...props} addToCartHandler={this.addToCartHandler} />} />
                    <Route path="/detail/:tabId/:productId" exact component={ProductDetailPage} />
                    <Route path="/about" exact component={AboutUs} />
                    <Route path="/contact" exact component={ContactUs} />
                    <Redirect to="/"/>
                </Switch>
            </Suspense>
        )
    }

    private addToCartHandler = () => {
        const SessionCartValue = sessionStorage.getItem('jpCart');
        if (SessionCartValue && parseInt(SessionCartValue) > 0) {
            const newCartValue = parseInt(SessionCartValue)+1;
            sessionStorage.setItem('jpCart', newCartValue.toString());
            this.updateCart(newCartValue);
        }
        else{
            const cartValue = 1;
            sessionStorage.setItem('jpCart', cartValue.toString());
            this.updateCart(cartValue);
        }
    }

    private updateCart = (cartValue: number) => {
        this.setState({
            cartCount: cartValue
        })
    }
    render() {
        const routes = this.getPage();
        return (
            <div className="app-wrapper">
                <Suspense fallback={<div>Loading...</div>}>
                    <Header
                        cartCount={this.state.cartCount}
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