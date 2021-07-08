import * as React from "react";
import resume from "../../images/Resume.pdf";

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

const Resume = () => {
    return (
        <div style={blackBg}>
            <div style={{ fontSize: 36, paddingTop: 50, paddingLeft: 50 }}>
                My Resume
            </div>
            <hr style={{ width: "90%" }} />
            <div style={{ margin: "auto", marginTop: 25, marginBottom: 50, padding: 10, backgroundColor: "white" }}>
                <a href={resume}
                    style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: 18,
                        borderStyle: "solid",
                        padding: 10,
                        fontFamily: "Cormorand Garamond"
                    }}>
                    Resume PDF
                </a>
            </div>
        </div>);
}

export default Resume;