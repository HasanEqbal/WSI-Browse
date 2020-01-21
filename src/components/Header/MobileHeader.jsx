import React from 'react';
import './Header.scss';

export default function MobileHeader() {
    return (
        <div class="off-canvas ecommerce-header-off-canvas position-left" id="ecommerce-header" data-off-canvas>

            <button class="close-button" aria-label="Close menu" type="button" data-close>
                <span aria-hidden="true">&times;</span>
            </button>

            <ul class="vertical menu">
                <li class="main-nav-link trigger"><a href="categories.html">COOKWARE</a>
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
                <li class="main-nav-link"><a href="#">ELETRICS</a>
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

            <ul class="menu vertical">
                <li><a href="#">Help</a></li>
                <li><a href="#">Order Status</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">My Account</a></li>
            </ul>

        </div>
    )
}
