import React from "react";
import profilePhoto from "../images/1561389773687.jpg"
function Profile() {
    return (
        <div className="container grey lighten-4 z-depth-2 main-content">
            <div className="row divide">
                <div className="col s12">
                    <div className="row">
                        <div className="col l5 m5 s12">
                            <img src={profilePhoto} alt=""
                                className="circle responsive-img profile-img left" />
                        </div>
                        <div className="col l7 m7 s12">
                            <p>I am an experienced Application Support Engineer with a demonstrated track record of success
                            in the
                            computer software industry. I am skilled in API testing, Using Automation Test Frameworks,
                            Root
                            Cause
                            Analysis,
                            Advanced Platform Integrations, and Customer Relationship Management. I help lead the
                            Atlanta
                            Application Support Team at
                            Tricentis.</p>
                            <p>I have extensive experience in the SaaS space, and I am committed to life-long learning and
                            continuing my
                            education. I plan to grow my skills beyond my current role into something more technical.
                        </p>
                            <p>When I am not at work, I enjoy a number of hobbies. I read sci-fi and fantasy novels
                            (Sanderson - Way
                            of
                            Kings currently); I play video games with my friends (PS4 - Call of Duty and Rocket League);
                            I play
                            with
                            my dog Leo
                            (German Shepherd); I have attended Dragon Con for the last ten years, as it is just before
                            my
                            birthday;
                            I enjoy traveling, and I have been to seven countries in the last year (Vietnam, Korea,
                            Mexico,
                            Canada,
                            UK, Austria, and Hungary). </p>
                            <p>Everett Humphreys
                            <a target="_blank" href="mailto:everett.humphreys@gmail.com">Email</a><span> / </span>
                                <a target="_blank" href="tel:1-678-463-0129">678.463.0129</a><span> / </span>
                                <a target="_blank" href="https://www.linkedin.com/in/everett-humphreys/">LinkedIn</a><span> / </span>
                                <a target="_blank" href="https://github.com/everetthumphreys">GitHub</a><span> / </span>
                                <a target="_blank" href="assets/misc/EverettHumphreysResume.pdf">Resume</a>
                            </p>
                        </div >
                    </div >
                </div >
            </div >
        </div >
    );
}

export default Profile;