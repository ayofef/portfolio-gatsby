import React from "react";
import { Link} from "gatsby";
import errorSVG from "../../static/error.svg";
import Footer from "../components/Footer/Footer";


const Error = () => {
    const Imgstyle = {
        maxWidth: "70rem"
    }

    const TextStyle = {
        textAlign: "center",
        fontSize: "3rem"
    }

    

    return(
        <div style={{height: "100vh", display: "flex", flexFlow: "column wrap", justifyContent: "space-between",  }}>
            <div className="container">
                <div style={{width: "100%", display: "flex", justifyContent: "center", margin: "5rem 0"}}>
                    <img src={errorSVG} alt="Error 404" style={Imgstyle}/>
                </div>
                <p style={TextStyle}> Page Not Found </p>
                <div style={{width: "100%", display: "flex", justifyContent: "center", margin: "5rem 0"}}>
                    <Link to="/" style={{textAlign: "center", width: "15rem"}} className="btn">Home</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Error;