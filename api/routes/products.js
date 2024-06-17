import express from 'express';
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling a GET request to /products'
    });
})

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: 'Handling a POST request to /products',
        createdProduct: product
    });
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You unveled the special ID',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed an id'
        })
    }
})

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'Updated the product',
        id: id
    })
})

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'Deleted the product',
        id: id
    })
})

export default router;
