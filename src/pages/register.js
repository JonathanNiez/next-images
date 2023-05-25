import { useState } from "react";
import Link from "next/link";
import { register } from "./api/api";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";

export default function Register() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

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

    if (
      inputs.email == "" ||
      inputs.username == "" ||
      inputs.password == "" ||
      inputs.confirmPassword == ""
    ) {
      console.log("Please input the fields");
    } else {
      const formData = new FormData(e.target);
      const value = [{ ...formData.entries() }];

      console.log(value);

      if (inputs.password == inputs.confirmPassword) {
        try {
          const response = await register(formData);
          console.log(response);
          router.push("/login");
        } catch (error) {
          console.error(error);
        }
      } else {
        alert("Password Not Matched");
      }
    }
  }

  return (
    <div className="h-screen bg-gray-700">
      <header className="bg-gray-800 mb-5">
        <div className="grid grid-cols-2 gap-3">
          <Link
            className="text-white p-5 text-5xl col-start-1 col-end-2"
            href="/"
          >
            NextImages
          </Link>
        </div>
      </header>
      <div className="grid place-items-center justify-center">
        <form
          method="post"
          onSubmit={handleSubmit}
          className="container h-96 flex items-center justify-center"
        >
          <h1 className="text-3xl text-white mb-5">REGISTER</h1>
          <div className="input-container">
            <div className="input-content">
              <div className="input-dist">
                <div className="input-type">
                  <input
                    value={inputs.username}
                    placeholder="Username"
                    required
                    type="text"
                    name="username"
                    id="username"
                    className="input-is"
                    onChange={(e) =>
                      setInputs({ ...inputs, username: e.target.value })
                    }
                  />
                  <input
                    value={inputs.email}
                    placeholder="Email"
                    required
                    type="email"
                    name="email"
                    id="email"
                    className="input-is"
                    onChange={(e) =>
                      setInputs({ ...inputs, email: e.target.value })
                    }
                  />
                  <input
                    value={inputs.confirmPassword}
                    placeholder="Confirm Password"
                    required
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    className="input-is"
                    onChange={(e) =>
                      setInputs({ ...inputs, confirmPassword: e.target.value })
                    }
                  />
                  <input
                    value={inputs.password}
                    placeholder="Password"
                    required
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input-is"
                    onChange={(e) =>
                      setInputs({ ...inputs, password: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="bg-gray-500">
            Register
          </button>
        </form>
        <div>
          <button
            onClick={togglePassword}
            className="toggle-button bg-white h-fit w-fit p-5 text-center"
          >
            👁
          </button>
        </div>

        <div className="flex mt-5">
          <p className="text-white mr-2">Already have an Account?</p>
          <Link className="text-white font-bold" href="/login">
            Login
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
