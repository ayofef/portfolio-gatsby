import React, { useState } from "react";
import { Link } from "react-scroll";
import { Link as Glink } from "gatsby";
import useMediaQuery from "../Utilities/mediaQuery/mediaQuery";


import LogoSvg from "../../../static/logo/logo.svg";

import classes from "./header.module.scss";


const Header = () => {
    
    const [nav, setNav] = useState(true);
    const isSmall = useMediaQuery("(max-width: 37.5em)");



    return(
        <header className={classes.header}>
            <div className="container">
                <div className={classes.masthead}>
                    <div className={classes.masthead__logo}>
                        <Glink  to="/"><img src={LogoSvg} alt="Farouq.dev Front-end Developer" className="logo__svg" /></Glink>
                    </div>
                    <div>
                        <input type="checkbox" className={classes.main_navigation__checkbox} id="navi-toggle" checked={!nav} readOnly/>
                        <label htmlFor="navi-toggle" className={classes.main_navigation__button} onClick={() => setNav(!nav)}>
                            <span className={classes.main_navigation__hamburger}></span>
                        </label>
                        <nav className={classes.masthead__nav} style={{display: isSmall && nav ? "none" : "block"}}>
                            <ul>
                                <li className={[classes.masthead__nav___list, classes.masthead__nav___list0000].join(" ")}>
                                    <Link to="about" spy={true} smooth={true} duration={50} delay={0} offset={-100} className={classes.masthead__nav___links} 
                                    onClick={() => isSmall ? setNav(!nav) : null} >About Me</Link>
                                </li>
                                <li className={[classes.masthead__nav___list, classes.masthead__nav___list0001].join(" ")}>
                                    <Link to="portfolio" spy={true} smooth={true} duration={50} offset={-100} className={classes.masthead__nav___links} onClick={() => isSmall ? setNav(!nav) : null} >Portfolio</Link>
                                </li>
                                <li className={[classes.masthead__nav___list, classes.masthead__nav___list0002].join(" ")}>
                                    <Link to="contact" spy={true} smooth={true} duration={50} offset={-100} className={classes.masthead__nav___links} onClick={() => isSmall ? setNav(!nav) : null}>Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;