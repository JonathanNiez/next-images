import { useState } from "react";
import Link from "next/link";
import { register} from "./api/api";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const [isPassMatch, setIsPassMatch] = useState(false);

  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await register(formData);
      console.log(response); // Handle success, e.g., show a success message or redirect the user
    } catch (error) {
      console.error(error); // Handle error, e.g., show an error message
    }
  }

  return (
    <div className="h-screen bg-gray-700">
      <header className="bg-gray-600 rounded-md  shadow-md p-3">
        <h1 className="text-3xl text-white  text-center">Register</h1>
      </header>
      <div className="h-auto flex items-center justify-center">
        <form
          method="post"
          className="p-3 w-96 border-lg grid m-5 justify-center place-items-center bg-gray-500 rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          <input
            value={inputs.username}
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            className="rounded-md shadow-md m-1 p-2 w-64"
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />

          <input
            value={inputs.email}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="rounded-md shadow-md m-1 p-2 w-64"
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <input
            value={inputs.password}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            id="password"
            name="password"
            className="rounded-md shadow-md m-1 p-2 w-64 flex"
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
          {isPassMatch ? (
            <p>Match</p>
          ) : (
            <p className="text-red-400">Confirm Password not Match</p>
          )}
          <div className="flex">
            <input
              value={inputs.confirmPassword}
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              id="confirmPassword"
              className="rounded-md shadow-md flex m-1 p-2 w-64 align-items-center"
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className=" bg-gray-300 w-40 shadow-md m-2 hover:shadow-lg hover:bg-gray-500 hover:text-white p-2 rounded-lg"
          >
            Register
          </button>

          <div className="flex">
            <p className="text-white mr-2">Already have an Account? </p>
            <Link
              href="/login"
              className="text-white hover:shadow-gray-400 hover:text-gray-400"
            >
              Login now
            </Link>
          </div>
        </form>
        <button
          type="submit"
          onClick={togglePassword}
          className="bg-white h-10 w-10 rounded-md flex items-center"
        >
          show
        </button>
      </div>
    </div>
  );
}
