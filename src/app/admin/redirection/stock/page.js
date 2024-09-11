import React from "react";

const Title = () => {
  return (
    <h1 className="text-2xl font-bold flex justify-center items-center m-4">
      Mon stock
    </h1>
  );
};

const Text = (props) => {
  return <p className="text-sm">{props.description}</p>;
};

// TO Do faire un bouton pour commander au fournisseur
// const ButtonValidation = () => {
//   return (
//     <button className="bg-[#050505] text-white text-sm rounded-md px-3 py-1 mb-2">
//       Valider
//     </button>
//   );
// };

const Card = ({ title, image, description }) => {
  return (
    <div className="backdrop-blur-sm bg-white/10 rounded-xl w-2/3 flex flex-col justify-center items-center my-4 p-2 shadow-md">
      <p className="text-md font-bold">{title}</p>
      <div className="flex justify-between items-center w-full mt-2">
        <img
          src={image}
          alt={title}
          className="w-40 h-40 object-cover rounded-md"
        />
        <Text description={description} />
        <div className="flex flex-col justify-center"></div>
      </div>
    </div>
  );
};

const AdminRedirection = () => {
  const cardsData = [
    {
      id: 1,
      title: "Annonce 1",
      image:
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "ma description 1",
    },
    {
      id: 2,
      title: "Annonce 2",
      image:
        "https://plus.unsplash.com/premium_photo-1681980019667-96baeb36fc33?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "ma description 2",
    },
    {
      id: 3,
      title: "Annonce 3",
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "ma description 3",
    },
    {
      id: 4,
      title: "Annonce 4",
      image:
        "https://images.unsplash.com/photo-1565791380713-1756b9a05343?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "ma description 4",
    },

    {
      id: 5,
      title: "Annonce 5",
      image:
        "https://images.unsplash.com/photo-1690310588492-fc8f92bff323?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "ma description 5",
    },

    {
      id: 6,
      title: "Annonce 6",
      image:
        "https://images.unsplash.com/photo-1634148737510-727f137375e0?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "ma description 5",
    },
  ];

  return (
    <div className="flex-1 min-h-screen bg-fixed bg-cover bg-center bg-[url('/admin.jpg')] flex flex-col items-center justify-start w-full">
      <div className="pt-16 w-full">
        <Title />
      </div>
      <div className="w-full flex flex-col items-center">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminRedirection;
