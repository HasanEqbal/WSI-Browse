import React from 'react'
import './Footer.scss';
import footerData from './footer_data.json'
import FooterColumns from './FooterColumns'

function Footer() {

    return (
        <div>
            <div className="row footerContainer">
                {Object.keys(footerData).map((key, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className="columns small-6 medium-6 large-4">
                                <h6>{key}</h6>
                                <FooterColumns key={index} value={footerData[key]} />
                            </div>
                        </React.Fragment>)
                }
                )}
            </div>
            <span className="footer-epilogue">© 2020 Williams-Sonoma Inc., All Rights Reserved</span>
        </div>
    )
}

export default Footer;
