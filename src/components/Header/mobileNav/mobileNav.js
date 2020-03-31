import React from "react";
import { Link } from "react-scroll";

import classes from "./mobileNav.module.scss";

const MobileNav = (props) => {

    return(
        <nav className={classes.mobilemasthead__nav} style={{display: !props.nav ? "block" : "none"}}>
            <ul>
                <li className={[classes.mobilemasthead__nav___list, classes.mobilemasthead__nav___list0000].join(" ")}>
                    <Link to="about" spy={true} smooth={true} duration={50} delay={0} offset={-100} className={classes.mobilemasthead__nav___links} 
                    onClick={props.clicked} >About Me</Link>
                </li>
                <li className={[classes.mobilemasthead__nav___list, classes.mobilemasthead__nav___list0001].join(" ")}>
                    <Link to="portfolio" spy={true} smooth={true} duration={50} offset={-100} className={classes.mobilemasthead__nav___links} onClick={props.clicked}>Portfolio</Link>
                </li>
                <li className={[classes.mobilemasthead__nav___list, classes.mobilemasthead__nav___list0002].join(" ")}>
                    <Link to="contact" spy={true} smooth={true} duration={50} offset={-100} className={classes.mobilemasthead__nav___links} onClick={props.clicked}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default MobileNav;