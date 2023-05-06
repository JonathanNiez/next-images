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
    <div className="h-auto">
      <header className="bg-gray-600 rounded-md  shadow-md p-3">
        <h1 className="text-3xl text-white  text-center">Login</h1>
      </header>
      <div className="h-auto flex items-center justify-center">
        <form
          className="p-3 w-96 border-lg grid m-5 justify-center place-items-center bg-blue-500 rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          <input
            value={inputs.username}
            type="email"
            placeholder="Email"
            className="rounded-md shadow-md m-1 p-2 w-64"
            onChange={() => setInputs({ ...inputs.username })}
          ></input>
          <input
            value={inputs.password}
            type="password"
            placeholder="Password"
            className="rounded-md shadow-md m-1 p-2 w-64"
            onChange={() => setInputs({ ...inputs.password })}
          ></input>
          <button
            type="submit"
            className="flex bg-gray-300 w-40 shadow-md m-2 hover:shadow-lg hover:bg-gray-500 hover:text-white p-2 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
