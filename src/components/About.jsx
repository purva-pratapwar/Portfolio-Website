import React from 'react';
import '../styles/about.css';

const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="skills-main-card">
                        <h3 className="skills-title">My Skillset</h3>
                        <div className="skills-grid">
                            <div className="skill-category">
                                <h4>Programming & Web</h4>
                                <ul>
                                    <li>Python</li>
                                    <li>C++</li>
                                    <li>JavaScript</li>
                                    <li>ReactJS</li>
                                    <li>NodeJS</li>
                                    <li>HTML & CSS</li>
                                    <li>DSA & OOPs</li>
                                </ul>
                            </div>
                            <div className="skill-category">
                                <h4>Data & ML Libraries</h4>
                                <ul>
                                    <li>Pandas & Numpy</li>
                                    <li>Matplotlib</li>
                                    <li>Scikit-learn</li>
                                    <li>OpenCV</li>
                                    <li>TensorFlow</li>
                                    <li>Dash & Streamlit</li>
                                </ul>
                            </div>
                            <div className="skill-category">
                                <h4>Tools & Software</h4>
                                <ul>
                                    <li>Git & GitHub</li>
                                    <li>LaTeX</li>
                                    <li>Excel & PowerPoint</li>
                                    <li>AutoCAD, Fusion 360</li>
                                    <li>VSCode</li>
                                    <li>Figma, Canva, Photoshop</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="right-column">
                        <div className="experience-card">
                            <h3 className="section-header">Professional Experience</h3>
                            <div className="experience-item">
                                <h4 className="experience-title">
                                    Software Development Intern @ BNY
                                </h4>
                                <ul className="experience-details">
                                    <li>Developed a real-time risk dashboard with API integration and Snowflake DB.</li>
                                    <li>Led vulnerability data ingestion and optimized SQL queries for over 10,000 records.</li>
                                    <li>Built an interactive Dash UI dashboard with dynamic charts.</li>
                                    <li>Integrated Jira REST APIs for automated vulnerability tracking.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="resume-card">
                            <h3 className="section-header">My Resume</h3>
                            <p className="resume-description">
                                I am seeking professional opportunities to apply my skills and grow. Click below to download my resume.
                            </p>
                            <a
                                href="./me22b179_3)_Resume.pdf" // Corrected Path
                                download="Purva_Pratapwar_Resume.pdf"
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