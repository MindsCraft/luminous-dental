import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Replace this with your actual authentication logic (e.g., check against a database)
        if (credentials?.email === "admin@example.com" && credentials?.password === "password") {
          return { id: "1", name: "Admin", email: "admin@example.com" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login", // Redirect to /login for sign-in
  },
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  secret: process.env.NEXTAUTH_SECRET, // Ensure this is set
  useSecureCookies: process.env.NODE_ENV === "production",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
