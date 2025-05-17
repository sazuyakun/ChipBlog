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

  const user = await UserModel.findOne({_id: session.user.id})

  if (!user) {
    redirect("/signin");
  }

  return user;
}

export default async function Admin(){
  const user = await getUser()
  return (
    <div>
      {user.name}
    </div>
  )
}
