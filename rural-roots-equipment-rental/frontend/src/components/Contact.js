import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            console.log('Contact form submitted:', response.data);
            setSubmitted(true);
            setError('');
        } catch (error) {
            console.error('Error submitting contact form:', error.response ? error.response.data : error.message);
            setError('Error submitting contact form. Please try again.');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Contact Admin</h2>
            <div className="row">
                <div className="col-md-6">
                    <h4>Admin Details</h4>
                    <p><strong>Name:</strong> Vinay A S</p>
                    <p><strong>Email:</strong> admin@ruralroots.com</p>
                    <p><strong>Phone:</strong> +91 7338610613</p>
                </div>
                <div className="col-md-6">
                    <h4>Contact Form</h4>
                    {submitted ? (
                        <div className="alert alert-success">Your message has been sent successfully!</div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    )}
                </div>
            </div>
            <div className="mt-5">
                <h2 className="text-center mb-4">Our Team</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <h4 className="card-title">Shusruth Gowda MB</h4>
                                <p className="card-text"><strong>Email:</strong> shusruth@ruralroots.com</p>
                                <p className="card-text"><strong>Phone:</strong> +91 9876543210</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <h4 className="card-title">Dhanush M</h4>
                                <p className="card-text"><strong>Email:</strong> dhanush@ruralroots.com</p>
                                <p className="card-text"><strong>Phone:</strong> +91 9876543211</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <h4 className="card-title">Vikas M N</h4>
                                <p className="card-text"><strong>Email:</strong> vikas@ruralroots.com</p>
                                <p className="card-text"><strong>Phone:</strong> +91 9876543212</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;