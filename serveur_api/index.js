//Import Express en CommonJS
const express = require("express");

const { userRouter } = require("./router/users");
const { furnitureRouter } = require("./router/furnitures");

//On crée une app express
const app = express();
const port = process.env.PORT ?? 5001;

//initialisation de PrismaClient
const data = [];

app.use(express.json());

// app.get("/health", (_, res) => {
//   res.status(200);
//   res.json({ message: "everything is fine !" });
// });

userRouter({ app });
furnitureRouter({ app });

app.post("/furnitures", (req, res) => {
  const body = req.body;
  const length = data.length;

  const elementAInserer = {
    id: length + 1,
    name: body.name,
    description: body.description,
  };

  data.push(elementAInserer);
  res.json({ data: elementAInserer });
});

app.get("/furnitures", (_, res) => {
  res.status(200);
  res.json({ data: data });
});

app.all("*", (_, res) => {
  res.status(404);
  res.json({ message: "La route demandée n'existe pas" });
});

app.listen(port, () => {
  console.log("------------------------");
  console.log("🚀 server started");
  console.log("Listening on port:", port);
  console.log(`Path: http://localhost:${port}`);
  console.log("------------------------");
});
