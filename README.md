# Grocery Backend Application

A Node.js Express backend for grocery management, containerized with Docker and using MongoDB as the database. This project includes full CRUD operations on grocery items and order creation, with Postman request samples and essential Docker commands for setup and management.

## Features
- CRUD operations for grocery items (admin)
- Inventory management
- Order creation (user)
- MongoDB containerized with persistent data
- Backend app containerized for easy deployment

## Getting Started

## 1. Clone the Repository
``git clone https://github.com/yourusername/grocery-backend.git
cd grocery-backend``

## 2. Docker Commands
### Create a MongoDB Container with Volume
``docker run -d --name mongodb -p 27017:27017 -v %cd%\mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js:ro mongo:6``

### Build Backend App Docker Image
``docker build -t backend-app .``

### Run Backend App Container
``docker run -d --name backend -p 3000:3000 --env-file .env --link mongodb backend-app``

### List all containers
``docker ps -a``

### Enter container shell
``docker exec -it mongodb sh``

### MongoDB shell login	
``mongosh -u pranit -p pranit99 --authenticationDatabase cluster0``

### Show logs
``docker logs containername
  docker logs -f containername``

### Remove running container
``docker rm -f containername``

### Stop running container
``docker stop containername``

## API Endpoints & Postman CRUD Data

## Admin Endpoints

### Create Grocery Item
POST /api/admin/items
``{
  "name": "Organic Apples",
  "price": 2.99,
  "inventory": 100,
  "category": "Fruits"
}
``

### Get All Grocery Items
GET /api/admin/items

### Update Grocery Item
PUT /api/admin/items/{id}
``{
  "price": 3.49,
  "category": "Fresh Fruits"
}
``
### Update Inventory
PUT /api/admin/items/{id}/inventory
``{
  "inventory": 80
}
``

### Delete Grocery Item
DELETE /api/admin/items/{id}

### User Endpoints
Get Available Grocery Items
GET /api/user/items

### Create Order
POST /api/user/orders
``{
  "items": [
    { "itemId": "id", "quantity": 3 },
    { "itemId": "id", "quantity": 1 }
  ]
}
``
Replace itemId with valid IDs from your database.

