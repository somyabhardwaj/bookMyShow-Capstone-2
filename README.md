# Book My Show App

## Introduction

Book My Show is a web application that allows users to easily book movie tickets and view their previous bookings. The application consists of a frontend hosted on Netlify and a backend hosted on Render.

## Frontend Dependencies

The frontend of this application utilizes the following dependencies:

- **axios **: A promise-based HTTP client for making requests to the backend.
- **bootstrap **: A popular CSS framework for creating responsive and stylish user interfaces.
- **notistack **: A notification library for displaying user-friendly messages.
- **react-bootstrap **: A library that combines React and Bootstrap components.
- **react-dom **: A package for rendering React components in the browser.
- **react-scripts **: A set of scripts and configuration for React applications.
- **react-toastify **: A toast notification library for React applications.

## Backend Dependencies

The backend of this application relies on the following dependencies:

- **express **: A fast and minimal web framework for Node.js.
- **mongodb **: The official MongoDB driver for Node.js.
- **mongoose **: An elegant MongoDB object modeling tool for Node.js.

## Hosting

- Frontend: The frontend of this application is hosted on Netlify at [https://bookmyshow11.netlify.app/](https://bookmyshow11.netlify.app/).
- Backend: The backend of this application is hosted on Render at [https://capstone-project-1wft.onrender.com/api/bookings](https://capstone-project-1wft.onrender.com/api/bookings).

## Environment Variables

To run this project, you will need to set up the following environment variables in your .env file:

- `API_KEY`: Your MongoDB cluster connection key.
- `MONGODBURI`: MongoDB live connection string.
- `MONGODBURI (Local)`: MongoDB local connection string (if the application is running on localhost).
- `COLLECTION_NAME`: Name of the MongoDB collection.
- `NODE_ENV`: Set to `development` for local development or `production` for live deployment.
- `APP_PORT`: Port number for the backend server.
- `GET_REQUEST`: Path for GET requests.
- `POST_REQUEST`: Path for POST requests.

## Tech Stack

- **Client:** React.js, Bootstrap
- **Server:** Node.js, Express
- **Database:** MongoDB

## Usage

1. Visit the Book My Show App frontend at [https://bookmyshow-by-somya.netlify.app](https://bookmyshow-by-somya.netlify.app/).
2. Select the movie you would like to watch.
3. Choose a time slot.
4. Select your desired seat type and number of seats.
5. Click the "Book Now" button to make a booking.
6. After booking, you will receive a successful booking message, and your last booking details will be displayed on the screen under the "Last Booking Details" heading.

## Deployment

- [Frontend](https://bookmyshow-by-somya.netlify.app)
- [Backend](https://bms-backend-7bjf.onrender.com)

## Local Development

For local development, follow these steps:

- Clone the repository.
- Navigate to the `client` directory and run the following commands:
 ```
 cd client
 npm install
 npm start

```

- For the backend, navigate to the `src` directory and run the following commands:
```
cd server
npm install
npm start
```
## API Reference

Base URL
```https
https://bms-backend-7bjf.onrender.com
```
Make sure to configure the environment variables as mentioned above.