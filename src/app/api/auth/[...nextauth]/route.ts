import { prisma } from "@/app/lib/prisma";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth(
  {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
      })
    ],
    callbacks: {
      async signIn({ user }) {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email ?? "" }
        });
        if (!existingUser) {
          if (user.email && user.name) {
            await prisma.user.create({
              data: {
                email: user.email,
                name: user.name
              }
            })

          }
        }
        return true;
      },
    }
  }
)
 export { handler as GET, handler as POST}