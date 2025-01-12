import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Rentals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Rentals = () => {
    const [equipments, setEquipments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedPhoneNumber, setSelectedPhoneNumber] = useState('');
    const [searchLocation, setSearchLocation] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchEquipments = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/equipment');
                setEquipments(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchEquipments();
    }, []);

    const handleRentNowClick = (phoneNumber) => {
        setSelectedPhoneNumber(phoneNumber);
        setShowModal(true);
    };

    const handleSearchChange = (e) => {
        setSearchLocation(e.target.value);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedPhoneNumber('');
    };

    const filteredEquipments = equipments.filter(equipment =>
        equipment.location.toLowerCase().includes(searchLocation.toLowerCase())
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Available Equipment for Rent</h2>
            <div className="mb-4">
                <select
                    className="form-control"
                    value={searchLocation}
                    onChange={handleSearchChange}
                >
                    <option value="" disabled>Select a location</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Mysore">Mysore</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="row">
                {filteredEquipments.map((equipment) => (
                    <div className="col-md-4 mb-4" key={equipment._id}>
                        <div className="card">
                            <img src={equipment.image} className="card-img-top" alt={equipment.name} />
                            <div className="card-body">
                                <h5 className="card-title">{equipment.name}</h5>
                                <p className="card-text">{equipment.description}</p>
                                <p className="card-text"><strong>Price:</strong> ${equipment.price}</p>
                                <p className="card-text"><strong>Location:</strong> {equipment.location}</p>
                                <button className="btn btn-warning" onClick={() => handleRentNowClick(equipment.ownerPhoneNumber)}>Rent Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for displaying selected phone number */}
            {showModal && (
                <div className="modal show" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Contact Owner</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <p>Call the owner at: <strong>{selectedPhoneNumber}</strong></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Rentals;