import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { userIsLoggedIn$, userInfo$ } from "./api/userStore";
import { useStore } from "@nanostores/react";

export default function Account() {
  const router = useRouter();

  const getUserInfo = useStore(userInfo$);
  const checkUser = useStore(userIsLoggedIn$);

  useEffect(() => {
    if (checkUser) {
      console.log(checkUser);
      console.log("Currently Logged In");
      console.log(getUserInfo.email);
      console.log(getUserInfo.username);
    } else {
      router.push("/login");
      console.log(checkUser);
    }
  }, []);

  return (
    <div className="bg-gray-700">
      <Navbar />
      <div className="bg-gray-700  text-white text-2xl grid place-items-center justify-center">
        <div className="grid grid-cols-2 justify-center place-items-center">
          <div>
            <h1 className="text-center text-1xl">Account</h1>
            <img
              className="rounded-full w-80 h-80"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDwOBcaVB3eU%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=eb820f7281713a9eff9d75fa32542333bc458d88692c5c2674ea417dcfa3cc8c&ipo=images"
            />
          </div>
          <div className="grid grid-rows-1">
            <p>{getUserInfo?.email}</p>
            <p>{getUserInfo?.username}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
