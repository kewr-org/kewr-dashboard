const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()

app.use(cors())

app.get("/", (req, res) => {
    res.send("Tes123");
    });

app.get("/balances/osmo", async (req, res) => {
        try {
            const response = await axios({
                url: "https://api.osmosis.interbloc.org/cosmos/bank/v1beta1/balances/osmo1jm26j8mj9yd2esphfs4n9ts49jwnyvyj7tjnm3",
                method: "get",
            });
            res.status(200).json(response.data);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    });

app.listen(5000, () => {
    console.log('server running at 5000')
    })

