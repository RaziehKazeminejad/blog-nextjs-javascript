import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
   
  ],
  // callbacks: {
  //   async session(session, token) {
  //     // Add property to session, like an access_token from a provider.
  //     session.accessToken = token.accessToken
  //     return session
  //   }
  // }
 
};

export default (req, res) => NextAuth(req, res, options);