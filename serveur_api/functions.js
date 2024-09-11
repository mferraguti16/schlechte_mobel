require("dotenv").config();
const pg = require("pg");
const { Pool, Client } = pg;

// ==== This takes the connectionString from the .env config file
const connectionString = process.env.DATABASE_URL;

// ==== Opening a pool of 'clients'
const pool = new Pool({
  connectionString,
});
// ==== Checking errors when idle
pool.on("error", (error, client) => {
  console.error("Error on idle client", error);
  process.exit(-1);
});

module.exports = {
  addUserToDatabase,
  checkDoublonMailDb,
  addFurniture,
};

async function checkDoublonMailDb(email) {
  try {
    const client = await pool.connect();

    const double = "SELECT user_id, email from users where users.email = $1";
    const params = [email];

    const result = await client.query(double, params);
    console.log(result.rows);

    if (result.rows.length >= 1) {
      //console.log("Il semblerait qu'il y ait un doublon😕.")
      client.release();
      return true;
    }
    client.release();
    return false;
  } catch (error) {
    console.log(error);
  }
}
//checkDoublonMailDb('onice.com').then((data)=>console.log(data))

async function addUserToDatabase(name, surname, email, password) {
  const client = new Client({
    connectionString,
  });

  try {
    await client.connect();

    const yadoublon = await checkDoublonMailDb(email);
    if (!yadoublon) {
      //ajouter une nouvelle ligne à la  table
      const result = await client.query(
        "INSERT INTO users (name, surname, email, password) VALUES ($1,$2,$3,$4)",
        [name, surname, email, password]
      );
      console.log(`Ajouté ${result.rowCount} ligne(s)`);

      await client.end();
      return true;
    } else {
      //console.log('Jai rien ajouté')
      await client.end();
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

//addUserToDatabase('William', 'Lawson', 'onice.com', 'onzerocks')//

async function addFurniture(
  categoryId,
  materialId,
  conditionId,
  color_mainId,
  color_secondaryId,
  dimensions,
  price
) {
  const client = await pool.connect(); //connexion du client //
  try {
    await client.query("pending routing /addFurniture"); //attente request du client au niveau du server//

    const insertFurnitureText =
      "INSERT INTO furniture (category, material, condition, color_main, color_secondary, dimensions, price) VALUES ($1, $2, $3, $4, $5, $6, $7)"; //écrit grâce à la request SQL les columns en texte avec les params ($) need ligne under//
    const insertFurnitureValues = [
      categoryId,
      materialId,
      conditionId,
      color_mainId,
      color_secondaryId,
      dimensions,
      price,
    ]; //définition des paramètres ($)//
    const resultat = await client.query(
      insertFurnitureText,
      insertFurnitureValues
    ); //dans une const resultat fait le lien avec le texte et les valeurs correspondantes//
    console.log(resultat);

    // client.release();
  } catch (error) {
    console.log("Error routing /addFurniture", error);
  } finally {
    client.release(); // Executé quoi qu'il arrive.
  }
}

// addFurniture('chaise', 'bois', 'bon état', 'rouge', 'blanc', '90x40x35', '15')
