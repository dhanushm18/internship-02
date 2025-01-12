import React from 'react';
import tractorImage from '../assets/tractor.avif';
import harvesterImage from '../assets/harvester.jpg';
import plowImage from '../assets/plow.jpg';
import '../styles/Home.css';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="jumbotron text-center text-white py-5">
                <div className="container">
                    <h1 className="display-4">Welcome to Rural Roots Equipment Rental</h1>
                    <p className="lead">
                        Your one-stop solution for renting agricultural equipment.
                    </p>
                    <a className="btn btn-warning btn-lg mt-3" href="/rentals" role="button">
                        Explore Rentals
                    </a>
                </div>
            </div>

            {/* Rent and Earn Section */}
            <section className="rent-section text-center py-5">
                <h2 className="mb-4">Have Equipment to Rent?</h2>
                <p className="mb-4">
                    Earn money by renting out your agricultural equipment. Join our
                    community and help other farmers succeed.
                </p>
                <a className="btn btn-success btn-lg" href="/equipment" role="button">
                    Rent Now
                </a>
            </section>

            {/* Who Are We Section */}
            <section className="container mt-5">
                <h2 className="section-title">Who Are We?</h2>
                <p className="text-block">
                    At Rural Roots, we provide top-quality agricultural equipment to help
                    you achieve the best results in your farming activities. Whether you
                    need a tractor, harvester, or plow, we have the right equipment for you.
                    Our equipment is well-maintained and regularly serviced to ensure
                    optimal performance. We understand the importance of reliable equipment
                    in farming, and we are committed to providing you with the best tools
                    to get the job done.
                </p>
                <p className="text-block">
                    Rural Roots Equipment Rental is dedicated to providing farmers with
                    the best equipment to ensure their success. Our mission is to support
                    the agricultural community by offering reliable and affordable rental
                    options. We believe in the power of agriculture to transform lives and
                    communities, and we are here to support you every step of the way.
                    Our team is passionate about farming and committed to helping you
                    achieve your goals.
                </p>
            </section>

            {/* Featured Equipment Section */}
            <section className="container mt-5">
                <h2 className="section-title">Featured Equipment</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src={tractorImage} className="card-img-top" alt="Tractor" />
                            <div className="card-body">
                                <h5 className="card-title">Tractor</h5>
                                <p className="card-text">
                                    High-performance tractors for all your farming needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src={harvesterImage} className="card-img-top" alt="Harvester" />
                            <div className="card-body">
                                <h5 className="card-title">Harvester</h5>
                                <p className="card-text">
                                    Efficient harvesters to maximize your crop yield.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src={plowImage} className="card-img-top" alt="Plow" />
                            <div className="card-body">
                                <h5 className="card-title">Plow</h5>
                                <p className="card-text">
                                    Durable plows for preparing your fields.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer bg-dark text-white text-center py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>Contact Us</h5>
                            <p>Phone: +1 123-456-7890</p>
                            <p>Email: info@ruralroots.com</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Quick Links</h5>
                            <p><a href="/privacy-policy" className="footer-link">Privacy Policy</a></p>
                            <p><a href="/terms-of-service" className="footer-link">Terms of Service</a></p>
                        </div>
                        <div className="col-md-4">
                            <h5>Address</h5>
                            <p>123 Rural Roots Lane</p>
                            <p>Farming City, Country</p>
                        </div>
                    </div>
                    <p className="mt-3">&copy; 2025 Rural Roots Equipment Rental. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;