import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
import { animateScroll } from "react-scroll";

import LogoSvg from "../../../static/logo/logo_dark.svg";

import classes from "./Footer.module.scss";

const Footer = () => {

    let date, fullYear;

    date = new Date();
    fullYear = date.getFullYear();

    const data = useStaticQuery(graphql`
    query{
            
        site {
            siteMetadata {
                siteUrl
            }
        }
    }

    `)

    return(
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.footer__content}>
                    <button className={classes.footer__toTop} aria-label="to_top" onClick={() => animateScroll.scrollToTop({spy:true, smooth:true, duration:50, delay:0})}>
                        <span>
                            <svg aria-hidden="true">
                                <use href={data.site.siteMetadata.siteUrl + "/sprite.svg#icon-chevron-with-circle-up"}></use>
                            </svg>
                        </span>
                    </button>
                    <Link  to="/"><img src={LogoSvg} alt="Farouq.dev Front-end Developer" className="logo__svg" /></Link>
                    <p className={classes.footer__copy}>&copy; {fullYear}</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;