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

app.get("/balances/iris", async (req, res) => {
        try {
            const response = await axios({
                url: "https://lcd-iris.keplr.app/bank/balances/iaa1jm26j8mj9yd2esphfs4n9ts49jwnyvyjrjpj0j",
                method: "get",
            });
            res.status(200).json(response.data);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    });

app.get("/balances/crescent", async (req, res) => {
        try {
            const response = await axios({
                url: "https://mainnet.crescent.network:1317/cosmos/bank/v1beta1/balances/cre1jm26j8mj9yd2esphfs4n9ts49jwnyvyjjcjxcw",
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

