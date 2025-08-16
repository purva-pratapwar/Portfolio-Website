import '../styles/home.css';
import profileImg from '../assets/profile.jpg';

const Home = () => {
    return (
        <section className="home-section">
            <div className="container">
                <div className="home-content">
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="profile-image"
                    />
                    <div className="home-text">
                        <h1>Purva Pratapwar</h1>
                        <h2>Mechanical Engineering Student at IIT Madras</h2>
                        <p>
                            Passionate about technology and building innovative solutions.
                            Currently exploring software development and data analysis.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
