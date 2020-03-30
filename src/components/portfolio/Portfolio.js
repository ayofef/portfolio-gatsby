import React from 'react';
import { graphql, useStaticQuery } from "gatsby"


import Heading from "../Utilities/Headings/Heading";
import Card from "./portfolioCard/portfolioCard";



import classes from "./porftolio.module.scss";

const Portfolio = () => {

    const data = useStaticQuery(graphql`
        query{
            allFile(
                filter: {
                sourceInstanceName: { eq: "src" }
                extension: { eq: "md" }
                relativeDirectory: { regex: "/portfolio/" }
                }
            ) {
                edges {
                    node{
                        id
                        childMarkdownRemark{
                            frontmatter{
                                title
                                title
                                description
                                live
                                stack
                                source
                                image{
                                childImageSharp {
                                    fluid(maxWidth: 700, quality: 90) {
                                    ...GatsbyImageSharpFluid_tracedSVG
                                    }
                                }
                            }
                            }
                        }
                    }
                }
            
            }
        }
        
    `)
    

    return(
        <div id="portfolio">
            <div className="container">
                <Heading name="Portfolio" />
                <div className={classes.projects}>
                    {
                        data.allFile.edges.map(({node}) => (
                            <Card key={node.id}
                            title={node.childMarkdownRemark.frontmatter.title} 
                            description={node.childMarkdownRemark.frontmatter.description} 
                            image={node.childMarkdownRemark.frontmatter.image.childImageSharp.fluid} 
                            live={node.childMarkdownRemark.frontmatter.live} 
                            source={node.childMarkdownRemark.frontmatter.source} 
                            tech={node.childMarkdownRemark.frontmatter.stack}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}


export default Portfolio;