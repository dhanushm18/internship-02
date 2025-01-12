import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Admin.css';

const Admin = () => {
    const [equipments, setEquipments] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');
    const [editEquipment, setEditEquipment] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const equipmentResponse = await axios.get('http://localhost:5000/api/equipment');
                const contactResponse = await axios.get('http://localhost:5000/api/contact');
                setEquipments(equipmentResponse.data);
                setContacts(contactResponse.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/equipment/${id}`);
            setMessage('Equipment deleted successfully!');
            setEquipments(equipments.filter(equipment => equipment._id !== id));
        } catch (error) {
            setError(error);
            setMessage('Error deleting equipment. Please try again.');
        }
    };

    const handleEdit = (equipment) => {
        setEditEquipment(equipment);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditEquipment({ ...editEquipment, [name]: value });
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:5000/api/equipment/${editEquipment._id}`, editEquipment);
            setMessage('Equipment updated successfully!');
            setEquipments(equipments.map(equipment => (equipment._id === editEquipment._id ? response.data : equipment)));
            setEditEquipment(null);
        } catch (error) {
            setError(error);
            setMessage('Error updating equipment. Please try again.');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Admin Panel - Manage Rentals and Messages</h2>
            {message && <div className="alert alert-info text-center">{message}</div>}
            
            <h3 className="mb-4">Manage Rentals</h3>
            <div className="row">
                {equipments.map((equipment) => (
                    <div className="col-md-4 mb-4" key={equipment._id}>
                        <div className="card">
                            <img src={equipment.image} className="card-img-top" alt={equipment.name} />
                            <div className="card-body">
                                <h5 className="card-title">{equipment.name}</h5>
                                <p className="card-text">{equipment.description}</p>
                                <p className="card-text"><strong>Price:</strong> ${equipment.price}</p>
                                <p className="card-text"><strong>Location:</strong> {equipment.location}</p>
                                <button className="btn btn-danger" onClick={() => handleDelete(equipment._id)}>Delete</button>
                                <button className="btn btn-primary ms-2" onClick={() => handleEdit(equipment)}>Edit</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {editEquipment && (
                <div className="modal show" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Equipment</h5>
                                <button type="button" className="btn-close" onClick={() => setEditEquipment(null)}></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleEditSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            value={editEquipment.name}
                                            onChange={handleEditChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="price" className="form-label">Price</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="price"
                                            name="price"
                                            value={editEquipment.price}
                                            onChange={handleEditChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="availability" className="form-label">Availability</label>
                                        <select
                                            className="form-control"
                                            id="availability"
                                            name="availability"
                                            value={editEquipment.availability}
                                            onChange={handleEditChange}
                                            required
                                        >
                                            <option value={true}>Available</option>
                                            <option value={false}>Not Available</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <textarea
                                            className="form-control"
                                            id="description"
                                            name="description"
                                            value={editEquipment.description}
                                            onChange={handleEditChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="specifications" className="form-label">Specifications</label>
                                        <textarea
                                            className="form-control"
                                            id="specifications"
                                            name="specifications"
                                            value={editEquipment.specifications}
                                            onChange={handleEditChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="location" className="form-label">Location</label>
                                        <select
                                            className="form-control"
                                            id="location"
                                            name="location"
                                            value={editEquipment.location}
                                            onChange={handleEditChange}
                                            required
                                        >
                                            <option value="">Select Location</option>
                                            <option value="Location 1">Location 1</option>
                                            <option value="Location 2">Location 2</option>
                                            <option value="Location 3">Location 3</option>
                                            <option value="Location 4">Location 4</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Save Changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <h3 className="mt-5 mb-4">Contact Messages</h3>
            <div className="row">
                {contacts.map((contact) => (
                    <div className="col-md-4 mb-4" key={contact._id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{contact.name}</h5>
                                <p className="card-text"><strong>Email:</strong> {contact.email}</p>
                                <p className="card-text">{contact.message}</p>
                                <p className="card-text"><small className="text-muted">Received on {new Date(contact.createdAt).toLocaleString()}</small></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Admin;