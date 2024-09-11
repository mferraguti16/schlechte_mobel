import Link from "next/link";

const ButtonStock = () => {
  return (
    <Link
      href="/admin/redirection/stock"
      className="buttonNewConnection bg-[#050505] text-white text-lg rounded-md px-4 py-2 hover:bg-slate"
    >
      Mon stock
    </Link>
  );
};

const ButtonAdds = () => {
  return (
    <Link
      href="/admin/redirection/sales"
      className="buttonNewConnection bg-[#050505] text-white text-lg rounded-md px-4 py-2 hover:bg-slate"
    >
      Aux annonces
    </Link>
  );
};

const AdminRedirection = () => {
  return (
    <div className="flex-1 min-h-full bg-cover bg-[url('/admin.jpg')] flex flex-col items-start justify-start w-full">
      <div className="flex-1 min-h-full bg-white/10 w-full flex items-center justify-center">
        <div className="backdrop-blur-sm bg-white/10 rounded-xl w-1/3 h-96 flex flex-col justify-center items-center gap-3">
          <p className="text-xl font-bold">Je veux acceder à </p>
          <div className="my-6" />
          <div className="flex flex-row gap-6 ">
            <ButtonStock />
            <ButtonAdds />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRedirection;
