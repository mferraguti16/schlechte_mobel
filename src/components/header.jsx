"use client";
import Link from "next/link";
import { Search, ShoppingBasket, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { LocalStorage, localstorageKey } from "@/utils/localstorage";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  /**
   * Je n'affiche l'input que si mon url ne contient qu'un /
   * sinon, je ne l'affiche pas.
   * => Conditional rendering: https://fr.legacy.reactjs.org/docs/conditional-rendering.html
   **/
  const afficheInput = () => {
    if (
      pathname === "/admin/log-in" ||
      pathname === "/admin/sale-validation" ||
      pathname === "/admin/redirection" ||
      pathname === "/admin/redirection/sales" ||
      pathname === "/admin/redirection/stock"
    ) {
      return null;
    }

    return (
      <div className="flex items-center justify-center gap-2">
        <Search className="size-4" />
        <input
          className="rounded-md text-sm p-1"
          placeholder="Rechercher qqch..."
        />
      </div>
    );
  };

  function goToLoginOrMyAccount() {
    /**
     * Si on est connecté => on va sur my account
     * Sinon, on va sur log-in
     */

    //On vérifie le localstorage pour savoir si je suis connectée.
    const isConnected = LocalStorage.getItem(localstorageKey.isLogin);
    if (isConnected === true) {
      return "/connection/my-account";
    } else {
      return "/connection/log-in";
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-center bg-[#ffedd8]">
      <div className="w-full flex items-center justify-between p-4">
        <div
          className="w-fit hover:cursor-pointer"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();

            router.push("/");
          }}
        >
          <h1 className="text-lg font-black">Schlecht Möbel</h1>
        </div>
        {afficheInput()}
        <div className="flex items-center justify-center gap-3">
          <Link href={goToLoginOrMyAccount()}>
            <User className="cursor-pointer" />
          </Link>
          <Link href="/connection/my-cart">
            <ShoppingBasket className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;