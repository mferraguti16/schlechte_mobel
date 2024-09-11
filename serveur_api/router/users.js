const { PrismaClient } = require("@prisma/client");
const prismaClient = new PrismaClient();
const { hash, compare } = require("bcrypt");

const userRouter = ({ app }) => {
  app.get("/users", async (_, res) => {
    const users = await prismaClient.users.findMany();

    res.status(200);
    res.json({
      count: users.length,
      data: users,
    });
  });

  app.post("/register/admin", async (req, res) => {
    const body = req.body;

    //récupérer en DB le role qui correspond à ADMIN
    const role = await prismaClient.roles.findFirst({
      where: {
        name: {
          equals: "Admin",
        },
      },
    });

    //On va hash le mot de passe.
    const hashedPassword = await hash(
      body.password,
      Number(process.env.SALT_TOKEN)
    );

    //Insérer dans user le body
    const user = await prismaClient.users.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword,
        surname: body.surname,
        phone: body.phone,
        role: role.role_id,
      },
    });

    res.status(201);
    res.json({ count: 1, data: user });
  });

  app.post("/signin/admin", async (req, res) => {
    const body = req.body;

    const { email, password } = body;

    //Je récupère le user associé au mail.
    const user = await prismaClient.users.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    });

    if (!user) {
      res.status(404);
      res.json({ message: `L'utilisateur ${email} n'a pas été trouvé` });
      return;
    }

    const isValid = await compare(password, user.password);

    if (isValid === false) {
      res.status(400);
      res.json({ message: "Le mot de passe fourni n'est pas le bon." });
      return;
    }

    //Creer une session

    //Get current epoch
    const currentEpoch = new Date().getTime();
    //Add 15 jours en millisecond
    const expiresAtInMilliseconds = currentEpoch + 15 * 24 * 60 * 60 * 1000;
    //Transform en date
    const date = new Date(expiresAtInMilliseconds).toISOString();

    const session = await prismaClient.sessions.create({
      data: {
        userid: user.user_id,
        expiresat: date,
      },
    });

    res.status(200);
    res.json({ count: 1, data: { user, session } });
  });

  app.post("/register/user", async (req, res) => {
    const body = req.body;
    const role = await prismaClient.roles.findFirst({
      where: {
        name: {
          equals: "Member",
        },
      },
    });

    const hashedPassword = await hash(
      body.password,
      Number(process.env.SALT_TOKEN)
    );

    const user = await prismaClient.users.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword,
        surname: body.surname,
        phone: body.phone,
        role: role.role_id,
      },
    });

    res.status(201);
    res.json({ count: 1, data: user });
  });

  app.post("/signin/user", async (req, res) => {
    const body = req.body;

    const { email, password } = body;

    //Je récupère le user associé au mail.
    const user = await prismaClient.users.findFirst({
      where: {
        email: {
          equals: email,
        },
      },
    });

    if (!user) {
      res.status(404);
      res.json({ message: `L'utilisateur ${email} n'a pas été trouvé` });
      return;
    }

    const isValid = await compare(password, user.password);

    if (isValid === false) {
      res.status(400);
      res.json({ message: "Le mot de passe fourni n'est pas le bon." });
      return;
    }

    res.status(200);
    res.json({ count: 1, data: user });
  });
};

module.exports = {
  userRouter,
};
