import React, { useState } from "react";
import { Link} from "gatsby";

import DesktopNav from "./desktopNav/desktopNav";
import MobileNav from "./mobileNav/mobileNav";

import LogoSvg from "../../../static/logo/logo.svg";


import classes from "./header.module.scss";


const Header = () => {
    
    const [nav, setNav] = useState(true);



    return(
        <header className={classes.header}>
            <div className="container">
                <div className={classes.masthead}>
                    <div className={classes.masthead__logo}>
                        <Link  to="/"><img src={LogoSvg} alt="Farouq.dev Front-end Developer" className="logo__svg" /></Link>
                    </div>
                    <div>
                        <input type="checkbox" className={classes.main_navigation__checkbox} id="navi-toggle" checked={!nav} readOnly/>
                        <label htmlFor="navi-toggle" className={classes.main_navigation__button} onClick={() => setNav(!nav)}>
                            <span className={classes.main_navigation__hamburger}></span>
                        </label>
                        <DesktopNav />
                        <MobileNav clicked={() => setNav(!nav)} nav={nav}/>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;