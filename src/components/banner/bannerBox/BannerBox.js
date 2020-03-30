import React from 'react';

import Hello from "./Hello/Hello";
import classes from "./BannerBox.module.scss";
import Quote from "./AboutQuote/AboutQuote";

const BannerBox = () => {

    return (
        <div className="banner_container">
            <div className={classes.bannerbox}>
                <Hello />
                <Quote />
            </div>
        </div>
    );
}


export default BannerBox;