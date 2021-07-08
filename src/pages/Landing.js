import * as React from "react";
import About from "./components/About";
import img from "../images/sfsunset.jpg";
import downarrow from "../images/downarrow.svg";
import { Link } from "gatsby";

const pic = {
    margin: "auto",
    marginTop: "5%",
    height: 300,
    width: 300,
    backgroundSize: "cover",
    display: "block",
    borderRadius: 300,

    WebkitBorderRadius: 300,
    MozBorderRadius: 300,

    objectFit: "cover"
};

const name = {
    paddingTop: 20,
    fontWeight: "bold",
    fontSize: 42,
    fontFamily: "Cormorant Garamond",
    margin: "auto"
}

const Landing = () => {
    if (typeof window !== "undefined") {
        // eslint-disable-next-line global-require
        require("smooth-scroll")('a[href*="#"]')
    }
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingBottom: 500, scrollBehavior: "smooth" }}>
                <img src={img} style={pic} />
                <div style={name}>
                    Julia Baylon
                </div>
                <div>
                    <div style={{ fontSize: 18, paddingTop: 70, fontFamily: "Cormorant Garamond", maxWidth: 700, margin: "auto", textAlign: "center" }}>
                        Hi! I recently graduated from UCLA with a Bachelor of Science in Computer Science and a minor in Linguistics.
                    </div>
                </div>

                <a href="#about" style={{ width: 30, margin: "auto", paddingRight: 50, paddingTop: 100, paddingBottom: 100 }}><img src={downarrow} /></a>
                <div id="about">
                    <About />
                </div>
            </div>

        </div>

    )
}

export default Landing;