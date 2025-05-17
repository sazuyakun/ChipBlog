import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./mongo"

const config = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    })
  ],
  adapter: MongoDBAdapter(clientPromise),
  // callbacks: {
  //   async session({ session, user }){
  //     // Add the user id to the session
  //     session.user.id = user.id;
  //     return session
  //   }
  // },
  // pages: {
  //   signIn: '/signin'
  // },
  // secret: process.env.AUTH_SECRET
}

export const { handlers, signIn, signOut, auth } = NextAuth(config)
