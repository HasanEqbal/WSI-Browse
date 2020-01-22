import React from 'react';
import './Header.scss';
/* import logo from '../../Images/logo.png'; */

export default function DesktopHeader() {
    return (
        <React.Fragment>
            <div class="off-canvas-content" data-off-canvas-content>
                <div class="ecommerce-header-top show-for-large">
                    <div class="row align-justify">
                        <div class="ecommerce-header-top-message">
                            <strong>Everyday Low Price. Free Shipping. Free Returns. Free Design Advice</strong>
                        </div>
                        <div class="ecommerce-header-top-links">
                            <ul>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Order Status</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#" target="_blank"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ecommerce-header show-for-large">
                <div class="row align-justify align-middle">
                    <div class="shrink column">
                        <ul class="vertical medium-horizontal menu">
                            <li><a href="#"><img class="logo" src="" /></a></li>
                            <li class="main-nav-link trigger"><a href="/shop/cookware/newall">COOKWARE</a>
                                <div class="sub">
                                    <div class="item">
                                        <a href="/shop/cookware/newall">Cookware Sets</a>
                                    </div>
                                    <div class="item">
                                        <a href="/shop/cookware/newall">Fry Pans & Skillets</a>
                                    </div>
                                    <div class="item">
                                        <a href="/shop/cookware/newall">All-Clad</a>
                                    </div>
                                    <div class="item">
                                        <a href="/shop/cookware/newall">Global</a>
                                    </div>
                                </div>
                            </li>
                            <li class="main-nav-link trigger"><a href="/shop/cookware/newall">ELETRICS</a>
                                <div class="sub">
                                    <div class="item">
                                        <a href="/shop/cookware/newall">Cookware Sets</a>
                                    </div>
                                    <div class="item">
                                        <a href="/shop/cookware/newall">Fry Pans & Skillets</a>
                                    </div>
                                    <div class="item">
                                        <a href="/shop/cookware/newall">All-Clad</a>
                                    </div>
                                    <div class="item">
                                        <a href="/shop/cookware/newall">Global</a>
                                    </div>
                                </div>
                            </li>
                            <li class="main-nav-link trigger"><a href="build.html">OUTDOOR</a>
                                <div class="sub">
                                    <div class="item">
                                        <a href="/shop/cookware/newall">Cookware Sets</a>
                                    </div>
                                    <div class="item">
                                        <a href="/shop/cookware/newall">Fry Pans & Skillets</a>
                                    </div>
                                    <div class="item">
                                        <a href="/shop/cookware/newall">All-Clad</a>
                                    </div>
                                    <div class="item">
                                        <a href="/shop/cookware/newall">Global</a>
                                    </div>
                                </div>
                            </li>
                            <li class="main-nav-link trigger"><a href="/shop/cookware/newall">CUTLERY</a>
                                <div class="sub">
                                    <div class="item">
                                        <a href="/shop/cookware/newall">Cookware Sets</a>
                                    </div>
                                    <div class="item">
                                        <a href="/shop/cookware/newall">Fry Pans & Skillets</a>
                                    </div>
                                    <div class="item">
                                        <a href="/shop/cookware/newall">All-Clad</a>
                                    </div>
                                    <div class="item">
                                        <a href="/shop/cookware/newall">Global</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="shrink column">
                        <ul class="menu">
                            <li><input type="search" placeholder="Search" /></li>
                            <li><button type="button" class="button search-button"></button></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="ecommerce-header-mobile hide-for-large">
                <div class="ecommerce-header-mobile-left">
                    <button class="menu-icon" type="button" data-toggle="ecommerce-header"></button>
                    <form class="ecommerce-header-search-exandable">
                        <input type="search" placeholder="Search" />
                    </form>
                </div>
                <div class="ecommerce-header-mobile-center">
                    <a href="#"><img class="logo" src="https://placehold.it/130x30" /></a>
                </div>
                <div class="ecommerce-header-mobile-right">
                    <i class="fa fa-shopping-cart"></i>
                </div>
            </div>
        </React.Fragment>
    )
}
