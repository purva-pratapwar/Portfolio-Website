import React, { useState } from 'react';
import { sendEmail } from '../utils/emailService';
import '../styles/contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setResponse({ type: 'error', message: 'Please enter a valid email address.' });
            return;
        }

        try {
            const success = await sendEmail(formData.name, formData.email, formData.message);
            if (success) {
                setResponse({ type: 'success', message: 'Thank you for reaching out! An email has been sent to you.' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setResponse({ type: 'error', message: 'Failed to send email. Please try again later.' });
            }
        } catch (error) {
            setResponse({ type: 'error', message: `Failed to send email: ${error.message}` });
        }
    };

    return (
        <section className="py-5 section-container" style={{ background: "#f5f5dc" }}>
            <div className="container">
                <h2 className="section-title" style={{ color: "#800000", fontWeight: "bold" }}>Contact Me</h2>
                <form onSubmit={handleSubmit} style={{
                    background: "rgba(255,255,255,0.7)",
                    padding: "2rem",
                    borderRadius: "18px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)"
                }}>
                    <div className="mb-3">
                        <label className="text-dark form-label">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            style={{ borderRadius: "12px" }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="text-dark form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ borderRadius: "12px" }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="text-dark form-label">Message</label>
                        <textarea
                            name="message"
                            className="form-control"
                            placeholder="Your Message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            style={{ borderRadius: "12px" }}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn-custom btn mt-3">
                        Send Message
                    </button>
                    {response && (
                        <div className={`alert alert-${response.type} mt-3`}>
                            {response.message}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;