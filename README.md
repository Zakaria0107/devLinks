# DevLinks

## Introduction
This project is a fully-functional link-sharing app for developers. It consists of a frontend built with React.js and Tailwind CSS, and a backend powered by Node.js, Express.js, MongoDB, and Redis for high-performance caching.

## Project Structure
The project is organized into two main folders:
- `client`: Contains the frontend code.
- `server`: Contains the backend code.

## Prerequisites
Before running the project, make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)

## Getting Started

### Frontend (Client)

1. Open a terminal and navigate to the `client` folder:
    ```bash
    cd client
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the app.

### Backend (Server)

1. Open another terminal and navigate to the `server` folder:
    ```bash
    cd server
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
   - Create a `.env` file in the `server` folder.
   - Add the following environment variables and replace  with your actual values:
     ```env
     PORT=
     DATABESE=
     JWT_SECRET=
     REDIS=
4. Start the development server:
    ```bash
    nodemon index
    ```
