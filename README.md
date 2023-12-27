# Evotech Survey Application

This is a web application for conducting surveys. Users can fill out a survey form, and admins can view the survey submissions.

## Features

- User-friendly survey form with validation
- Admin dashboard to view survey submissions
- User authentication for admin access
- MongoDB used to store survey submissions
- Responsive design for various devices

## Local Setup

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running

### Steps

1. **Clone the Repository:**
   ```bash
   git clone <repository_url>
   
### Backend Setup

1. npm install
2. Create a .env file in the root of the backend directory with the following content:
   CONNECTION_STRING=<your_mongodb_connection_string>
   ACCESS_TOKEN_SECRET=<your_secret_for_jwt>
3. Run the backend server: npm start

### Frontend Setup

1. cd client
2. npm install
3. npm start

