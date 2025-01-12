const Equipment = require('../models/equipmentModel');
const cloudinary = require('../config/cloudinaryConfig');

// Get all equipment
exports.getAllEquipment = async (req, res) => {
    try {
        const equipments = await Equipment.find();
        res.json(equipments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get equipment by ID
exports.getEquipmentById = async (req, res) => {
    try {
        const equipment = await Equipment.findById(req.params.id);
        if (!equipment) {
            return res.status(404).json({ message: 'Equipment not found' });
        }
        res.json(equipment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add new equipment
exports.addEquipment = async (req, res) => {
    const { name, price, availability, description, specifications, location, ownerName, ownerPhoneNumber } = req.body;
    let imageUrl = '';

    if (req.file) {
        try {
            console.log('Uploading image to Cloudinary:', req.file.path);
            const result = await cloudinary.uploader.upload(req.file.path);
            console.log('Cloudinary upload result:', result);
            imageUrl = result.secure_url;
        } catch (error) {
            console.error('Image upload failed:', error);
            return res.status(500).json({ message: 'Image upload failed', error });
        }
    }

    const equipment = new Equipment({
        name,
        image: imageUrl,
        price,
        availability,
        description,
        specifications,
        location,
        ownerName,
        ownerPhoneNumber,
    });

    try {
        const newEquipment = await equipment.save();
        res.status(201).json(newEquipment);
    } catch (error) {
        console.error('Error saving equipment:', error);
        res.status(400).json({ message: error.message });
    }
};

// Update existing equipment
exports.updateEquipment = async (req, res) => {
    try {
        const equipment = await Equipment.findById(req.params.id);
        if (!equipment) {
            return res.status(404).json({ message: 'Equipment not found' });
        }

        const { name, price, availability, description, specifications, location, ownerName, ownerPhoneNumber } = req.body;
        let imageUrl = equipment.image;

        if (req.file) {
            try {
                console.log('Uploading image to Cloudinary:', req.file.path);
                const result = await cloudinary.uploader.upload(req.file.path);
                console.log('Cloudinary upload result:', result);
                imageUrl = result.secure_url;
            } catch (error) {
                console.error('Image upload failed:', error);
                return res.status(500).json({ message: 'Image upload failed', error });
            }
        }

        equipment.name = name || equipment.name;
        equipment.image = imageUrl;
        equipment.price = price || equipment.price;
        equipment.availability = availability || equipment.availability;
        equipment.description = description || equipment.description;
        equipment.specifications = specifications || equipment.specifications;
        equipment.location = location || equipment.location;
        equipment.ownerName = ownerName || equipment.ownerName;
        equipment.ownerPhoneNumber = ownerPhoneNumber || equipment.ownerPhoneNumber;

        const updatedEquipment = await equipment.save();
        console.log('Equipment updated:', updatedEquipment);
        res.json(updatedEquipment);
    } catch (error) {
        console.error('Error updating equipment:', error);
        res.status(400).json({ message: error.message });
    }
};

// Delete equipment
exports.deleteEquipment = async (req, res) => {
    try {
        const equipment = await Equipment.findById(req.params.id);
        if (!equipment) {
            return res.status(404).json({ message: 'Equipment not found' });
        }

        // Optionally, delete the image from Cloudinary
        const imagePublicId = equipment.image.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(imagePublicId);

        await equipment.remove();
        res.json({ message: 'Equipment deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};