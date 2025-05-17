import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/mongoose";
import UserModel from "@/models/UserModel";
import { redirect } from "next/navigation";

async function getUser() {
  const session = await auth();

  if(!session){
    redirect("/signin")
  }

  await connectDB();

  const user = await UserModel.findById(session.user.id)
  console.log(session.user.id)
}

export default async function Admin(){
  const user = await getUser();

  return (
    <>Admin</>
  )
}
