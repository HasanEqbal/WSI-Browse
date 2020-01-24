import React from 'react';
import './Header.scss';
import logo from '../../Images/dummy.jpeg';

export default function DesktopHeader() {
    return (
        <React.Fragment>
            <div className="off-canvas-content" data-off-canvas-content>
                <div className="ecommerce-header-top show-for-large">
                    <div className="row align-justify align-middle" style={{height: '100%'}}>
                        <div className="ecommerce-header-top-message">
                            <strong>Everyday Low Price. Free Shipping. Free Returns. Free Design Advice</strong>
                        </div>
                        <div className="ecommerce-header-top-links">
                            <ul>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Order Status</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#" target="_blank"><i className="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ecommerce-header show-for-large">
                <div className="row align-justify align-middle">
                    <div className="shrink column">
                        <ul className="vertical medium-horizontal menu">
                            <li><a href="#"><img className="logo" src={logo} /></a></li>
                            <li className="main-nav-link trigger"><a href="/shop/cookware/newall">COOKWARE</a>
                                <div className="sub">
                                    <div className="item">
                                        <a href="/shop/cookware/newall">Cookware Sets</a>
                                    </div>
                                    <div className="item">
                                        <a href="/shop/cookware/newall">Fry Pans & Skillets</a>
                                    </div>
                                    <div className="item">
                                        <a href="/shop/cookware/newall">All-Clad</a>
                                    </div>
                                    <div className="item">
                                        <a href="/shop/cookware/newall">Global</a>
                                    </div>
                                </div>
                            </li>
                            <li className="main-nav-link trigger"><a href="/shop/cookware/newall">ELETRICS</a>
                                <div className="sub">
                                    <div className="item">
                                        <a href="/shop/cookware/newall">Cookware Sets</a>
                                    </div>
                                    <div className="item">
                                        <a href="/shop/cookware/newall">Fry Pans & Skillets</a>
                                    </div>
                                    <div className="item">
                                        <a href="/shop/cookware/newall">All-Clad</a>
                                    </div>
                                    <div className="item">
                                        <a href="/shop/cookware/newall">Global</a>
                                    </div>
                                </div>
                            </li>
                            <li className="main-nav-link trigger"><a href="build.html">OUTDOOR</a>
                                <div className="sub">
                                    <div className="item">
                                        <a href="/shop/cookware/newall">Cookware Sets</a>
                                    </div>
                                    <div className="item">
                                        <a href="/shop/cookware/newall">Fry Pans & Skillets</a>
                                    </div>
                                    <div className="item">
                                        <a href="/shop/cookware/newall">All-Clad</a>
                                    </div>
                                    <div className="item">
                                        <a href="/shop/cookware/newall">Global</a>
                                    </div>
                                </div>
                            </li>
                            <li className="main-nav-link trigger"><a href="/shop/cookware/newall">CUTLERY</a>
                                <div className="sub">
                                    <div className="item">
                                        <a href="/shop/cookware/newall">Cookware Sets</a>
                                    </div>
                                    <div className="item">
                                        <a href="/shop/cookware/newall">Fry Pans & Skillets</a>
                                    </div>
                                    <div className="item">
                                        <a href="/shop/cookware/newall">All-Clad</a>
                                    </div>
                                    <div className="item">
                                        <a href="/shop/cookware/newall">Global</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="shrink column">
                        <ul className="menu">
                            <li><input type="search" placeholder="Search" /></li>
                            <li><button type="button" className="button search-button"></button></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="ecommerce-header-mobile hide-for-large">
                <div className="ecommerce-header-mobile-left">
                    <button className="menu-icon" type="button" data-toggle="ecommerce-header"></button>
                    <form className="ecommerce-header-search-exandable">
                        <input type="search" placeholder="Search" />
                    </form>
                </div>
                <div className="ecommerce-header-mobile-center">
                    <a href="#"><img className="logo" src="https://placehold.it/130x30" /></a>
                </div>
                <div className="ecommerce-header-mobile-right">
                    <i className="fa fa-shopping-cart"></i>
                </div>
            </div>
        </React.Fragment>
    )
}
