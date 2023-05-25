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
          "http://localhost/next-images-admin/php/images.php"
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
          <div className="card" key={index}>
            <div className="card2">
              <img
                className="rounded-lg h-64 w-64"
                src={`/uploadedImages/${i.imageData}`}
              />
              <h1 className="text-white text-center p-2 text-1xl">
                {i.imageName}
              </h1>
            </div>
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
          className="bg-gray-500 hover:bg-gray-600 m-2 mt-5 p-2 rounded-md text-white"
        >
          Upload
        </Link>
      </div>
      <div className="p-2 grid gap-2 grid-cols-7 h-auto place-items-center justify-center">
        {loadImages()}
      </div>
      <Footer />
    </div>
  );
}
