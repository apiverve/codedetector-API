/**
 * Basic Example - Code Detector API
 *
 * This example demonstrates how to use the Code Detector API.
 * Make sure to set your API key in the .env file or replace '[YOUR_API_KEY]' below.
 */

require('dotenv').config();
const codedetectorAPI = require('../index.js');

// Initialize the API client
const api = new codedetectorAPI({
    api_key: process.env.API_KEY || '[YOUR_API_KEY]'
});

// Example query
var query = "a = 5\nb = 6\nc = 7\n\n# Uncomment below to take inputs from the user\n# a = float(input('Enter first side: '))\n# b = float(input('Enter second side: '))\n# c = float(input('Enter third side: '))\n\n# calculate the semi-perimeter\ns = (a + b + c) / 2\n\n# calculate the area\narea = (s*(s-a)*(s-b)*(s-c)) ** 0.5\nprint('The area of the triangle is %0.2f' %area)";

// Make the API request using callback
console.log('Making request to Code Detector API...\n');

api.execute(query, function (error, data) {
    if (error) {
        console.error('Error occurred:');
        if (error.error) {
            console.error('Message:', error.error);
            console.error('Status:', error.status);
        } else {
            console.error(JSON.stringify(error, null, 2));
        }
        return;
    }

    console.log('Response:');
    console.log(JSON.stringify(data, null, 2));
});
