import { useEffect, useState } from "react";
import Login from "@/pages/login";
import Register from "@/pages/register";

export default function ViewLayout({ data }) {
  const [page, setPage] = useState("movies");

  useEffect(() => {
    changePage();
  });

  function changePage(data) {
    setPage(data);
  }
  return (
    <div className="text-xl text-white">
      {data === "login" && <Login />}
      {data === "register" && <Register />}
    </div>
  );
}
