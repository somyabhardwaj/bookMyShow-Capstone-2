// Import necessary modules and libraries
const express = require("express");
const app = express(); // Create an Express application
const mongodb = require('mongodb');
require('dotenv').config(); // Load environment variables
let mongoose = require('mongoose');

/** 
 * Function to check if the application is running on a local server or in production.
 * Returns true for production, false otherwise.
 */
const isProduction = () => {
  return process.env.NODE_ENV === "production" ? true : false;
};

// Define the MongoDB URI based on the environment (local or production)
const mongoURI = isProduction() ? process.env.MONGODBLIVE : process.env.MONGODBURI;

// Import the bookMovieSchema from './schema'
const { bookMovieSchema } = require('./schema');

// Connect to the MongoDB server using mongoose
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection established with the MongoDB server online");
    })
    .catch(err => {
        console.log("Error while connecting to the MongoDB server", err);
    });

// Create a collection connection using mongoose and export it for use in other parts of the application
let collection_connection = mongoose.model(process.env.COLLECTION_NAME, bookMovieSchema);

exports.connection = collection_connection;

