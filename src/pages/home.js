import Navbar from "@/components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-gray-700">
      <header>
        <Navbar />
      </header>
    </div>
  );
}
