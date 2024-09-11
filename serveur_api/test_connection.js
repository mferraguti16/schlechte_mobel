require("dotenv").config();
const pg = require("pg")
const { Pool, Client } = pg

// ==== This takes the connectionString from the .env config file
const connectionString = process.env.DATABASE_URL;

// ==== Opening a pool of 'clients'
const pool = new Pool({
    connectionString
});
// ==== Checking errors when idle
pool.on("error", (err, client) => {
    console.error("Error on idle client", err);
    process.exit(-1);
})

// ==== Connection as a single Client
// == The 'SELECT NOW()' query is basic to test a connection
// == even without any tables in DB
async function connection() {

    const client = new Client({
        connectionString,
    })
    await client.connect();

    const requestResult = await client.query('SELECT * from test');
    console.log(requestResult.rows)

    await client.end();
}
// connection();

// ==== Connecting with a pool for a single query
// == Let's the pool open
async function singlePoolQuery() {

    const response = await pool.query('SELECT NOW()');
    console.log(response.rows);
}
// singlePoolQuery();

// ==== Connecting with a Client from a Pool, use it,
// == then return the Client to the Pool to be ready for next use
async function queryWithPool() {

    const client = await pool.connect();
    const response = await client.query('SELECT * from test');
    console.log(response.rows);

    // Release the Client we took from Pool
    client.release();
}
// queryWithPool();