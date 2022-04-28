# Getting Started with Gramoday backend server

This project is created with Node.js, Express.js and MongoDB.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the server in the development mode.\

<!-- ### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. -->

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

## Manual API Testing

You can use any Rest API Client (eg. Postman) to send API requests to the server.

### `POST /reports`

Provide the commodity data in body of the POST api request at `http://localhost:4000/reports` to receive the response with commodity reportID.

### `GET /reports?reportID=<commodity-reportID>`

Provide the commodity reportID in query of the GET api request at `http://localhost:4000/reports?reportID=<commodity-reportID>` to receive the response with commodity data.

