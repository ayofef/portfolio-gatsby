import React from "react"

import Layout from "../components/Layout/Layout";
import Banner from "../components/banner/banner.js";
import "../styles/index.scss";
import About from "../components/about/About";
import Strength from "../components/Strengths/Strength";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/contact";

const Index = () => {


        return (
            <Layout>
                <Banner />
                <About />
                <Strength />
                <Portfolio />
                <Contact />
            </Layout>
        );
}


export default Index;