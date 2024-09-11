const {
  authentificationMiddleware,
  isAdmin,
} = require("../middlewares/authentification");
const { PrismaClient } = require("@prisma/client");
const prismaClient = new PrismaClient();

const furnitureRouter = ({ app }) => {
  app.get(
    "/furnitures/stand-by/me",
    authentificationMiddleware,
    async (req, res) => {
      const headerValue = req.get("X-Session-Id");

      const session = await prismaClient.sessions.findFirst({
        where: {
          id: {
            equals: Number(headerValue),
          },
        },
      });

      const userId = session.userid;

      const myFurnituresLinked = await prismaClient.furniture_user.findMany({
        where: {
          user_id: {
            equals: userId,
          },
        },
      });

      if (!myFurnituresLinked || myFurnituresLinked.length === 0) {
        res.json({ count: 0, data: [] });
        return;
      }

      const myFurnitures = await prismaClient.furnitures.findMany({
        where: {
          AND: {
            furniture_id: {
              in: myFurnituresLinked.map((data) => data.furniture_id),
            },
            state: {
              equals: 1, //Id de Stand By
            },
          },
        },
      });

      res.json({
        count: myFurnitures.length,
        data: myFurnitures,
      });
    }
  );

  app.get(
    "/furnitures/stand-by",
    authentificationMiddleware,
    async (req, res) => {
      const headerValue = req.get("X-Session-Id");

      const session = await prismaClient.sessions.findFirst({
        where: {
          id: {
            equals: Number(headerValue),
          },
        },
      });

      const userId = session.userid;

      const myFurnituresLinked = await prismaClient.furniture_user.findMany({
        where: {
          user_id: {
            not: { equals: userId },
          },
        },
      });

      if (!myFurnituresLinked || myFurnituresLinked.length === 0) {
        res.json({ count: 0, data: [] });
        return;
      }

      const myFurnitures = await prismaClient.furnitures.findMany({
        where: {
          AND: {
            furniture_id: {
              in: myFurnituresLinked.map((data) => data.furniture_id),
            },
            state: {
              equals: 1, //Id de Stand By
            },
          },
        },
      });

      res.json({
        count: myFurnitures.length,
        data: myFurnitures,
      });
    }
  );

  app.post(
    "/furnitures/validate/:furnitureId",
    authentificationMiddleware,
    isAdmin,
    async (req, res) => {
      const furnitureId = req.params.furnitureId;

      //On vérifie que l'id existe

      const furniture = await prismaClient.furnitures.findFirst({
        where: {
          furniture_id: {
            equals: Number(furnitureId),
          },
        },
      });

      if (furniture === undefined || furniture === null) {
        res.status(404);
        res.json({ message: "L'identifiant donné n'existe pas" });
        return;
      }

      //On vérifie que le statut de cet furnitures n'est pas déjà validé ou refusé.
      if (furniture.state === 2 || furniture.state === 3) {
        res.status(400);
        res.json({
          message:
            "Vous ne pouvez pas valider cette annonce car elle est déjà validée ou rejetée",
        });
        return;
      }

      const updatedFurniture = await prismaClient.furnitures.update({
        data: {
          state: 2, // Valider
        },
        where: {
          furniture_id: furniture.furniture_id,
        },
      });

      res.status(200);
      res.json({ data: updatedFurniture, count: 1 });
    }
  );

  app.post(
    "/furnitures/rejected/:furnitureId",
    authentificationMiddleware,
    isAdmin,
    async (req, res) => {
      const furnitureId = req.params.furnitureId;

      //On vérifie que l'id existe

      const furniture = await prismaClient.furnitures.findFirst({
        where: {
          furniture_id: {
            equals: Number(furnitureId),
          },
        },
      });

      if (furniture === undefined || furniture === null) {
        res.status(404);
        res.json({ message: "L'identifiant donné n'existe pas" });
        return;
      }

      //On vérifie que le statut de cet furnitures n'est pas déjà validé ou refusé.
      if (furniture.state === 2 || furniture.state === 3) {
        res.status(400);
        res.json({
          message:
            "Vous ne pouvez pas valider cette annonce car elle est déjà validée ou rejetée",
        });
        return;
      }

      const updatedFurniture = await prismaClient.furnitures.update({
        data: {
          state: 3, // Refuser
        },
        where: {
          furniture_id: furniture.furniture_id,
        },
      });

      res.status(200);
      res.json({ data: updatedFurniture, count: 1 });
    }
  );

  app.patch(
    "/furnitures/:furnitureId",
    authentificationMiddleware,
    isAdmin,
    async (req, res) => {
      const furnitureId = req.params.furnitureId;

      const furniture = await prismaClient.furnitures.findFirst({
        where: {
          furniture_id: {
            equals: Number(furnitureId),
          },
        },
      });

      if (furniture === undefined || furniture === null) {
        res.status(404);
        res.json({ message: "L'identifiant de furniture donné n'existe pas" });
        return;
      }

      const body = req.body;

      if (
        body === undefined ||
        body === null ||
        Object.keys(body).length === 0
      ) {
        res.status(400);
        res.json({ message: "Vous n'avez envoyé aucune donnée à modifier" });
        return;
      }

      let bodyHasAnUnknownKey = false;
      if (
        Object.keys(body).forEach((key) => {
          if (Object.keys(furniture).includes(key) === false) {
            bodyHasAnUnknownKey = true;
          }
        })
      );

      if (bodyHasAnUnknownKey === true) {
        res.status(400);
        res.json({ message: "Vous avez passé une clé qui n'existe pas" });
        return;
      }

      if (body.category) {
        //Check si la catégorie existe avec l'id envoyé.
        const category = await prismaClient.categories.findFirst({
          where: {
            category_id: Number(body.category),
          },
        });

        if (category === undefined || category === null) {
          res.status(400);
          res.json({ message: "La catégorie que vous demander n'existe pas" });
        }
      }

      if (body.material) {
        const material = await prismaClient.materials.findFirst({
          where: {
            material_id: Number(body.material),
          },
        });

        if (material === undefined || material === null) {
          res.status(400);
          res.json({ message: "Le matéoreix que vous demandez n'existe pas" });
          return;
        }
      }

      if (body.condition) {
        const condition = await prismaClient.conditions.findFirst({
          where: {
            condition_id: Number(body.condition),
          },
        });

        if (condition === undefined || condition === null) {
          res.status(400);
          res.json({ message: "Le matéoreix que vous demandez n'existe pas" });
          return;
        }
      }

      if (body.color_main) {
        const color_main = await prismaClient.colors.findFirst({
          where: {
            color_id: Number(body.color_main),
          },
        });

        if (color_main === undefined || color_main === null) {
          res.status(400);
          res.json({ mesage: "La couleur que vous demandez n'existe pas" });
          return;
        }
      }

      if (body.color_secondary) {
        const color_secondary = await prismaClient.colors.findFirst({
          where: {
            color_id: Number(body.color_secondary),
          },
        });

        if (color_secondary === undefined || color_secondary === null) {
          res.status(400);
          res.json({ message: "La couleur que vous demandez n'existe pas" });
          return;
        }
      }

      const updatedFurniture = await prismaClient.furnitures.update({
        data: {
          dimension: body.dimension,
          price: body.price,
          image: body.image,
          description: body.description,
          category: body.category,
          material: body.material,
          condition: body.condition,
          color_main: body.color_main,
          color_secondary: body.color_secondary,
        },
        where: {
          furniture_id: Number(furnitureId),
        },
      });

      res.status(200), res.json({ data: updatedFurniture, count: 1 });
    }
  );
};

module.exports = {
  furnitureRouter,
};
