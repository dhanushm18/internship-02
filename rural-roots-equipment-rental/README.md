# Rural Roots Equipment Rental System

## Overview
The Rural Roots Equipment Rental System is a full-stack application designed to facilitate the rental of agricultural equipment. Users can view available equipment, check details, and rent items without the need for login or registration.

## Technologies Used
- **Frontend**: React
- **Backend**: Node.js with Express
- **Database**: MongoDB

## Features
- Dynamic listing of available agricultural equipment.
- Detailed view of equipment specifications, rental prices, and availability.
- Simple rental process allowing users to specify rental duration.
- Admin panel for managing equipment listings (add, update, delete).
- Responsive UI built with React and styled components.

## Project Structure
```
rural-roots-equipment-rental
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── app.js
│   └── package.json
├── frontend
│   ├── public
│   ├── src
│   └── package.json
├── database
│   └── seed.js
├── README.md
└── .gitignore
```

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## API Endpoints
- **Equipment**
  - `GET /api/equipment`: Retrieve all equipment.
  - `GET /api/equipment/:id`: Retrieve equipment by ID.
  - `POST /api/equipment`: Add new equipment.
  - `PUT /api/equipment/:id`: Update existing equipment.
  - `DELETE /api/equipment/:id`: Delete equipment.

- **Rental**
  - `POST /api/rentals`: Create a rental record.
  - `GET /api/rentals`: Retrieve rental information.

## Sample Data
A script is provided in `database/seed.js` to seed the MongoDB database with sample equipment and rental data for testing purposes.

## License
This project is open-source and available for modification and distribution.