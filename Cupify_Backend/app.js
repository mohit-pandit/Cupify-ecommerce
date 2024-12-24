const express = require('express');
const dotenv = require('dotenv');
const swaggerJSdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const routes = require('./routes/index');

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5500;

// Swagger options
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Cupify API Docs',
            version: '1.0.0',
        },
        servers: [
            {
                url: `http://localhost:${port}`,
                description: 'Local Server',
            },
            {
                url: `http://cupifyapi.in`,
                description: 'Prod Server',
            },
            {
                url: `http://preprodcupifyapi.in`,
                description: 'PreProd Server',
            },
        ],
    },
    apis: ['./routes/*.js'], // Path to API documentation
};

const swaggerSpec = swaggerJSdoc(options);

// Middleware
app.use(express.json());

// Swagger setup
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use('/Cupifyapi', routes);

// Sample endpoint
app.get('/welcome', (req, res) => {
    res.send('Welcome to Cupify backend');
});

app.listen(port, () => {
    console.log(`Cupify Backend is listening on port ${port}`);
});
