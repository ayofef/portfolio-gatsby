import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import sprite from "../../../static/sprite.svg";
import classes from "./contact.module.scss";
import Heading from "../Utilities/Headings/Heading";



const Contact = () => {

    const data = useStaticQuery(graphql`
        query{
            markdownRemark(frontmatter: {title: { eq: "contact"}}){
                frontmatter{
                    telephone
                    email
                    name
                    role
                    linkedin
                    linkedinlink
                    
                }            
            }
            file(relativePath: { eq: "assets/contact/farouq.jpeg" }) {
                id
                childImageSharp{
                    fluid(quality: 100, maxWidth: 600){
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
      
      `);

    return(
        <section id="contact" className={classes.sectionContact}>
            <div className="container">
                <Heading name="Contact" />
                <div className={classes.contact}>
                    <div className={classes.contact__info}>
                        <div className={classes.contact__info___name}>
                            <h6>{data.markdownRemark.frontmatter.name} <br /> <span>{data.markdownRemark.frontmatter.role}</span></h6>
                        </div>
                        <div className={classes.contact__info___tel_and_mail}>
                            <a href={data.markdownRemark.frontmatter.linkedinlink} className={classes.contact__info___tel_and_mail____link}>
                                <span>
                                    <svg className={classes.contact__icon} aria-hidden="true">
                                        <use xlinkHref={sprite + "#icon-linkedin"}></use>
                                    </svg>
                                </span> {data.markdownRemark.frontmatter.linkedin}
                            </a>
                            <a href={"mailto:" + data.markdownRemark.frontmatter.email} className={classes.contact__info___tel_and_mail____link}>
                                <span>
                                    <svg className={classes.contact__icon} aria-hidden="true">
                                        <use xlinkHref={sprite + "#icon-email"}></use>
                                    </svg>
                                </span> {data.markdownRemark.frontmatter.email}
                            </a>
                        </div>
                    </div>
                    <div className={classes.contact__image}>
                        <Img fluid={data.file.childImageSharp.fluid} objectFit="cover" objectPosition="50% 50%" alt={data.markdownRemark.frontmatter.name}/>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Contact;