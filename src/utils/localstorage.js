export const localstorageKey = {
  isLogin: "isLogin",
};

export const LocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {

    try {
      const data = localStorage.getItem(key);
      //Nous permet de retrouver le vrai type car localstorage.setItem ne prend que des string.
      return JSON.parse(data);
    } catch (error) {
      //Si le JSON.parse échoue, ça veut dire que l'on ne peut pas parser.
      //=> on retourne la valeur telle quelle.
      return
      // return data;
    }
  },
};