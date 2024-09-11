const express = require('express')
const app = express()
const router = express.Router();

const {
    getFurnituresByCategory,
    getFurnitureById,
    getAllFurnitures,
    getFurnituresByColor,
    getFurnituresByCondition,
    getFurnituresByPrice } = require("./queries.js");


module.exports = { router }

// ==== Sends all furnitures, limited by 10 default
router.all("/furnitures", async (req, res) => {

    try {
        const limit = req.query.limit
        const startingId = req.query.id

        const data = await getAllFurnitures(startingId, limit)

        res.json(data);
        res.end();
    } catch (error) {
        console.log(error)
        res.sendStatus(400);
        res.end();
    }
})

// ==== Sends a specifid category
router.route("/furnitures/category")
    .get(async (request, response) => {
        try {
            const categoryId = request.query.id;
            const limit = request.query.limit;
            const data = await getFurnituresByCategory(categoryId, limit)

            response.json(data);
            response.end();

        } catch (error) {
            console.log("Error routing GET /furnitures/category", error);
            response.sendStatus(400);
            response.end();
        }
    })

// ==== Sends a specific item
router.route("/furnitures/item")
    .get(async (request, response) => {
        try {
            const itemId = request.query.id;
            const data = await getFurnitureById(itemId);

            response.json(data);
            response.end();

        } catch (error) {
            console.log("Error routing GET /furnitures/item", error);
            response.sendStatus(400);
            response.end();
        }
    })

// ==== Color filter
router.route("/furnitures/color")
    .get(async (request, response) => {
        try {
            const itemId = request.query.id;
            const limit = request.query.limit;
            const data = await getFurnituresByColor(itemId, limit);

            response.json(data);
            response.end();

        } catch (error) {
            console.log("Error routing GET /furnitures/color", error);
            response.sendStatus(400);
            response.end();
        }
    })

// ==== Condition filter
router.route("/furnitures/condition")
    .get(async (request, response) => {
        try {
            const conditionId = request.query.id;
            const limit = request.query.limit;
            const data = await getFurnituresByCondition(conditionId, limit);

            response.json(data);
            response.end();

        } catch (error) {
            console.log("Error routing GET /furnitures/condition", error);
            response.sendStatus(400);
            response.end();
        }
    })

// ==== Price filter
router.route("/furnitures/price")
    .get(async (request, response) => {
        try {
            const minPrice = parseInt(request.query.min);
            const maxPrice = parseInt(request.query.max);
            const limit = request.query.limit;

            const data = await getFurnituresByPrice(minPrice, maxPrice, limit);

            response.json(data);
            response.end();

        } catch (error) {
            console.log("Error routing GET /furnitures/price", error);
            response.sendStatus(400);
            response.end();
        }
    })