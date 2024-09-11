require("dotenv").config();
const pg = require("pg");
const { Pool, Client } = pg;

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
    connectionString
});

// ===========================================

module.exports = {
    getFurnituresByCategory,
    getFurnitureById,
    getAllFurnitures,
    getFurnituresByColor,
    getFurnituresByCondition,
    getFurnituresByPrice
}

async function getFurnituresByCategory(categoryId, maxNumberResponse = 10) {

    const client = await pool.connect();

    const queryText = 'SELECT furnitures.furniture_id as id, furniture_user.user_id as seller_id, categories.name as category, materials.name as material, conditions.name as condition, colors.name as color_main, secondary.name as color_secondary, dimensions, price, description, image from furnitures right join furniture_user on furniture_user.furniture_id = furnitures.furniture_id left JOIN categories on category_id = furnitures.category left join colors on color_id = furnitures.color_main left join colors as secondary on secondary.color_id = furnitures.color_secondary left join conditions on condition_id = furnitures.condition left join materials on material_id = furnitures.material Where furnitures.category = $1 order by id limit $2;'
    const params = [categoryId, maxNumberResponse];

    try {
        const response = await client.query(queryText, params);
        // == TESTING PURPOSE ==
        // console.log(response.rows);

        return response.rows;

    } catch (error) {

        console.log("Error getting furnitures by category", error);
    }

    // Release the Client we took from Pool
    client.release();
}
// === Testing
// getFurnituresByCategory(2);
// return:
// [
//     {
//       furniture_id: 1,
//       category: 'Fauteuil',
//       material: 'Bois',
//       condition: 'Comme neuf',
//       color_main: 'Rouge',
//       color_secondary: 'Orange',
//       dimensions: '80x60x100',
//       price: 1200,
//       description: 'Fauteuil de ma Grand-Mère',
//       image: 'https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e'
//     },
//     {...}
//   ]

async function getFurnitureById(id) {
    const client = await pool.connect();

    const queryText = 'SELECT furnitures.furniture_id as id, furniture_user.user_id as seller_id, categories.name as category, materials.name as material, conditions.name as condition, colors.name as color_main, secondary.name as color_secondary, dimensions, price, description, image from furnitures right join furniture_user on furniture_user.furniture_id = furnitures.furniture_id left JOIN categories on category_id = furnitures.category left join colors on color_id = furnitures.color_main left join colors as secondary on secondary.color_id = furnitures.color_secondary left join conditions on condition_id = furnitures.condition left join materials on material_id = furnitures.material Where id = $1;'
    const params = [id];

    try {
        const response = await client.query(queryText, params);
        // == TESTING PURPOSE ==
        // console.log(response.rows);

        return response.rows;

    } catch (error) {
        console.log("Error getting furnitures by id", error);
    }
    // Release the Client we took from Pool
    client.release();
}
// getFurnitureById(2)

async function getAllFurnitures(startingId = 1, maxNumberResponse = 10) {

    const client = await pool.connect();

    const queryText = 'SELECT furnitures.furniture_id AS id, furniture_user.user_id as seller_id, categories.name AS category, materials.name AS material, conditions.name AS condition, colors.name AS color_main, secondary.name AS color_secondary, dimensions, price, description, image FROM furnitures right join furniture_user on furniture_user.furniture_id = furnitures.furniture_id LEFT JOIN categories ON category_id = furnitures.category LEFT JOIN colors ON color_id = furnitures.color_main LEFT JOIN colors AS secondary ON secondary.color_id = furnitures.color_secondary LEFT JOIN conditions ON condition_id = furnitures.condition LEFT JOIN materials ON material_id = furnitures.material WHERE id >= $1 ORDER BY id LIMIT $2;'
    const params = [startingId, maxNumberResponse];

    try {
        const response = await client.query(queryText, params);
        // == TESTING PURPOSE ==
        // console.log(response.rows);

        return response.rows;

    } catch (error) {
        console.log("Error getting all furnitures", error);
    }
    // Release the Client we took from Pool
    client.release();
}
// getAllFurnitures();

async function getFurnituresByColor(colorId, maxNumberResponse = 10) {
    const client = await pool.connect();

    const queryText = 'SELECT furnitures.furniture_id as id, furniture_user.user_id as seller_id, categories.name as category, materials.name as material, conditions.name as condition, colors.name as color_main, secondary.name as color_secondary, dimensions, price, description, image from furnitures right join furniture_user on furniture_user.furniture_id = furnitures.furniture_id left JOIN categories on category_id = furnitures.category left join colors on color_id = furnitures.color_main left join colors as secondary on secondary.color_id = furnitures.color_secondary left join conditions on condition_id = furnitures.condition left join materials on material_id = furnitures.material Where furnitures.color_main = $1 OR furnitures.color_secondary = $1 order by id limit $2;'
    const params = [colorId, maxNumberResponse];

    try {
        const response = await client.query(queryText, params);
        // == TESTING PURPOSE ==
        // console.log(response.rows);

        return response.rows;

    } catch (error) {
        console.log("Error getting furnitures by color", error);
    }
    // Release the Client we took from Pool
    client.release();
}
// getFurnituresByColor(2);

async function getFurnituresByCondition(conditionId, maxNumberResponse = 10) {
    const client = await pool.connect();

    const queryText = 'SELECT furnitures.furniture_id as id, furniture_user.user_id as seller_id, categories.name as category, materials.name as material, conditions.name as condition, colors.name as color_main, secondary.name as color_secondary, dimensions, price, description, image from furnitures right join furniture_user on furniture_user.furniture_id = furnitures.furniture_id left JOIN categories on category_id = furnitures.category left join colors on color_id = furnitures.color_main left join colors as secondary on secondary.color_id = furnitures.color_secondary left join conditions on condition_id = furnitures.condition left join materials on material_id = furnitures.material Where furnitures.condition = $1 order by id limit $2;'
    const params = [conditionId, maxNumberResponse];

    try {
        const response = await client.query(queryText, params);
        // == TESTING PURPOSE ==
        // console.log(response.rows);

        return response.rows;

    } catch (error) {
        console.log("Error getting furnitures by Condition", error);
    }
    client.release();
}
// getFurnituresByCondition(4);

async function getFurnituresByPrice(minPrice = 1, maxPrice = 5000, maxNumberResponse = 10) {
    const client = await pool.connect();

    const queryText = ' SELECT furnitures.furniture_id as id, furniture_user.user_id as seller_id, categories.name as category, materials.name as material, conditions.name as condition, colors.name as color_main, secondary.name as color_secondary, dimensions, price, description, image from furnitures right join furniture_user on furniture_user.furniture_id = furnitures.furniture_id left JOIN categories on category_id = furnitures.category left join colors on color_id = furnitures.color_main left join colors as secondary on secondary.color_id = furnitures.color_secondary left join conditions on condition_id = furnitures.condition left join materials on material_id = furnitures.material Where furnitures.price >= $1 AND furnitures.price < $2 order by id limit $3;'
    const params = [parseInt(minPrice), parseInt(maxPrice), maxNumberResponse];

    try {
        const response = await client.query(queryText, params);
        // == TESTING PURPOSE ==
        // console.log(response.rows);

        return response.rows;

    } catch (error) {
        console.log("Error getting furnitures by Price", error);
    }
    client.release();
}
// getFurnituresByPrice(750, 1000);

/// ===== TEMPORAIRE
async function checkMailDb(email) {
    try {
        const client = await pool.connect();

        const double = 'SELECT id, name from test where test.name = $1'
        const params = [email]

        const result = await client.query(
            double, params
        );
        console.log(result.rows)

        if (result.rows.length >= 1) {
            console.log("doublon")
        }

    } catch (error) {
        console.log(error)
    }
}
// checkMailDb('Jack')