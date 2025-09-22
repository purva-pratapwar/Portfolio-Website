import '../styles/projects.css';
import { FaGithub, FaSpotify, FaShieldAlt, FaLeaf, FaYoutube, FaMoneyBillWave, FaFileArchive } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "SpotyMood",
            description: "AI-powered personalized Spotify playlist generator by analyzing faces, voice, or manual mood input.",
            highlights: [
                "Dash + Flask web app with mood detection.",
                "OpenCV/TensorFlow for face analysis.",
                "Whisper/Pyaudio for voice processing.",
            ],
            github: "https://github.com/purva-pratapwar/SpotyMood",
        },
        {
            title: "SBI EverSure",
            description: "Dynamic insurance recommender adapting policies to user inputs.",
            highlights: [
                "XGBoost for policy recommendations.",
                "Life event prediction models.",
                "Interactive Plotly visualizations."
            ],
            github: "https://github.com/purva-pratapwar/SBI-Eversure",
        },
        {
            title: "Credit Card Fraud Detection",
            description: "SMOTE-balanced XGBoost model with superior ROC-AUC.",
            highlights: [
                "Handled class imbalance with SMOTE.",
                "Model comparison framework.",
                "GridSearchCV optimization."
            ],
            github: "https://github.com/me22b179/Credit-Card-Fraud-Detection/",
        },
        {
            title: "YouTube Clone",
            description: "Distraction-free interface focusing on search functionality.",
            highlights: [
                "YouTube/Google API integration.",
                "Voice search implementation.",
                "Firebase authentication."
            ],
            github: "https://github.com/me22b179/Credit-Card-Fraud-Detection/",
        },
        {
            title: "Algorithmic File Compressor",
            description: "Huffman Coding implementation for lossless compression.",
            highlights: [
                "MinHeap frequency analysis.",
                "Variable-length prefix encoding.",
                "Accurate decompression."
            ],
            github: "https://github.com/purva-pratapwar/Algorithmic-File-Compressor",
        },
        {
            title: "Expense Tracker",
            description: "Interactive financial dashboard with real-time analytics.",
            highlights: [
                "Dash/Plotly visualization.",
                "JSON data persistence.",
                "Category-wise spending analysis."
            ],
            github: "https://github.com/purva-pratapwar/Expense-Tracker",
        }
    ];

    return (
        <div className="page-content">
            <section className="projects-section">
                <div className="container">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div key={index} className="project-card">
                                <div className="project-icon-container">
                                    {project.icon}
                                </div>
                                <h3>{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-highlights">
                                    {project.highlights.map((highlight, i) => (
                                        <div key={i} className="highlight-item">
                                            <span className="highlight-bullet">•</span>
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href={project.github}
                                    className="github-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub className="github-icon" />
                                    <span>View on GitHub</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;