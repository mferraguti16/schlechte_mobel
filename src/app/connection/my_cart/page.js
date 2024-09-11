"use client";

import React from "react";
import { MyCard } from "../../../components/my_card";
// import { Navbar } from "flowbite-react"; // Commented out or remove this line

const data = [{ title: "Mon panier", description: "description1" }];

const MyCart = () => {
  return (
    <div className="flex-1 min-h-full bg-cover bg-[url('/panier.jpg')] flex flex-col items-start justify-start w-full">
      <div className="flex-1 min-h-full bg-white/10 w-full flex items-center justify-center">
        <div className="backdrop-blur-sm bg-white/10 rounded-xl w-2/3 h-96 flex flex-col justify-start items-center p-4">
          <p className="text-xl font-bold mb-4">Mon panier</p>
          <div className="grid grid-cols-2 w-full gap-6">
            <div className="flex flex-col items-center p-10">
              <p className="text-md p-4">
                EXEMPLE D'UN MEUBLE DANS LE PANIER(PHOTO)
              </p>
            </div>
            <div className="flex flex-col items-center p-10">
              <p className="text-md p-4">
                PRIX + COMBIEN D'ÉLÉMENTS AJOUTÉS AU PANIER
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
