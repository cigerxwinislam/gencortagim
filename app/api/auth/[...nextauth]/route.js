// 



import { connectMongoDB } from "../../../lib/mongodb";
import Esnaf from "../../../lib/models/esnaf";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import Kullanici from "../../../lib/models/user";




var signin="";
var secret="asdfgh";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password,role } = credentials;
        await connectMongoDB();

      if (role==="kullanici") {
        


        try {
       
          const mmkullanici = await Kullanici.findOne({ email });

          if (!mmkullanici) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, mmkullanici.password);

          if (!passwordsMatch) {
            return null;
          }

          return mmkullanici;
        } catch (error) {
          console.log("Error: ", error);
        }
        signin="kullanici/app/"
        




    secret="6473e9a7740301df88c3f21c15227cb90000e075fb36535b97a96ff8d96719c7aceb6ca34bb7eb567813fbc3dc5576f7339fdbca8d6bbbed0d805cf8758d4bf743d71835f6ca30ad6209b8bf6a1b853c7f9b206ae07294f2d5fcdecfc2490ce746e0697fcbc3c1daeddcd9a25f395d4cf17915e0e834d1f5f6bc61c64e7f606f3a706d2822a96b727c0f4c126d8fe956c34e0666eeab54f98b31656ddd387b854272d782d1144d20f0c92e1066d9c4d1f27ed0afd923d3d3fd2d1d740b5c8da7505b67c6b18b28f9c85677f48ee86ce7c63411ff3697237774fd0959d5332c10dde15db4a370fc0d01461f8443bc01ee77765b652099abfb00494fb2b0d1582e"
      } 
      
      

      if (role==="esnaf") {
        


        try {
          await connectMongoDB();
          const mmesnaf = await Esnaf.findOne({ email });

          if (!mmesnaf) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, mmesnaf.password);

          if (!passwordsMatch) {
            return null;
          }

          return mmesnaf;
        } catch (error) {
          console.log("Error: ", error);
        }
        signin="esnaf/app/"
        secret="bb333f590d45065ef1b78e8e8cf20fdaf3748ac6122303a46e1c530dac22f1e41a8c51dbd4dbe18cd8a144c8eadc3d28581e82564d25d1ed8953a621fb207bbf7d6f905a7a2e9a81f79baa43a764bf7e84682d2f6d0d13e348331a5271e4be73c2fab192064826e45a47f2a6c394837b0cfeadcdb731639d3de625cf67ae65d8696176f4ae83f4877683a06ce0bd6aec7f84fab950a39c72bde20bd0850dc5546b012cad4256c635da553f6763bfa4285d89d03c43da32a476bdbb00dbb45583d7946f1d8af91dadb908035f95f1c8d5868172090ade4ab40289de3a5bcd5626a2e2899220c2df715ff5c146b3fb32716cccc0882e6ae33ffb6a25f0728fbbf7"
      }



      if (role==="admin") {
        


        try {
         
          const mmadmin = await Admin.findOne({ email });

          if (!mmadmin) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, mmadmin.password);

          if (!passwordsMatch) {
            return null;
          }

          return mmadmin;
        } catch (error) {
          console.log("Error: ", error);
        }
        signin="admin/app/"
        
        secret="b32d6d9a525fb26f5d9313494a3615382de4f54618fe3d5f507742f39f8068e7a054aa5843d29f3791ba43d702938a607179ec9b96a022aada066a92af39bef54aa1af771912640678671c028aad7b355f2c8fe611db6a21e5b76ba700da0e391983f1380888cef2e7d578383fbfdd9f591135c964c65e7601708f569b423ed8756ef96efc17f86937913e78200acd6c77056236b6f24b6a9d83a7fd05e34054bcc7dc6b1ec44bad4ffe8cc6787dec2f8c73f85bf7ce47b1ba6b58c596cbbfdfcbb372994204408f2315d89cf16114566d541e94cddf118f5ad97960b963c172238650df666a861893da39bd84912913d173a9f62cd50e06aad40a41b842317a"
      }
      
      else {
        console.log("....")
        
      }
      
      
      
      
      
      
      }
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: secret,
  pages: {
    signIn: signin
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
