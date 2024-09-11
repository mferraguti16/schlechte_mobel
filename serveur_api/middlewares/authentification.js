const { PrismaClient } = require("@prisma/client");
const prismaClient = new PrismaClient();

const authentificationMiddleware = async (req, res, next) => {
  //On récupere la session ID dans le header de la requete X-Session-Id
  const headerValue = req.get("X-Session-Id");

  //On vérif que on a bien la value.
  if (headerValue === null || headerValue === undefined) {
    res.status(401);
    res.json({ message: "Il manque le header X-Session-Id dans la requete" });
    return;
  }

  const session = await prismaClient.sessions.findFirst({
    where: {
      id: {
        equals: Number(headerValue),
      },
    },
  });

  //On vérif que la session existe
  if (session === null || session === undefined) {
    res.status(401);
    res.json({ message: "L'identifiant de session donné n'existe pas" });
    return;
  }

  //On vérif que la session n'est pas expirée.
  const now = new Date().getTime();
  const expiresAt = new Date(session.expiresat).getTime();

  if (now > expiresAt) {
    res.status(401);
    res.json({ message: "Votre session est expirée" });
    return;
  }

  next();
};

//⚠️ A mettre absolument après authentificationMiddleware
const isAdmin = async (req, res, next) => {
  const headerValue = req.get("X-Session-Id");

  const session = await prismaClient.sessions.findFirst({
    where: {
      id: {
        equals: Number(headerValue),
      },
    },
  });

  const userId = session.userid;

  const user = await prismaClient.users.findFirst({
    where: {
      user_id: userId,
    },
  });

  if (user === null || user === undefined) {
    res.status(403);
    res.json({ message: "L'utilisateur de votre session n'existe pas" });
    return;
  }

  //Id d'un role Admin => 1
  if (user.role !== 1) {
    res.status(403);
    res.json({ message: "Vous n'etes pas un admin." });
  }

  next();
};

module.exports = {
  authentificationMiddleware,
  isAdmin,
};
