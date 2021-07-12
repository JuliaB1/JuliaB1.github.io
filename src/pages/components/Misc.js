import * as React from "react";
import tbb from "../../images/ScholasticWritingContest2016.pdf";

const blackBg = {
    backgroundColor: "black",
    display: "block",
    color: "white",
    fontFamily: "Cormorant Garamond",

    marginLeft: 0,
    marginRight: 0,

    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
}

const bigHeader = {
    fontSize: 28,
    paddingBottom: 15,
    fontWeight: "bold"
}

const medHeader = {
    fontSize: 20
}

const text = {
    fontSize: 18
}

const Misc = () => {
    return (
        <div style={blackBg}>
            <div style={{ fontSize: 36, paddingTop: 50, paddingLeft: 50 }}>
                Other Stuff
            </div>
            <hr style={{ width: "90%" }} />
            <div style={{ display: "flex", flexDirection: "column", paddingRight: 50 }}>
                <div style={{ paddingLeft: 50, paddingBottom: 75, paddingTop: 50 }}>
                    <div style={bigHeader}> Writing ✍️</div>
                    <div style={medHeader}>
                        <a href={tbb} style={{ color: "white" }}>
                            "The Brown Box", 2016 Scholastic Art and Writing Awards Short Story Submission
                        </a>
                    </div>
                </div>
                <div style={{ paddingLeft: 50, paddingBottom: 75 }}>
                    <div style={bigHeader}> Music Taste 🎵</div>
                    <div style={medHeader}>
                        I don't make music, but if you're curious, check out <a href="https://open.spotify.com/user/0kb6wsskfitamfbhom1slzzx1?si=TumZRFIASeW-QwGqB7sKng&dl_branch=1" style={{ color: "white" }}>my Spotify</a> to see/judge my music taste :')
                    </div>
                </div>
                <div style={{ paddingLeft: 50, paddingBottom: 75 }}>
                    <div style={bigHeader}>Fun Fact ☺️</div>
                    <div style={medHeader}>
                        In high school, I wrote a story (that wound up being 153 Word document
                        pages long) based off of a narrative my friends and I came up with while
                        running during P.E. in our sophomore year. It involved
                        a talking bear, magic potions, and the ability to turn halfway into an
                        electric eel.
                    </div>
                </div>
            </div>

        </div>);
}

export default Misc;