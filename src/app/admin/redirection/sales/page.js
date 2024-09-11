import React from "react";
const Title = () => {
  return (
    <h1 className="text-2xl font-bold flex justify-center items-center m-4">
      Annonces des clients
    </h1>
  );
};
const Text = () => {
  return <p className="text-sm">Description du meuble</p>;
};
const ButtonValidation = () => {
  return (
    <button className="bg-[#050505] text-white text-sm rounded-md px-3 py-1 mb-2">
      Valider
    </button>
  );
};
const ButtonDenied = () => {
  return (
    <button className="bg-[#050505] text-white text-sm rounded-md px-3 py-1">
      Refuser
    </button>
  );
};
const Card = ({ title, image }) => {
  return (
    <div className="backdrop-blur-sm bg-white/10 rounded-xl w-2/3 flex flex-col justify-center items-center my-4 p-2 shadow-md">
      <p className="text-md font-bold">{title}</p>
      <div className="flex justify-between items-center w-full mt-2">
        <img
          src={image}
          alt={title}
          className="w-40 h-40 object-cover rounded-md"
        />
        <Text />
        <div className="flex flex-col justify-center">
          <ButtonValidation />
          <ButtonDenied />
        </div>
      </div>
    </div>
  );
};
const AdminRedirection = () => {
  const cardsData = [
    { id: 1, title: "Annonce 1", image: "https://placehold.co/600x400" },
    { id: 2, title: "Annonce 2", image: "https://placehold.co/600x400" },
    { id: 3, title: "Annonce 3", image: "https://placehold.co/600x400" },
    { id: 3, title: "Annonce 4", image: "https://placehold.co/600x400" },
  ];
  return (
    <div className="flex-1 min-h-screen bg-fixed bg-cover bg-center bg-[url('/admin.jpg')] flex flex-col items-center justify-start w-full">
      <div className="pt-16 w-full">
        <Title />
      </div>
      <div className="w-full flex flex-col items-center">
        {cardsData.map((card) => (
          <Card key={card.id} title={card.title} image={card.image} />
        ))}
      </div>
    </div>
  );
};
export default AdminRedirection;
