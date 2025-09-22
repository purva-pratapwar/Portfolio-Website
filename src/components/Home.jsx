import '../styles/home.css';

const Home = () => {
    return (
        <section className="home-section">
            <div className="home-content">
                {/* Text Section */}
                <div className="home-text">
                    <h1>
                        Purva
                        <span className="name-outline">Pratapwar</span>
                    </h1>
                    {/* This is the new container for the intro */}
                    <div className="intro-container">
                        <h2>Mechanical Engineering Student at IIT Madras</h2>
                        <p>
                            Passionate about technology and building innovative solutions.
                            Currently exploring software development, data analysis, and creative projects.
                        </p>
                    </div>
                </div>

                {/* Creative Image Section */}
                <div className="creative-image-container">
                    <div className="background-shape"></div>
                    <img
                        src="./profile.jpg"
                        alt="Profile"
                        className="profile-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;