import express from "express";
const app = express();


import productRoutes from './api/routes/products.js'
import orderRoutes from './api/routes/orders.js'
import bodyParser from "body-parser";


// the routes to handle the requests  
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);


// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));



// this will catch the error after nothing is found in the requests above 
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, nexrt) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

app

export default app;