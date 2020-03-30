import React from 'react';
import { Link } from "react-scroll";

import classes from "./AboutQuote.module.scss";

const BannerQuote = () => {


    return(
        <div className={classes.BannerQuote}>
            <p className={classes.BannerQuote__quote}>"I design and develop experiences that makes peoples live <span style={{fontWeight: "500"}}>simple</span>." </p>
            <Link to="about" spy={true} smooth={true} duration={50} offset={-100} className={classes.BannerQuote__link}>About Me</Link>
        </div>
    );
}


export default BannerQuote;