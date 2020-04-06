import React from 'react';
import {Spring, config} from 'react-spring/renderprops';
import WordCarousel from "./WordCarousel/WordCarousel";
import classes from "./Hello.module.scss";


const Hello = () => {

    return (
        <Spring
        config={{ tension: 80, friction: 22 }}
        from={{ opacity: 0, transform: "translateX(-10rem)" }}
        to={{ opacity: 1, transform: "translateX(0rem)"  }}
        delay={400}>
            {props =>{
                return(<div className={classes.bannerbox__hello} style={props}>
                    <h1>Hello! <br/> I'm Farouq</h1>
                    <h2>A <WordCarousel /> Front-end developer.</h2>
                </div>)}
            }
        </Spring>
        
    );
}


export default Hello;