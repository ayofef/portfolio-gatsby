import React from "react";
import Helmet from "react-helmet";
import {graphql, useStaticQuery } from "gatsby";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {

    const data = useStaticQuery(graphql`
        query{
            
            site {
                siteMetadata {
                    siteUrl
                    title
                    description
                    type
                    image
                }
            }
        }
    `)

    return(
        <React.Fragment>
            <Helmet> 
                <title>{data.site.siteMetadata.title}</title>
                <meta name="description" content={data.site.siteMetadata.description} />
                <meta name="og:title" content={data.site.siteMetadata.title} />
                <meta name="og:type" content={data.site.siteMetadata.type} />
                <meta name="og:url" content={data.site.siteMetadata.siteUrl} />
                <meta name="og:image" content={[data.site.siteMetadata.siteUrl, "/", data.site.siteMetadata.image].join("")} />
                <meta name="og:description" content={data.site.siteMetadata.description} />
            </Helmet>

            <Header />
            
            <main>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default Layout;