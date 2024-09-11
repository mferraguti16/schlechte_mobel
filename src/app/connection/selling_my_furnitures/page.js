import React from "react";
import Input from "@/components/input";

const SellingFurniture = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div>
        <label className="underline text-sm">Catégorie:</label>
        <Input placeholder="Catégorie" type="text" />
      </div>

      <div>
        <label className="underline text-sm">Matériaux:</label>
        <Input placeholder="matériaux" type="text" />
      </div>

      <div>
        <label className="underline text-sm">Couleur:</label>
        <Input placeholder="Couleur" type="color" />
      </div>

      <div>
        <label className="underline text-sm">Prix:</label>
        <Input placeholder="Prix" type="number" />
      </div>

      <div className="col-span-2">
        <label className="underline text-sm">État:</label>
        <Input placeholder="État" type="number" />
      </div>

      <div className="col-span-2">
        <label className="underline text-sm">Photo:</label>
        <Input placeholder="Photo" type="file" />
      </div>

      <div className="col-span-2 flex justify-center mt-4">
        <button className="bg-transparent hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          Valider
        </button>
      </div>
    </div>
  );
};

const FormSellingFurniture = () => {
  return (
    <div className="flex-1 min-h-full bg-cover bg-[url('/brocante.jpg')] flex flex-col items-start justify-start w-full">
      <div className="flex-1 min-h-full backdrop-blur-sm bg-white/10 w-full flex items-center justify-center">
        <div className="backdrop-blur-sm bg-white/30 rounded-xl w-2/3 h-96 flex flex-col justify-center items-center gap-3">
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-xl font-bold">Je vends mon meuble</p>
            <SellingFurniture />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSellingFurniture;
