import '../styles/home.css';

const Home = () => {
    return (
        <section className="home-section">
            <div className="container">
                <div className="home-content">
                    <div className="profile-image-container">
                        <img
                            src="./profile.jpg" // Corrected Path
                            alt="Profile"
                            className="profile-image"
                        />
                    </div>
                    <div className="home-text">
                        <h1>Purva Pratapwar</h1>
                        <h2>Mechanical Engineering Student at IIT Madras</h2>
                        <p>
                            Passionate about technology and building innovative solutions.
                            Currently exploring software development and data analysis.
                        </p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/purva-pratapwar-8a6362263" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/me22b179" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="mailto:pratapwarpurva@gmail.com">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;