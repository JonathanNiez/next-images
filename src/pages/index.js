import Link from "next/link";
import { useState } from "react";
import Login from "./login";
import Register from "./register";

export default function Home() {
  const [token, setToken] = useState("");

  function isUserLoggedIn() {
    if (token === "") {
      return <Login />;
    } else {
      return <Register />;
    }
  }

  return (
    <div className="h-screen">
      <header>
        <Link
          className="bg-gray-600 text-white hover:bg-gray-400 p-3 rounded"
          href="/movies"
        >
          Movies
        </Link>
      </header>
      <div className="items-center bg-gray-700 justify-center h-screen">
        <h1 className="text-white p-5 text-4xl text-center">NextMovies</h1>
        {isUserLoggedIn()}
      </div>
      <footer className="bg-gray-800 p-3">
        <p className="text-center text-white m-2">
          This is a WS101 School Project. For Educational Purposes Only
        </p>
        <p className="text-center text-white text-sm">
          Project Created by:
          <br></br> Jonathan Niez
          <br></br> Charles Tianchon
          <br></br>Mar Sarillana{" "}
        </p>
      </footer>
    </div>
  );
}
