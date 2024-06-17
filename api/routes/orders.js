import express from 'express';
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Oders were fetched'
    })
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Oders were created'
    })
})

router.get('/:orderId', (req, res, next) => {

    res.status(200).json({
        message: 'Oders details',
        orderId: req.params.orderId
    });
})

router.delete('/:orderId', (req, res, next) => {

    res.status(200).json({
        message: 'Oders deleted',
        orderId: req.params.orderId
    });
})

export default router;
