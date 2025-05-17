import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./mongo"
import UserModel from "@/models/UserModel"
import { connectDB } from "./mongoose"

const config = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    })
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async session({ session }){
      const sessionUser = await UserModel.findOne({
        email: session.user.email
      })

      session.user.id = sessionUser._id

      return session;
    },
    async signIn({ profile }){
      try {
        await connectDB();

        const userExist = await UserModel.findOne({ email: profile.email });

        if (!userExist) {
          const user = await UserModel.create({
            email: profile.email,
            name: profile.name,
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.log("ERROR IN SIGN IN: ", error);
        return false;
      }
    }
  },
  // pages: {
  //   signIn: '/signin'
  // },
  secret: process.env.AUTH_SECRET
}

export const { handlers, signIn, signOut, auth } = NextAuth(config)
