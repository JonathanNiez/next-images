import Link from "next/link";
import { useState } from "react";
import Login from "./login";
import Register from "./register";
import Movies from "./movies";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const [page, setPage] = useState("movies");

  function changePage(data) {
    setPage(data);
  }

  return (
    <div className="h-auto">
      <header className="items-center bg-gray-700 justify-center left-0">
        <div className="items-right flex">
          <button
            className="bg-gray-500 m-2 p-2 rounded-md text-white"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
          <button
            className="bg-gray-500 m-2 p-2 rounded-md text-white"
            onClick={() => router.push("/register")}
          >
            Register
          </button>
          <button
            className="bg-gray-500 m-2 p-2 rounded-md text-white"
            onClick={() => changePage("movies")}
          >
            Movies
          </button>{" "}
        </div>

        <h1 className="text-white p-5 text-5xl text-center shadow-md">
          NextMovies
        </h1>
      </header>
      <div className="h-auto">{page === "movies" && <Movies />}</div>
      <footer className="bg-gray-800 p-3 fixed bottom-0 w-screen rounded-t-lg">
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
