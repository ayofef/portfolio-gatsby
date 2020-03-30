import React from 'react';
import Card from "./StrengthsCard/StrengthsCard";

import coding from "../../../static/strength/coding_.svg";
import performance from "../../../static/strength/rocket_launch_.svg";
import analytics from "../../../static/strength/analytics.svg";

import classes from "./Strengths.module.scss";

const Strength = () => {

    return(
        <div className="container">
            <div className={classes.strenghts}>
                <Card src={coding} text="Best Practice"/>
                <Card src={performance} text="Site Performance"/>
                <Card src={analytics} text="Site Analytics"/>
            </div>
        </div>
    );
}


export default Strength;