import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from 'gatsby-background-image'



import BannerBox from "./bannerBox/BannerBox";

const Banner = () => {

    const data = useStaticQuery(graphql`
        query{
            file(name: { eq : "bckg"}){
                id
                childImageSharp {
                    fluid(quality: 100, maxWidth: 1500) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
        
    `);

    const style = {
        width: "100%",
        height: "100vh",
        backgroundPosition: "center bottom",
        backgroundSize: "cover"
    }

    return (
        <BackgroundImage
            tag="section"
            fluid={data.file.childImageSharp.fluid}
            backgroundColor={`#851d41`}
            style={style}
        >
            <BannerBox />
             
        </BackgroundImage>
        

    );
}


export default Banner;