import React from 'react';
import {Spring } from 'react-spring/renderprops';
import { Link } from "react-scroll";

import classes from "./AboutQuote.module.scss";

const BannerQuote = () => {


    return(
        <Spring
        config={{ tension: 20, friction: 14 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        delay={900}>
            {props =>{
                return(<div className={classes.BannerQuote} style={props}>
                            <p className={classes.BannerQuote__quote}>"I design and develop experiences that makes peoples live <span style={{fontWeight: "500"}}>simple</span>." </p>
                            <Link to="about" spy={true} smooth={true} duration={50} offset={-100} className={classes.BannerQuote__link}>About Me</Link>
                        </div>)}
            }
        </Spring>
        
    );
}


export default BannerQuote;