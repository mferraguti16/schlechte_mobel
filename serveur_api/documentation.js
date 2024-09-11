const express = require('express')
const app = express()
const documentationRoute = express.Router();


// require("dotenv").config();
// const pg = require("pg");
// const { Pool, Client } = pg;

// const connectionString = process.env.DATABASE_URL;
// const pool = new Pool({
//     connectionString
// });


module.exports = { documentationRoute }
documentationRoute.all("/", (req, res) => {

    res.json(
        [
            {
                info: "Retrieve all furnitures starting at 'id' with a limit, if no query limit defaults to 10",
                at: "/furnitures",
                queryKeywords: ["id", "limit"],
                example: "/furnitures?limit=2"
            },
            {
                info: "Retrieve furnitures by category id, limit defaults to 10",
                at: "/furnitures/category",
                queryKeywords: ["id", "limit"],
                example: "/furnitures/category?id=2&limit=20"
            },
            {
                info: "Retrieve a unique furniture by id",
                at: "/furnitures/item",
                queryKeywords: ["id"],
                example: "/furnitures/item?id=1"
            },
            {
                info: "Retrieve all furnitures by color id with a limit",
                at: "/furnitures/color",
                queryKeywords: ["id", "limit"],
                example: "/furnitures/color?id=2"
            },
            {
                info: "Retrieve all furnitures by condition id with a limit",
                at: "/furnitures/condition",
                queryKeywords: ["id", "limit"],
                example: "/furnitures/condition?id=4"
            },
            {
                info: "Retrieve all furnitures within a price range",
                at: "/furnitures/price",
                queryKeywords: ["min", "max", "limit"],
                example: "/furnitures/price?min=700&max=2000"
            },
            {
                info: "[POST] Add a new user in DB without any doppelganger",
                at: "/newuser",
                body: {
                    name: "name",
                    surname: "surname",
                    email: "email",
                    password: "password"
                }
            },
        ]
    )
    res.end();
});
