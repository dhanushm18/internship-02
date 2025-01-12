import axios from 'axios';

const API_URL = 'http://localhost:5000/api/equipment';

export const addEquipment = async (equipmentData) => {
    try {
        const formData = new FormData();
        for (const key in equipmentData) {
            formData.append(key, equipmentData[key]);
        }
        const response = await axios.post(API_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding equipment:', error);
        throw error;
    }
};