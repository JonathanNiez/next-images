import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await axios.get(
          "http://localhost/next-movies-admin/php/images.php"
        );
        setImage(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchImages();
  }, []);

  function loadImages() {
    return (
      Array.isArray(image) &&
      image.map(function (i, index) {
        return (
          <div
            className="bg-gray-600 hover:bg-gray-500 w-80 h-fit border-gray-500 border-r-gray-300 border-t-black border-2 p-2 rounded-xl m-2 grid place-items-center shadow-md"
            key={index}
          >
            <img
              className="flex rounded-md border-md h-64 w-64"
              src={`/uploadedImages/${i.imageData}`}
            />
            <h1 className="text-white text-center m-2 text-2xl">
              {i.imageName}
            </h1>
          </div>
        );
      })
    );
  }

  return (
    <div className="h-fit bg-gray-700 mb-24 pb-10">
      <Navbar />
      <div className="grid place-items-center">
        <h1 className="text-4xl text-white text-center">
          Localhost Image Hosting
        </h1>{" "}
        <Link
          href="/uploadImage"
          className="bg-gray-500 m-2 mt-5 p-2 rounded-md text-white"
        >
          Upload
        </Link>
      </div>
      <div className="p-2 grid gap-3 grid-cols-4 h-auto place-items-center justify-center">
        {" "}
        {loadImages()}
      </div>{" "}
      <Footer />
    </div>
  );
}
