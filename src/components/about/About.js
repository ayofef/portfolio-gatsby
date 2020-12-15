import React from 'react';
import { graphql, useStaticQuery } from "gatsby";


import Heading from "../Utilities/Headings/Heading";

import classes from "./About.module.scss";


const About = () => {

    let date, year, calcYear;

    date = new Date();

    year = date.getUTCFullYear();

    calcYear = year - 1996;

    const data = useStaticQuery(graphql`
        query{
            markdownRemark(frontmatter: {title: { eq: "about"}}){
                frontmatter{
                    stack
                    
                }
                html
            
            }
            site {
                siteMetadata {
                    siteUrl
                }
            }
        }
      
      `);


    return(
            <div id="about" className={["sections", `${classes.section__about}`].join(" ")}>
                <div className="container">
                    <Heading name="About Me"/>
                    <p>If you're <strong>wondering</strong> who <strong>I am...</strong></p>
                    <p>I’m <strong>Farouq</strong> , a {calcYear} years old <strong>Front-end</strong> developer. Nigerian, currently living in Dublin, Ireland.</p>

                    <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
                    <p className={classes.stack}><strong>
                        My current stack of languages/technologies is:<br />
                        <span>{data.markdownRemark.frontmatter.stack}</span>
                    </strong></p>
                    <a href="#" className={["btn", `${classes.resume}`].join(" ")} target="_blank" rel="noopener noreferrer">
                        <span>
                            <svg className="button-icon" aria-hidden="true">
                                <use href={data.site.siteMetadata.siteUrl + "/sprite.svg#icon-paper-plane"}></use>
                            </svg>
                        </span>
                        Resume</a>
                </div>
            </div>
    );
}


export default About;