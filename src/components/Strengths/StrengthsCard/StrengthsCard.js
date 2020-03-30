import React from 'react';

import classes from "./StrengthsCard.module.scss";

const StrengthCard = (props) => {

    return(
        <div className={classes.strengthsCard}>
            <img src={props.src} alt={props.text} />
            <p>{props.text}</p>
        </div>
    );
}


export default StrengthCard;