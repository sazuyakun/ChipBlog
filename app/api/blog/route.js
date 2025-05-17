import { connectDB } from "@/lib/mongoose"
import { NextResponse } from "next/server"
import { writeFile } from 'fs/promises'
import BlogModel from "@/models/BlogModel";

const LoadDB = async () => {
  await connectDB();
}
LoadDB();

export async function GET(){
  try {
    const blogs = await BlogModel.find({})
    return NextResponse.json({success: true, blogs}, {status: 200})
  } catch (error) {
    console.log("ERROR: ", error);
    return NextResponse.json({ success: false, message: "Failed to fetch blogs." }, { status: 500 });
  }
}

export async function POST(request){

  try {

    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image')
    const imageByteData = await image.arrayBuffer()
    const buffer = Buffer.from(imageByteData)
    const path = `./public/${timestamp}_${image.name}`
    await writeFile(path, buffer)
    const imgUrl = `/${timestamp}_${image.name}`

    const blogData = {
      title: `${formData.get('title')}`,
      description: `${formData.get('description')}`,
      category: `${formData.get('category')}`,
      author: `${formData.get('author')}`,
      image: imgUrl,
    };


    await BlogModel.create(blogData);
    console.log("Blog Saved")

    return NextResponse.json({ success: true, message: "Blog Added"}, { status: 201 })
  } catch (error) {
    console.log("ERROR: ", error.message)
    return NextResponse.json({ success: false, message: error})
  }

}
