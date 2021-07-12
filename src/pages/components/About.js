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
            <div style={{ paddingBottom: 50, paddingLeft: 50, fontSize: 22, paddingRight: 50 }}>
                <ul>
                    <li>I'll be starting work as a software engineer at Facebook in August 2021.</li>
                    <li>I love to cook, hike, crochet, listen to music, write, play the occasional video game, and watch aesthetic cooking videos on YouTube.</li>
                    <li>I've been a Nintendo nerd since age 6 when I first played Pokémon Sapphire.</li>
                    <li>Milk is my favorite beverage.</li>
                </ul>
            </div>
        </div>);
}

export default About;