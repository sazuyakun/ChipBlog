"use client";

import axios from "axios";
import { Upload } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddProduct() {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("author", "Soham Samal");
    formData.append("image", imageFile); // append File object

    try {
      const response = await axios.post("/api/blog", formData);

      if (response.data.success) {
        toast.success(response.data.message);
        e.target.reset();
        setImageFile(null);
        setImagePreview(null);
      } else {
        toast.error("Couldn't add Blog");
      }
    } catch (error) {
      toast.error("Upload failed");
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="pt-5 px-5 sm:pt-12 sm:pl-16">
      <p className="text-xl text-white">Upload Thumbnail</p>

      <label htmlFor="thumbnail">
        <div className="mt-4 flex items-center justify-center w-full max-w-md h-48 bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-200">
          <input
            type="file"
            id="thumbnail"
            accept="image/*"
            name="image"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setImageFile(file);
                setImagePreview(URL.createObjectURL(file));
              }
            }}
          />
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-full object-contain p-4"
            />
          ) : (
            <div className="text-center flex flex-col items-center">
              <Upload size={40} />
              <p className="mt-2 text-sm text-gray-300">
                Click to upload an image
              </p>
              <p className="text-xs text-gray-500">
                PNG, JPG, or GIF (Max 5MB)
              </p>
            </div>
          )}
        </div>
      </label>

      <p className="text-xl mt-4 text-white">Blog Title</p>
      <input
        name="title"
        className="w-full sm:w-[500px] mt-2 px-4 py-4 border border-gray-500"
        type="text"
        placeholder="Type here"
        required
      />

      <p className="text-xl mt-4 text-white">Blog Description</p>
      <textarea
        name="description"
        className="w-full sm:w-[500px] mt-2 px-4 py-4 border border-gray-500"
        placeholder="Write content here"
        rows={6}
        required
      />

      <p className="text-xl mt-4 text-white">Blog Category</p>
      <select
        name="category"
        className="w-40 mt-2 px-4 py-3 border border-gray-500 text-gray-300 bg-gray-800"
        required
      >
        <option value="Startup">Startup</option>
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>

      <br />
      <button
        type="submit"
        className="mt-8 w-40 h-12 text-white active:bg-white border active:text-black cursor-pointer hover:bg-gray-600"
      >
        ADD
      </button>
    </form>
  );
}
