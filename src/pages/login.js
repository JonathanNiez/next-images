import { useState } from "react";

export default function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="h-screen">
      <header className="bg-gray-200 p-3">
        <h1 className="text-4xl text-center">Next Movies</h1>
      </header>

      <div className="h-screen">
        <form
          className="p-3 border-lg flex m-5 justify-center place-items-center bg-blue-300 rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          <input
            value={inputs.username}
            type="email"
            placeholder="Email"
            className="rounded-md m-1 flex"
            onChange={() => setInputs({ ...inputs.username })}
          ></input>
          <input
            value={inputs.password}
            type="password"
            placeholder="Password"
            className="rounded-md m-1 flex"
            onChange={() => setInputs({ ...inputs.password })}
          ></input>
          <button
            type="submit"
            className="flex bg-gray-300 shadow-md hover:shadow-lg hover:bg-gray-500 hover:text-white p-2 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
      <footer className="bg-gray-200 p-3">
        <p className="text-center m-2">
          This is a WS101 School Project. For Educational Purposes Only
        </p>
        <p className="text-center text-sm">
          Project Created by:
          <br></br> Jonathan Niez
          <br></br> Charles Tianchon
          <br></br>Mar Sarillana{" "}
        </p>
      </footer>
    </div>
  );
}
