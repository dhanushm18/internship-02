const express = require('express');
const router = express.Router();
const Contact = require('../models/contactModel');

// @route GET /api/contact
// @desc  Get all contact messages
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @route POST /api/contact
// @desc  Submit contact form
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({ message: 'Error saving contact form', error });
    }
});

module.exports = router;