"use client";

import Link from "next/link";
import React from "react";
import Input from "@/components/input";
import { handleEventFromClick } from "@/utils/utils";
import { LocalStorage, localstorageKey } from "@/utils/localstorage";
import { useRouter } from "next/navigation";

const EmailInput = () => {
  return (
    <div>
      <label className="underline text-sm">Email:</label>
      <Input placeholder="Mon identifiant" type="email" />
    </div>
  );
};

const PassWordInput = () => {
  return (
    <div>
      <label className="underline text-sm">Mot de passe:</label>
      <Input placeholder="Mon mot de passe" type="passwword" />
    </div>
  );
};

const ButtonNewConnection = () => {
  const router = useRouter();

  return (
    <div
      className="buttonNewConnection bg-[#050505] text-white text-sm rounded-md px-4 py-2 hover:bg-slate hover:cursor-pointer"
      onClick={(e) => {
        handleEventFromClick(e);

        //Met dans le localstorage, la clé isLogin avec une value à true.
        LocalStorage.setItem(localstorageKey.isLogin, true);
        router.push("/");
      }}
    >
      Me connecter
    </div>
  );
};

const Checkbox = () => {
  return (
    <div className="flex justify-center items-center gap-1 text-xs">
      <input type="checkbox" />
      <label>Se souvenir de moi</label>
    </div>
  );
};

const NewAccount = () => {
  return (
    <div className="flex justify-center items-center gap-3 underline hover:cursor-pointer text-sm">
      <Link href="/connection/signup">
        <p>Je n'ai pas de compte</p>
      </Link>
    </div>
  );
};

const AccountSettingPage = () => {
  return (
    <div className="flex-1 min-h-full bg-cover bg-[url('/meublehome.jpg')] flex flex-col items-start justify-start w-full">
      <div className="flex-1 min-h-full backdrop-blur-sm bg-white/30 w-full flex items-center justify-center">
        <div className="backdrop-blur-sm bg-white/30 rounded-xl w-1/3 h-96 flex flex-col justify-center items-center gap-3">
          <p className="text-xl font-bold">Je me connecte</p>
          <EmailInput />
          <PassWordInput />
          <div className="my-1" />
          <ButtonNewConnection />
          <div className="my-2" />
          <Checkbox />
          <NewAccount />
        </div>
      </div>
    </div>
  );
};

export default AccountSettingPage;
