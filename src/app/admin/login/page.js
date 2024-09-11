//import { Input } from "postcss";
import { Button } from "@/components/button";
import Input from "@/components/input";

const AdminLogin = () => {
  return (
    <div className="flex-1 min-h-full bg-cover bg-[url('/admin.jpg')]"></div>
  );
};

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
      <Input placeholder="Mon mot de passe" type="password" />
    </div>
  );
};

const ButtonNewConnection = () => {
  return <Button>Me connecter</Button>;
};

const AdminPage = () => {
  return (
    <div className="flex-1 min-h-full bg-cover bg-[url('/admin.jpg')] flex flex-col items-start justify-start w-full">
      <div className="flex-1 min-h-full bg-white/10 w-full flex items-center justify-center">
        <div className="backdrop-blur-sm bg-white/10 rounded-xl w-1/3 h-96 flex flex-col justify-center items-center gap-3">
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="text-xl font-bold">Mon site</p>
            <p className="text-sm font-bold">(espace administrateur)</p>
          </div>
          <EmailInput />
          <PassWordInput />
          <div className="my-3">
            <ButtonNewConnection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
