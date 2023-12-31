# Express, Prisma, and MySQL CRUD API

This project implements a basic CRUD (Create, Read, Update, Delete) API using Express, Prisma, and MySQL. It allows you to manage items with attributes like name and price.

## Getting Started

### Prerequisites

- Node.js installed. You can download it [here](https://nodejs.org/).
- MySQL server installed and running.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with the following content, replacing the placeholders with your MySQL database connection details:

    ```env
    DATABASE_URL=mysql://username:password@localhost:3306/database_name
    ```

4. Run the migration to create the database tables:

    ```bash
    npx prisma migrate dev
    ```

### Usage

1. Start the server using `nodemon` for automatic restarts during development:

    ```bash
    npm start
    ```

    The server will be running at `http://localhost:3000`.

### Endpoints

#### 1. Add an Item

- **URL**: `http://localhost:3000/additems`
- **Method**: `POST`
- **Request Body**:

    ```json
    {
      "name": "Sample Item",
      "price": 19.99
    }
    ```

#### 2. Show All Items

- **URL**: `http://localhost:3000/showall`
- **Method**: `GET`

#### 3. Get Item by ID

- **URL**: `http://localhost:3000/item/:id`
- **Method**: `GET`

#### 4. Delete Item by ID

- **URL**: `http://localhost:3000/items/:id`
- **Method**: `DELETE`

#### 5. Update Item by ID

- **URL**: `http://localhost:3000/update/:id`
- **Method**: `PUT`
- **Request Body**:

    ```json
    {
      "name": "Updated Item",
      "price": 29.99
    }
    ```
---

Make sure to replace `your-username` and `your-repository` with your actual GitHub username and repository name. The `npm start` command using `nodemon` is added for development purposes, and full URLs for each endpoint are provided.