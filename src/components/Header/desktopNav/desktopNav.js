import React from "react";
import { Link } from "react-scroll";
import { useTrail, animated, config } from 'react-spring';

import classes from "./desktopNav.module.scss";


const navItems = [ 
    <li className={[classes.desktopmasthead__nav___list, classes.desktopmasthead__nav___list0000].join(" ")}>
        <Link to="about" spy={true} smooth={true} duration={50} delay={0} offset={-100} className={classes.desktopmasthead__nav___links} 
            >About Me</Link>
    </li>,
    <li className={[classes.desktopmasthead__nav___list, classes.desktopmasthead__nav___list0001].join(" ")}>
        <Link to="portfolio" spy={true} smooth={true} duration={50} offset={-100} className={classes.desktopmasthead__nav___links}  >Portfolio</Link>
    </li>,
    <li className={[classes.desktopmasthead__nav___list, classes.desktopmasthead__nav___list0002].join(" ")}>
        <Link to="contact" spy={true} smooth={true} duration={50} offset={-100} className={classes.desktopmasthead__nav___links} >Contact</Link>
    </li>
];

const DesktopNav = () => {


    const trail = useTrail(navItems.length, {
        config: { tension: 100, friction: 12 },
        from: { opacity: 0, transform: "translateX(10rem)"},
        to: { opacity: 1, transform: "translateX(0rem)"},
        delay: 200
    })

    return(
        <nav className={classes.desktopmasthead__nav}>
            <ul>
            {trail.map((props, index) => {
            
            return(
                <animated.div
                    key={navItems[index]}
                    className={classes.desktopmasthead__nav___list}
                    style={props}>
                        {navItems[index]}
                </animated.div>
            )})}
            </ul>
        </nav>
    )
}

export default DesktopNav;