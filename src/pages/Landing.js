import * as React from "react";
import About from "./components/About";
import Resume from "./components/Resume";

import img from "../images/sfsunset.jpg";
import downarrow from "../images/downarrow.svg";
import fb from "../images/f_logo_RGB-Black_512.png";
import git from "../images/GitHub-Mark-120px-plus.png";
import linkedin from "../images/LI-In-Bug.png";

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
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingBottom: 100, scrollBehavior: "smooth" }}>
            <img src={img} style={pic} />
            <div style={name}>
                Julia Baylon
            </div>
            <div>
                <div style={{ fontSize: 18, paddingTop: 60, fontFamily: "Cormorant Garamond", maxWidth: 700, margin: "auto", textAlign: "center" }}>
                    Hi! My name is Julia :) I recently graduated from UCLA with a Bachelor of Science in Computer Science and a minor in Linguistics.
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", paddingTop: 30, }}>
                <a href="https://www.facebook.com/julia.baylon.391/"><img src={fb} style={{ width: 30 }} /></a>
                <a href="https://github.com/JuliaB1"><img src={git} style={{ width: 30, height: 30, marginLeft: 15, marginRight: 15 }} /></a>
                <a href="https://www.linkedin.com/in/julia-baylon/"><img src={linkedin} style={{ width: 30, height: 28, paddingTop: 2 }} /></a>
            </div>
            <a href="#about" style={{ width: 30, margin: "auto", paddingRight: 50, marginTop: 80, marginBottom: 100 }}><img src={downarrow} /></a>
            <div id="about" style={{ margin: "auto", width: "80%" }}>
                <About />
            </div>
            <div style={{ margin: "auto", width: "80%", paddingTop: 100 }}>
                <Resume />
            </div>

            <div style={{ fontFamily: "Cormorant Garamond", margin: "auto", paddingTop: 100 }}>
                © 2021, Julia Baylon.
            </div>
        </div>


    )
}

export default Landing;