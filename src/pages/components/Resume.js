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

const Resume = () => {
    return (
        <div style={blackBg}>
            <div style={{ fontSize: 36, paddingTop: 50, paddingLeft: 50 }}>
                My CV
            </div>
            <hr style={{ width: "90%" }} />
            <div style={{ paddingLeft: 50, paddingTop: 30, paddingRight: 50 }}>
                <div style={medHeader}>In college, I was mainly involved in organizations that focused on mentorship, diversity, and inclusion! I also used to write a bit (see below for some of my work!).</div>
            </div>
            <div style={{ margin: "auto", marginTop: 40, marginBottom: 50, padding: 10, backgroundColor: "white" }}>
                <a href={resume}
                    style={{
                        textDecoration: "none",
                        color: "black",
                        fontSize: 18,
                        borderStyle: "solid",
                        padding: 10,
                        fontFamily: "Cormorant Garamond"
                    }}>
                    Resume (PDF)
                </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", paddingRight: 20 }}>
                <div style={{ paddingLeft: 50, paddingBottom: 75 }}>
                    <div style={bigHeader}> Education</div>
                    <div style={medHeader}>UCLA - Bachelor of Science, Computer Science & Minor in Linguistics (2021)</div>
                </div>
                <div style={{ paddingLeft: 50, paddingBottom: 75 }}>
                    <div style={bigHeader}> Leadership</div>
                    <div style={medHeader}>UCLA ACM-W, President (2020-2021)</div>
                    <div style={text}>Managed UCLA's ACM-W chapter during the club's temporary transition to an online format due to COVID-19.</div>
                    <br />
                    <div style={medHeader}>CS33 Logistical Head Learning Assistant (April 2020-June 2020)</div>
                    <div style={text}>Managed the logistics for the CS33 Learning Assistant (LA) Program at UCLA.</div>
                    <br />
                    <div style={medHeader}>UCLA Regents Scholar Society Family Head (2018-2019)</div>
                    <div style={text}>Family leader for a group of ~30 mentors + mentees.</div>
                    <br />
                    <div style={medHeader}>Panels</div>
                    <div style={{ marginLeft: 10, fontSize: 18 }}>
                        <li>[Panelist] "Taking a Seat at the Table", UC Berkeley x Stanford x UC Davis x UCSD x UCLA Women in Computing Panel (2021)</li>
                        <li>[Panelist] UCLA Discover Engineering (2020)</li>
                    </div>
                </div>
                <div style={{ paddingLeft: 50, paddingBottom: 75 }}>
                    <div style={bigHeader}> Research</div>
                    <div style={medHeader}><a href="https://arxiv.org/pdf/2104.08350.pdf" style={{ color: "white" }}>ESTER: A Machine Reading Comprehension Dataset for Event Semantic Relation Reasoning (2021)</a></div>
                </div>
                <div style={{ paddingLeft: 50, paddingBottom: 75 }}>
                    <div style={bigHeader}> Awards</div>
                    <div style={medHeader}>UCLA Engineering Achievement Award for Student Welfare (2021)</div>
                    <div style={medHeader}>UCLA Regents Scholarship (2017)</div>
                    <div style={medHeader}>Scripps Ranch Women's Club Scholarship (2017)</div>
                    <div style={medHeader}>Gold Key, Scholastic Art and Writing Awards - Short Story (2016)</div>
                    <div style={medHeader}>Branch Awardee, 18th annual Student Writing for Literacy Essay Contest - Scripps Miramar Ranch Library (2015)</div>
                </div>
            </div>

        </div>);
}

export default Resume;