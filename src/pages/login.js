import Link from "next/link";
import { useState } from "react";
import { login } from "./api/api";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = [{ ...formData.entries() }];

    console.log(value);
    try {
      const response = await login(formData);
      console.log(response);
      router.push("/");
    } catch (error) {
      console.error(error); // Handle error, e.g., show an error message
    }
  }

  return (
    <div className="h-screen bg-gray-700">
      <header className="bg-gray-600 rounded-md  shadow-md p-3">
        <h1 className="text-3xl text-white  text-center">Login</h1>
      </header>
      <div className="flex items-center justify-center">
        <form
          method="post"
          className="p-3 w-96 border-lg grid m-5 justify-center place-items-center bg-gray-500 rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          <input
            value={inputs.email}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="rounded-md shadow-md m-1 p-2 w-64"
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <div className="flex">
            <input
              value={inputs.password}
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              className="rounded-md shadow-md m-1 p-2 w-64 flex align-items-center"
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className=" bg-gray-300 w-40 shadow-md m-2 hover:shadow-lg hover:bg-gray-500 hover:text-white p-2 rounded-lg"
          >
            Login
          </button>

          <div className="flex">
            <p className="text-white mr-2">Don't have an Account? </p>
            <Link
              href="/register"
              className="text-white hover:shadow-gray-400 hover:text-gray-400"
            >
              Register now
            </Link>
          </div>
        </form>
        <button
          onClick={togglePassword}
          className="bg-white h-10 w-10 m-1 text-center rounded-md"
        >
          show
        </button>
      </div>
    </div>
  );
}
