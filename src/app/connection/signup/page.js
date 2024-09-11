"use client";

import Link from "next/link";
import Input from "@/components/input";
import React from "react";

const MyAccount = () => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex flex-row justify-between text-lg font-medium gap-20">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="underline text-sm">Nom:</label>
            <Input placeholder="Nom" type="text" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="underline text-sm">Prénom:</label>
            <Input placeholder="Prénom" type="text" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="underline text-sm">Mail:</label>
            <Input placeholder="acme@mail.com" type="email" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="underline text-sm">Mot de passe:</label>
            <Input placeholder="Mot de passe" type="password" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="underline text-sm">Adresse:</label>
            <Input placeholder="Adresse" type="text" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="underline text-sm">Tel:</label>
            <Input placeholder="+33" type="phone" />
          </div>
        </div>
      </div>
      <Link href="/" className="mt-6">
        <button className="bg-black text-white text-sm rounded-md px-4 py-2 hover:bg-slate">
          Valider
        </button>
      </Link>
    </div>
  );
};

const FormNewAccount = () => {
  return (
    <div className="flex-1 min-h-full bg-cover bg-[url('/meublehome.jpg')] flex flex-col items-start justify-start w-full">
      <div className="flex-1 min-h-full backdrop-blur-sm bg-white/10 w-full flex items-center justify-center">
        <div className="backdrop-blur-sm bg-white/30 rounded-xl w-2/3 h-96 flex flex-col justify-center items-center gap-5">
          <div className="justify-center flex flex-col items-center w-full">
            <h1 className="text-xl font-black">Créer mon compte</h1>
            <MyAccount />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormNewAccount;
