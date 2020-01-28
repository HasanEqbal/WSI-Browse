import React from 'react';
import './Footer.scss';
import footerData from './footer_data.json';
import FooterColumns from './FooterColumns';

function Footer() {

    return (
        <div className="footer">
            <div className="row footerContainer">
                {Object.keys(footerData).map((key, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className="columns small-6 medium-6 large-4">
                                <h6 className="column-header">{key}</h6>
                                <FooterColumns key={index} value={footerData[key]} />
                            </div>
                        </React.Fragment>)
                }
                )}
            </div>
            <div className="footer-epilogue">© 2020 Nisum-Technologies Inc., All Rights Reserved</div>
        </div>
    )
}

export default Footer;
