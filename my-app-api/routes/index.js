const express = require('express');
const router = express.Router();

// Define the discount and n variables in-memory
let discountCode = "";
let n = 0;
let transactionCount = 0;

// Admin APIs
router.post('/admin/set-n', function(req, res) {
    n = req.body.n;
    res.send(`N set to ${n}`);
});

router.post('/admin/set-discount-code', function(req, res) {
    discountCode = req.body.discountCode;
    res.send(`Discount code set to ${discountCode}`);
});

// Customer APIs
router.get('/customer/check-discount', function(req, res) {
    if(transactionCount % n === 0 && transactionCount !== 0) {
        res.json({
            hasDiscount: true,
            discountCode
        });
    } else {
        res.json({
            hasDiscount: false
        });
    }
});

router.post('/customer/make-purchase', function(req, res) {
    transactionCount++;
    res.send('Purchase made');
});

// Report API
router.get('/admin/report', function(req, res) {
    const discountGivenCount = Math.floor(transactionCount / n);
    res.json({
        totalPurchases: transactionCount,
        totalDiscountsGiven: discountGivenCount
    });
});

module.exports = router;