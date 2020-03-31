import React from "react";
import { Link } from "react-scroll";

import classes from "./desktopNav.module.scss";

const DesktopNav = () => {

    return(
        <nav className={classes.desktopmasthead__nav}>
            <ul>
                <li className={[classes.desktopmasthead__nav___list, classes.desktopmasthead__nav___list0000].join(" ")}>
                    <Link to="about" spy={true} smooth={true} duration={50} delay={0} offset={-100} className={classes.desktopmasthead__nav___links} 
                     >About Me</Link>
                </li>
                <li className={[classes.desktopmasthead__nav___list, classes.desktopmasthead__nav___list0001].join(" ")}>
                    <Link to="portfolio" spy={true} smooth={true} duration={50} offset={-100} className={classes.desktopmasthead__nav___links}  >Portfolio</Link>
                </li>
                <li className={[classes.desktopmasthead__nav___list, classes.desktopmasthead__nav___list0002].join(" ")}>
                    <Link to="contact" spy={true} smooth={true} duration={50} offset={-100} className={classes.desktopmasthead__nav___links} >Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default DesktopNav;