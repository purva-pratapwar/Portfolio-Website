import React from 'react';
import '../styles/about.css';

const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <h2 className="section-title" style={{ color: "#f5f5dc", fontWeight: "bold" }}>About Me</h2>
                <div className="about-content">

                    {/* Left Column: Skills */}
                    <div className="skills-main-card">
                        <h3 className="skills-title">Skills</h3>
                        <div className="skills-inner">
                            <div className="skill-box">
                                <h4>Libraries</h4>
                                <ul>
                                    <li>Pandas</li>
                                    <li>Numpy</li>
                                    <li>Matplotlib</li>
                                    <li>Scikit-learn</li>
                                    <li>OpenCV</li>
                                    <li>TensorFlow</li>
                                    <li>Dash</li>
                                    <li>Streamlit</li>
                                </ul>
                            </div>
                            <div className="skill-box">
                                <h4>Coding Skills</h4>
                                <ul>
                                    <li>Python</li>
                                    <li>C++</li>
                                    <li>JavaScript</li>
                                    <li>ReactJS</li>
                                    <li>NodeJS</li>
                                    <li>HTML & CSS</li>
                                    <li>DSA</li>
                                    <li>OOPs</li>
                                </ul>
                            </div>
                            <div className="skill-box">
                                <h4>Tools & Software</h4>
                                <ul>
                                    <li>Git & GitHub</li>
                                    <li>LaTeX</li>
                                    <li>Excel & PowerPoint</li>
                                    <li>AutoCAD, Fusion 360</li>
                                    <li>VSCode</li>
                                    <li>Figma, Canva, Photoshop</li>
                                    <li>MS Clipchamp</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Experience + Resume */}
                    <div className="right-column">
                        <div className="experience-card">
                            <h3 className="section-header">Professional Experience</h3>
                            <div className="experience-item">
                                <h4 className="experience-title">
                                    Software Development Intern @ BNY
                                </h4>
                                <ul className="experience-details">
                                    <li>Real-Time Risk Dashboard, API integration, Snowflake DB & Jira automation</li>
                                    <li>Led vulnerability data ingestion, optimized SQL queries for 10K+ records</li>
                                    <li>Built interactive Dash UI dashboard with bar & pie charts</li>
                                    <li>Integrated Jira REST APIs for bulk-fetching vulnerabilities & one-click Jira creation</li>
                                </ul>
                            </div>
                        </div>

                        <div className="resume-card">
                            <h3 className="section-header">Resume</h3>
                            <p className="resume-description">
                                I am seeking professional opportunities to apply my skills and grow. Click below to download my resume.
                            </p>
                            {/* Direct download link */}
                            <a
                                href="/assets/me22b179_4)_Resume.docx.pdf"
                                download="Resume.pdf"
                                className="download-btn"
                            >
                                <i className="fas fa-download me-2"></i>
                                Download My Resume
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
