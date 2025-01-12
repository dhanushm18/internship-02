import React, { useState } from 'react';
import { addEquipment } from '../api';
import '../styles/Equipments.css';

const Equipments = () => {
    const [newEquipment, setNewEquipment] = useState({
        name: '',
        image: '',
        price: '',
        availability: true,
        description: '',
        specifications: '',
        location: '',
        ownerName: '',
        ownerPhoneNumber: ''
    });
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEquipment({ ...newEquipment, [name]: value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleAddEquipment = async (e) => {
        e.preventDefault();
        try {
            const equipmentData = { ...newEquipment, file };
            console.log('Adding equipment:', equipmentData);
            const response = await addEquipment(equipmentData);
            console.log('Add equipment response:', response);
            setNewEquipment({
                name: '',
                image: '',
                price: '',
                availability: true,
                description: '',
                specifications: '',
                location: '',
                ownerName: '',
                ownerPhoneNumber: ''
            });
            setFile(null);
            setMessage('Equipment added successfully!');
        } catch (error) {
            console.error('Error adding equipment:', error);
            setMessage('Error adding equipment. Please try again.');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Add New Equipment</h2>
            <div className="alert alert-warning text-center">
                Note: Contact admin for any changes, updates, or deletions of equipment.
            </div>
            {message && <div className="alert alert-info text-center">{message}</div>}
            <form onSubmit={handleAddEquipment} className="mb-4">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={newEquipment.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input
                            type="file"
                            className="form-control"
                            id="image"
                            name="image"
                            onChange={handleFileChange}
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            name="price"
                            value={newEquipment.price}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="availability" className="form-label">Availability</label>
                        <select
                            className="form-control"
                            id="availability"
                            name="availability"
                            value={newEquipment.availability}
                            onChange={handleInputChange}
                            required
                        >
                            <option value={true}>Available</option>
                            <option value={false}>Not Available</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={newEquipment.description}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="specifications" className="form-label">Specifications</label>
                    <textarea
                        className="form-control"
                        id="specifications"
                        name="specifications"
                        value={newEquipment.specifications}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <select
                        className="form-control"
                        id="location"
                        name="location"
                        value={newEquipment.location}
                        onChange={handleInputChange}
                        required
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
                <div className="mb-3">
                    <label htmlFor="ownerName" className="form-label">Owner Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="ownerName"
                        name="ownerName"
                        value={newEquipment.ownerName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="ownerPhoneNumber" className="form-label">Owner Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="ownerPhoneNumber"
                        name="ownerPhoneNumber"
                        value={newEquipment.ownerPhoneNumber}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Equipment</button>
            </form>
        </div>
    );
};

export default Equipments;