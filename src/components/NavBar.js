import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const router = useRouter();

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
          <button
            className="bg-gray-500 m-2 p-2 rounded-md text-white"
            onClick={() => router.push("/login")}
          >
            Login
          </button>{" "}
          <button
            className="bg-gray-500 m-2 p-2 rounded-md text-white"
            onClick={() => router.push("/register")}
          >
            Register
          </button>
          {isUserLoggedIn ? (
            <div>
              <button
                className="bg-gray-500 p-2 rounded-md text-white"
                onClick={() => router.push("/account")}
              >
                Account
              </button>
              <button
                className="bg-gray-500 p-2 rounded-md text-white"
                onClick={() => router.push("/account")}
              >
                Logout
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </header>
  );
}
