"use client";

import axios from "axios";
import BlogItem from "./BlogItem";
import { useEffect, useState } from "react";
import Loader from "./customLoader/Loader";

export default function BlogList() {
  const [loading, setLoading] = useState(false);
  const [blog_items, setBlogItems] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/blog");
        setBlogItems(response.data.blogs);
        console.log(response.data.blogs);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setCategory(e.target.innerText);
  };

  const categories = ["All", "Technology", "Startup", "Lifestyle"];

  // Filter the blog items by category
  const filteredItems =
    category === "All"
      ? blog_items
      : blog_items.filter((item) => item.category === category);

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        {categories.map((cat) => {
          return cat === category ? (
            <button
              key={cat}
              className="bg-white text-black py-1 px-4 rounded-sm"
              onClick={handleClick}
            >
              {cat}
            </button>
          ) : (
            <button className="cursor-pointer" key={cat} onClick={handleClick}>
              {cat}
            </button>
          );
        })}
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
          {filteredItems.map((item, index) => {
            return (
              <BlogItem
                key={index}
                blogId={item._id}
                image={item.image}
                category={item.category}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
