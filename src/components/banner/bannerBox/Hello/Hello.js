import React from 'react';
import WordCarousel from "./WordCarousel/WordCarousel";
import classes from "./Hello.module.scss"


const Hello = () => {

    return (
        <div className={classes.bannerbox__hello}>
            <h1>Hello! <br/> I'm Farouq</h1>
            <h2>A <WordCarousel /> Front-end developer.</h2>
            
        </div>
    );
}


export default Hello;