'use client'

import { CircleArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogItem({ blogId, image, category, title, description }){
  return (
    <div className="max-w-[330px] sm:max-w-[300px] border hover:shadow-[-7px_7px_0px] transform transition-transform hover:scale-105 duration-300">
      <Link href={`/blogs/${blogId}`}>
        <Image src={image} alt='' width={400} height={400} className="border-b aspect-square object-cover"/>
        <p className="ml-5 mt-5 inline-block bg-white text-black text-sm p-1">{category}</p>
        <div className="p-5">
          <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-100">{title}</h5>
          <p className="mb-3 text-sm tracking-tight text-gray-300 line-clamp-2">{description}</p>
          <div className="inline-flex items-center gap-1 py-2 font-semibold hover:underline hover:cursor-pointer">
            Read more <CircleArrowRight size="20px"/>
          </div>
        </div>
      </Link>
    </div>
  )
}
