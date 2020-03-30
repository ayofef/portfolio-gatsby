import React from 'react';
import Img from "gatsby-image";

import sprite from "../../../../static/sprite.svg";

import classes from "./portfolioCard.module.scss";

const PortfolioCard = (props) => {

    return(
        <div className={classes.portfolioCard}>
            
            <div className={classes.portfolioCard__image}><Img fluid={props.image} alt={props.title} /></div>
            <div className={classes.portfolioCard__description}>
                <h4 className={classes.portfolioCard__description___title}>{props.title}</h4>
                <p className={classes.portfolioCard__description___texts}>{props.description}</p>
                <p className={classes.portfolioCard__description___tech}>{props.tech}</p>
                <div className={classes.portfolioCard__buttons}>
                    <a href={props.live} className="btn" target="_blank" rel="noopener noreferrer">
                        <span>
                            <svg className="button-icon" aria-hidden="true">
                                <use xlinkHref={sprite + "#icon-link"}></use>
                            </svg>
                        </span> 
                    Visit</a>
                    <a href={props.source} className={[classes.btn_source, "btn"].join(" ")} target="_blank" rel="noopener noreferrer">
                        <span>
                            <svg className="button-icon" aria-hidden="true">
                                <use xlinkHref={sprite + "#icon-github"}></use>
                            </svg>
                        </span>
                     Source</a>
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;