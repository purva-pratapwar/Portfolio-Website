import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="py-3 text-center" style={{ background: "#222" }}>
            <div className="container">
                <div>
                    <i className="fas fa-envelope me-2"></i>
                    <a href="mailto:pratapwarpurva@gmail.com" className="text-light footer-link">
                        pratapwarpurva@gmail.com
                    </a>
                </div>
                <div className="mt-2">
                    <a href="https://www.instagram.com/purva_p_1109/" className="text-light footer-link mx-2">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/purva-pratapwar-8a6362263" className="text-light footer-link mx-2">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="https://github.com/me22b179" className="text-light footer-link mx-2">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;