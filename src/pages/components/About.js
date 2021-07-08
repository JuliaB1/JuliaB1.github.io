import * as React from "react";

const blackBg = {
    backgroundColor: "black",
    display: "block",
    color: "white",
    fontFamily: "Cormorant Garamond",

    marginLeft: 0,
    marginRight: 0,

    borderRadius: 5
}

const About = () => {
    return (
        <div style={blackBg}>
            <div style={{ fontSize: 36, paddingTop: 50, paddingLeft: 50 }}>
                About Me
            </div>
            <hr style={{ width: "90%" }} />
            <div style={{ paddingBottom: 50, paddingLeft: 50 }}>
                <ul>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hi</li>
                </ul>
            </div>
        </div>);
}

export default About;