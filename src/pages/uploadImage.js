import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { uploadImageToDB } from "./api/api";

export default function UploadImage() {
  const [inputs, setInputs] = useState({
    imageData: "",
    imageName: "",
  });

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (inputs.imageData == "" || inputs.imageName == "") {
      console.log("Please input the fields");
    } else {
      const formData = new FormData(e.target);
      const value = [{ ...formData.entries() }];

      console.log(value);

      try {
        const response = await uploadImageToDB(formData);
        router.push("/");
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div className=" bg-gray-700 h-screen">
      <NavBar />
      <div className="grid grid-rows-1 place-items-center justify-center">
        <h1 className="text-red-500 font-bold text-4xl">
          NO ADULT IMAGE ALLOWED
        </h1>
        <form
          method="post"
          encType="multipart/form-data"
          className="p-3 w-96 border-lg m-5 bg-gray-500 grid place-items-center justify-center rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          <input
            value={inputs.imageData}
            type="file"
            id="imageData"
            name="imageData"
            placeholder="Image Data"
            className="rounded-md shadow-md m-1 p-2 w-64"
            onChange={(e) =>
              setInputs({ ...inputs, imageData: e.target.value })
            }
          />
          <input
            value={inputs.imageName}
            type="text"
            id="imageName"
            name="imageName"
            placeholder="Image Name"
            className="rounded-md shadow-md m-1 p-2 w-64"
            onChange={(e) =>
              setInputs({ ...inputs, imageName: e.target.value })
            }
          />
          <button type="submit" className="text-black font-bold text-center ">
            Upload
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
