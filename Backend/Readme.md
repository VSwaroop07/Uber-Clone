# User Routes Documentation

## User Registration

### Endpoint
`POST /users/register`

### Description
This endpoint creates a new user account. Upon successful registration, a JSON Web Token (JWT) is generated and returned along with the user details.

### Request Body
The request body should be a JSON object containing the following fields:

- `fullname` (object): An object containing the user's first and last name.
  - `firstname` (string): The first name of the user.
  - `lastname` (string): The last name of the user.
- `email` (string): The email address of the user. Must be a valid email format.
- `password` (string): The password of the user. Must be at least 6 characters long.

### Request Example
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "secret123"
}
```

### Possible Responses
- `201 Created`: Returns a JSON object containing the new user details and a JWT token.
- `400 Bad Request`: Returns validation errors if the input is invalid.

## User Login

### Endpoint
`POST /login`

### Description
This endpoint allows a user to log in by providing their email and password. If the credentials are valid, a JSON Web Token (JWT) is generated and returned along with the user information.

### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string): The email address of the user. Must be a valid email format.
- `password` (string): The password of the user. Must be at least 6 characters long.

### Request Example
```json
{
  "email": "jane.doe@example.com",
  "password": "secret123"
}
```
## Get User Profile

### Endpoint
`GET /users/profile`

### Description
This endpoint retrieves the profile information of the authenticated user.

### Authentication
This endpoint requires a valid JWT token to be provided in the request headers.

### Possible Responses
- `200 OK`: Returns a JSON object containing the authenticated user's profile information.
- `401 Unauthorized`: Returns an error if the user is not authenticated.

## User Logout

### Endpoint
`GET /users/logout`

### Description
This endpoint logs out the authenticated user by clearing the authentication token and blacklisting it.

### Authentication
This endpoint requires a valid JWT token to be provided in the request headers.

### Possible Responses
- `200 OK`: Returns a message indicating that the user has been logged out successfully.
- `401 Unauthorized`: Returns an error if the user is not authenticated.
## Captain Registration

### Endpoint
`POST /captain/register`

### Description
This endpoint registers a new captain. Upon successful registration, a JSON Web Token (JWT) is generated and returned along with the captain details.

### Request Body
The request body should be a JSON object containing the following fields:

- `fullname` (object): An object containing the captain's first and last name.
  - `firstname` (string): The first name of the captain. Must be at least 3 characters long.
  - `lastname` (string): The last name of the captain. Must be at least 3 characters long.
- `email` (string): The email address of the captain. Must be a valid email format.
- `password` (string): The password of the captain. Must be at least 6 characters long.
- `vehicle` (object): An object containing the vehicle details.
  - `color` (string): The color of the vehicle. Must be at least 3 characters long.
  - `plate` (string): The plate number of the vehicle. Must be at least 3 characters long.
  - `capacity` (number): The capacity of the vehicle. Must be a number.
  - `vehicleType` (string): The type of the vehicle. Must be one of the following: `car`, `motorcycle`, `auto`.

### Request Example
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Smith"
  },
  "email": "john.smith@example.com",
  "password": "securePassword123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```
## Captain Login

### Endpoint
`POST /captains/login`

### Description
This endpoint allows a captain to log in by providing their email and password. If the credentials are valid, a JSON Web Token (JWT) is generated and returned along with the captain information.

### Request Body
The request body should be a JSON object containing the following fields:

- `email` (string): The email address of the captain. Must be a valid email format.
- `password` (string): The password of the captain. Must be at least 6 characters long.

### Request Example
```json
{
  "email": "john.smith@example.com",
  "password": "securePassword123"
}
```

## Get Captain Profile

### Endpoint
`GET /captains/profile`

### Description
This endpoint retrieves the profile information of the authenticated captain.

### Authentication
This endpoint requires a valid JWT token to be provided in the request headers.

### Possible Responses
- `200 OK`: Returns a JSON object containing the authenticated captain's profile information.
- `401 Unauthorized`: Returns an error if the captain is not authenticated.

## Captain Logout

### Endpoint
`GET /captains/logout`

### Description
This endpoint logs out the authenticated captain by clearing the authentication token and blacklisting it.

### Authentication
This endpoint requires a valid JWT token to be provided in the request headers.

### Possible Responses
- `200 OK`: Returns a message indicating that the captain has been logged out successfully.
- `401 Unauthorized`: Returns an error if the captain is not authenticated.
### Request Example
```
GET /captains/logout
Authorization: Bearer <JWT_TOKEN>
```