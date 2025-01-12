const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipmentController');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinaryConfig');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'equipment_images',
        format: async (req, file) => 'png', // supports promises as well
        public_id: (req, file) => file.originalname.split('.')[0], // Use the file name without extension
    },
});

const upload = multer({ storage });

// Get all equipment
router.get('/', equipmentController.getAllEquipment);

// Get equipment by ID
router.get('/:id', equipmentController.getEquipmentById);

// Add new equipment
router.post('/', upload.single('file'), equipmentController.addEquipment);

// Update existing equipment
router.put('/:id', upload.single('file'), equipmentController.updateEquipment);

// Delete equipment
router.delete('/:id', equipmentController.deleteEquipment);

module.exports = router;