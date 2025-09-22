import React from 'react';
import '../styles/about.css';

const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <h2 className="section-title">About Me</h2>

                <div className="intro-paragraph-container">
                    <p>
                        I am a passionate Mechanical Engineering student at IIT Madras with a strong enthusiasm for technology and software development. My journey is driven by a desire to build innovative, user-centric solutions that solve real-world problems. I thrive in environments where I can blend my analytical background with my creative coding skills, particularly in the realms of data analysis and web development.
                    </p>
                </div>

                <div className="about-content-grid">
                    {/* --- Left Side: Experience & Resume --- */}
                    <div className="experience-column">
                        <div className="info-card">
                            <h3 className="card-title">Professional Experience</h3>
                            <div className="experience-item">
                                <h4 className="experience-role">Software Development Intern @ BNY</h4>
                                <ul className="experience-details">
                                    <li>Built Real-Time Dashboard by automating API-to-Snowflake ingestion,eliminating the manual ETL</li>
                                    <li>Developed dashboard with bar/pie charts, optimized SQL to fetch 10K+ records at once, in less than 500 ms</li>
                                    <li>Enabled users to view vulnerabilities assigned to them with its mapped details to improve tracking</li>
                                    <li>Integrated Jira REST APIs to bulk-fetch vulnerability JSON payloads with the custom query filters</li>
                                    <li>Added one-click Jira creation that reduced manual work and improved the issue tracking by ~90%</li>
                                    <li>Delivered impact reduced ETL effort by 87% and achieved ~80-90% data accuracy and consistency</li>

                                </ul>
                            </div>
                        </div>
                        <div className="info-card">
                            <h3 className="card-title">My Resume</h3>
                            <p className="resume-description">
                                For a more detailed look at my qualifications and projects, please download my resume.
                            </p>
                            <a href="./me22b179_3)_Resume.pdf" download="Purva_Pratapwar_Resume.pdf" className="download-btn">
                                <i className="fas fa-download me-2"></i>
                                Download Resume
                            </a>
                        </div>
                    </div>

                    {/* --- Right Side: Skills --- */}
                    <div className="skills-column">
                        <div className="info-card skills-card">
                            <h3 className="card-title">Technical Skills</h3>
                            <div className="skills-grid">
                                <div className="skill-category">
                                    <h4>Coding Skills</h4>
                                    <ul>
                                        <li>Python, C++, Javascript</li>
                                        <li>ReactJS, NodeJS</li>
                                        <li>HTML & CSS</li>
                                        <li>Machine Learning</li>
                                        <li>OOPS</li>
                                        <li>MySQL</li>
                                    </ul>
                                </div>
                                <div className="skill-category">
                                    <h4>Libraries & Frameworks</h4>
                                    <ul>
                                        <li>Pandas & Numpy</li>
                                        <li>Matplotlib, Joblib, Plotly</li>
                                        <li>Scikit-learn</li>
                                        <li>SQLAlchemy</li>
                                        <li>Requests, SciPy</li>
                                        <li>Dash & Flask</li>
                                    </ul>
                                </div>
                            </div>
                            {/* --- Developer Tools Section (Full Width) --- */}
                            <div className="skill-category-full">
                                <h4>Tools & Softwares</h4>
                                <ul className="tools-list">
                                    <li>Linux OS</li>
                                    <li>Snowflake</li>
                                    <li>AWS</li>
                                    <li>Dataiku</li>
                                    <li>Git & GitHub</li>
                                    <li>LaTeX</li>
                                    <li>Matlab</li>
                                    <li>Jupyter NB</li>
                                    <li>AutoCAD</li>
                                    <li>Fusion 360</li>
                                    <li>GNU Octave</li>
                                    <li>Geogebra</li>
                                    <li>Figma</li>
                                    <li>Canva</li>
                                    <li>Miro</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;