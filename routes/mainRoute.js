const express = require("express");
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res , next) => {
    const url = `https://api.iex.cloud/v1/data/core/intraday_prices/SOXL?token=${global.accessKey}`;
    const url2 =  `https://api.iex.cloud/v1/data/core/intraday_prices/AAPL?range=1mm&token=${global.accessKey}`
    try {
        axios.get(url2)
            .then(response => {
                const data = response.data;
                console.log(data);
            })

    } catch(e) {
        console.log(e);
    }
})

module.exports = router;