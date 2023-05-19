import Link from "next/link";
import { useState } from "react";

export default function Navbar({ setData }) {
  const [page, setPage] = useState("");

  return (
    <div>
      <Link className="bg-gray-500 m-1 p-2 rounded-md text-white" href="/login">
        Login
      </Link>
      <Link
        className="bg-gray-500 m-1 p-2 rounded-md text-white"
        href="/movies"
      >
        Movies
      </Link>
    </div>
  );
}
