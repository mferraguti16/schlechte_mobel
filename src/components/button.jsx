export const Button = ({ children }) => {
  return (
    <button className="bg-[#050505] text-white rounded-md px-4 py-2 hover:bg-slate text-sm">
      {children}
    </button>
  );
};