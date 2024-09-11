"use client";

export const localstorageKey = {
  isLogin: "isLogin",
};

export const LocalStorage = {
  setItem: (key, value) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  },
  getItem: (key) => {
    if (typeof window !== "undefined") {
      const data = window.localStorage.getItem(key);

      try {
        //Nous permet de retrouver le vrai type car localstorage.setItem ne prend que des string.
        return JSON.parse(data);
      } catch {
        //Si le JSON.parse échoue, ça veut dire que l'on ne peut pas parser.
        //=> on retourne la valeur telle quelle.
        return data;
      }
    }
  },
};