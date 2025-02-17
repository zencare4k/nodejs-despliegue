# Node.js Despliegue

This project is a RESTful API built with Node.js and Express, designed to manage tasks using a MongoDB database hosted on Mongo Atlas. The API allows users to create, retrieve, and delete tasks.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd nodejs-despliegue
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   PORT=3000
   ```

## Usage

To start the server, run the following command:
```
npm start
```
The server will be running on `http://localhost:3000`.

## API Endpoints

- **GET /tareas**: Retrieve all tasks from the database.
- **POST /tareas**: Create a new task. Requires a JSON body with `titulo` and `descripcion`.
- **DELETE /tareas/:id**: Delete a task by its ID.

## License

This project is licensed under the MIT License.