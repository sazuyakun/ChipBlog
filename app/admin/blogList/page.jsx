"use client";

import BlogTableItem from "@/components/AdminComponents/BlogTableItem";
import axios from "axios";
import { useEffect, useState } from "react";

export default function blogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get("/api/blog");
      console.log(response.data.blogs)
      setBlogs(response.data.blogs);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Blogs</h1>
      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className="hidden sm:table-cell px-6 py-3">
                Author Name
              </th>
              <th scope="col" className="hidden sm:table-cell px-6 py-3">
                Blog Title
              </th>
              <th scope="col" className="hidden sm:table-cell px-6 py-3">
                Date
              </th>
              <th scope="col" className="hidden sm:table-cell px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <BlogTableItem
                key={index}
                mongoId={blog._id}
                authorImg=""
                title={blog.title}
                author={blog.author}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
