import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const BreadCums = (props) => {
    const { pageTitle } = props;
    return (
        <>
            <div className="sc-breadcrumbs">
                <div className="container">
                    <div className="breadcrumbs-text white-color">
                        <h1 className="page-title sc-sm-pt-20">{pageTitle}</h1>
                        <ul>
                            <li><Link className="active" to="/#">Home</Link></li>
                            <li>{pageTitle ? pageTitle : "About"}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BreadCums;