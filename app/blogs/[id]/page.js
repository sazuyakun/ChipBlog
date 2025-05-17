'use client'

import axios from "axios";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import MainLogo from "@/components/MainLogo";
import SocialIcon from "@/components/socials/SocialIcon";
import { CircleUser } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { use, useEffect, useState } from "react";

export default function BlogPage({ params }){
  const Params = use(params);

  const router = useRouter()

  const [blog_items, setBlogItems] = useState([]);
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/blog");
        const blogs = response.data.blogs;
        setBlogItems(blogs);

        // Find the blog after data is fetched
        const currentBlog = blogs.find((blogItem) => {
          return blogItem._id == Params.id;
        });

        setBlog(currentBlog);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, [Params.id]);

  return (blog ?
    <>

    <div className="bg-gray-800 py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <MainLogo />
        <button onClick={() => router.push("/admin/addProduct")} className="flex cursor-pointer items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid shadow-white shadow-[-7px_7px_0px] transform transition-transform hover:scale-105">
          Get Started
          <ArrowRight size={20}/>
        </button>
      </div>
      <div className="text-center my-24">
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{blog.title}</h1>
        {/* Enter your author image here */}
        <CircleUser size={40} className="mx-auto mt-6"/>
        <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{blog.author}</p>
      </div>
    </div>
    <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
      <Image
        src={blog.image}
        width={1280}
        height={720}
        alt=''
        className="border-4 border-black"
      />
      <h1 className="my-8 text-[26px] font-semibold">Introduction: </h1>
      <div dangerouslySetInnerHTML={{ __html: blog.description }} />
      <h3 className="my-5 text-[18px] font-semibold">Dummy Blog: Lorem ipsum dolor.</h3>
      <p>Some secondary stuff: Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <p>Some secondary stuff: Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>


      <h3 className="my-5 text-[18px] font-semibold">Dummy Blog: Lorem ipsum dolor.</h3>
      <p>Some secondary stuff: Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <p>Some secondary stuff: Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>


      <h3 className="my-5 text-[18px] font-semibold">Dummy Blog: Lorem ipsum dolor.</h3>
      <p>Some secondary stuff: Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <p>Some secondary stuff: Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>


      <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
      <p>Some secondary stuff: Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

      <div className="my-24">
        <p className="text-white font-semibold my-4">Share this article on social media</p>
        <div className="flex gap-3">
          <SocialIcon type="facebook" color="white"/>
          <SocialIcon type="twitter" color="white"/>
          <SocialIcon type="google" color="white"/>
        </div>
      </div>
    </div>
    <Footer />
    </> : <>
      <div className="flex justify-center items-center h-screen text-3xl">
        404: Blog Not Found
      </div>
    </>
  );
}
