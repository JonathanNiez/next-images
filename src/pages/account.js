import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Account() {
  return (
    <div className="bg-gray-700">
      <Navbar />
      <div className="bg-gray-700 text-white text-2xl grid grid-cols-2 place-items-center">
        <div className="grid grid-rows-3 gap-1">
          <button className="bg-gray-400 p-2">Change Password</button>
          <button className="bg-gray-400 p-2">Change Password</button>
          <button className="bg-gray-400 p-2">Change Password</button>
        </div>
        <div>
          <h1>Account</h1>
          <img
            className="rounded-full w-64 h-64"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDwOBcaVB3eU%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=eb820f7281713a9eff9d75fa32542333bc458d88692c5c2674ea417dcfa3cc8c&ipo=images"
          />
          {"Username"}
          {"Email"}
        </div>
      </div>
      <Footer />
    </div>
  );
}
