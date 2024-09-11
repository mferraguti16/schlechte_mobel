import React from "react";

const AdminRedirection = () => {
  return (
    <div className="flex-1 min-h-full bg-cover bg-[url('/admin.jpg')] flex flex-col items-start justify-start w-full">
      <div className="flex-1 min-h-full bg-white/10 w-full flex items-center justify-center">
        <div className="backdrop-blur-sm bg-white/10 rounded-xl w-2/3 h-96 flex flex-col justify-start items-center p-4">
          <p className="text-xl font-bold mb-4">Mes informations</p>
          <div className="grid grid-cols-2 w-full gap-6">
            <div className="flex flex-col items-center p-10">
              <p className="text-md p-4">Nom:</p>
              <p className="text-md">Prénom:</p>
            </div>
            <div className="flex flex-col items-center p-10">
              <p className="text-md p-4">Adresse mail:</p>
              <p className="text-md p-4">Adresse postale:</p>
              <p className="text-md p-4">Téléphone:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRedirection;
