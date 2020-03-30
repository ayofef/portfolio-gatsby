import React from 'react';


import classes from "./Heading.module.scss";



const Heading = (props) => {

    return(
        <h3 className={classes.heading}>{props.name}</h3>
    );
}


export default Heading;