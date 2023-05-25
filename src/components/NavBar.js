import Link from "next/link";
import { useRouter } from "next/router";
import { userIsLoggedIn$, userInfo$ } from "@/pages/api/userStore";
import { useEffect } from "react";
import { useStore } from "@nanostores/react";

export default function Navbar() {
  const router = useRouter();

  const checkUser = useStore(userIsLoggedIn$);
  const getUserInfo = useStore(userInfo$);

  function logout() {
    localStorage.clear();

    userIsLoggedIn$.set(false);
    userInfo$.set(null);

    router.push("/login");
    console.log("Logged Out");
  }

  function loadHeader() {
    if (checkUser && getUserInfo != null) {
      console.log("Logged In");
      return (
        <div className="grid grid-cols-3 place-items-center justify-center">
          <p className="text-white p-2 rounded-md text-lg bg-gray-500">
            {getUserInfo?.username}
          </p>
          <button
            className="bg-gray-500 rounded-md text-center text-white font-bold"
            onClick={() => router.push("/account")}
          >
            Account
          </button>
          <button
            className="bg-gray-500 rounded-md text-center text-white font-bold"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            className="bg-gray-500 m-2 p-2 rounded-md text-center text-white"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
          <button
            className="bg-gray-500 m-2 p-2 rounded-md text-center text-white"
            onClick={() => router.push("/register")}
          >
            Register
          </button>
        </div>
      );
    }
  }

  useEffect(() => {
    loadHeader();
    console.log(checkUser);
  }, []);

  return (
    <header className="bg-gray-800 mb-5">
      <div className="grid grid-cols-2 gap-3">
        <Link
          className="text-white p-5 text-5xl col-start-1 col-end-2"
          href="/"
        >
          NextImages
        </Link>
        <div className="col-start-2 col-end-2 flex items-center justify-end">
          {loadHeader()}
        </div>
      </div>
    </header>
  );
}
