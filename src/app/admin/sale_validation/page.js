//import { Input } from "postcss";
// import Input from "@/components/input";

// const AdminLogin = () => {
//   return (
//     <div className="flex-1 min-h-full bg-cover bg-[url('/admin.jpg')]"></div>
//   );
// };

const ButtonValidation = () => {
  return (
    <button className="buttonNewConnection bg-[#050505] text-white text-lg rounded-md px-4 py-2 hover:bg-slate">
      Valider la vente
    </button>
  );
};

const ButtonDenide = () => {
  return (
    <button className="buttonNewConnection bg-[#050505] text-white text-lg rounded-md px-4 py-2 hover:bg-slate">
      Refuser la vente
    </button>
  );
};

const AdminPage = () => {
  return (
    <div className="flex-1 min-h-full bg-cover bg-[url('/admin.jpg')] flex flex-col items-start justify-start w-full">
      <div className="flex-1 min-h-full bg-white/10 w-full flex items-center justify-center">
        <div className="backdrop-blur-sm bg-white/10 rounded-xl w-1/3 h-96 flex flex-col justify-center items-center gap-3">
          <p className="text-xl font-bold">Vente.s à valider</p>
          <div className="my-6" />
          <div className="flex flex-row gap-6 ">
            <ButtonValidation />
            <ButtonDenide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
