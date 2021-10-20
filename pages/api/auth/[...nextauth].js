import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

export default NextAuth({
  session: {
    jwt: {
      signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
    
      // You can also specify a public key for verification if using public/private key (but private only is fine)
      // verificationKey: process.env.JWT_SIGNING_PUBLIC_KEY,
    
      // If you want to use some key format other than HS512 you can specify custom options to use
      // when verifying (note: verificationOptions should include a value for maxTokenAge as well).
      // verificationOptions = {
      //   maxTokenAge: `${maxAge}s`, // e.g. `${30 * 24 * 60 * 60}s` = 30 days
      //   algorithms: ['HS512']
      // },
    }
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials){
        const client = await connectToDatabase();
        const usersCollection = client.db().collection("users");
        const user = await usersCollection.findOne({email: credentials.email});

        if(!user){
          client.close();
          throw new Error ("No user found");
        }
        
        const isValid = await verifyPassword(credentials.password, user.password);

        if(!isValid){
          client.close();
          throw new Error ('Could not log you in!')
        }
       // console.log("Finded: ",user)
        client.close();

        return {email: user.email, name: user.userName}

      }
    })
  ]
});