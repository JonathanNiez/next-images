import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { userIsLoggedIn$, userInfo$ } from "./api/userStore";
import Footer from "@/components/Footer";
import Link from "next/link";

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

    if (inputs.email == "" || inputs.password == "") {
      console.log("Please input the fields");
    } else {
      const formData = new FormData(e.target);

      axios
        .post("http://localhost/next-images/php/login.php", formData)
        .then((result) => {
          if (result.data.Status === "200") {
            userIsLoggedIn$.set(true);

            window.localStorage.setItem("Email", result.data.Email);
            window.localStorage.setItem("Username", result.data.Username);
            userInfo$.set({
              email: result.data.Email,
              username: result.data.Username,
            });

            console.log(result);
            console.log("Logging In");
            console.log(userInfo$);
            console.log(userIsLoggedIn$);

            router.push("/");
          } else if (result.data.Status === "422") {
            alert("Invalid User");
          }
        })
        .catch((error) => {
          console.log(error);
          alert("Invalid User");
        });
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
        <form method="post" onSubmit={handleSubmit} className="container">
          <h1 className="text-3xl text-white mb-5">LOGIN</h1>

          <div className="input-container">
            <div className="input-content">
              <div className="input-dist">
                <div className="input-type">
                  <input
                    value={inputs.email}
                    placeholder="Email"
                    required
                    type="text"
                    name="email"
                    id="email"
                    className="input-is"
                    onChange={(e) =>
                      setInputs({ ...inputs, email: e.target.value })
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
          <button
            type="submit"
            className="bg-gray-500 rounded-md text-center text-white font-bold"
          >
            Login
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
          <p className="text-white mr-2">Don't have an Account?</p>
          <Link className="text-white font-bold" href="/register">
            Register
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
