// import Signin from "../component/Signin";
// import React from "react";
// import Link from "next/link";
// import { signIn, useSession } from "next-auth/client";

// export const authRequired = true;
// export default function SignIn() {
//   const [session, loading] = useSession();
//   return (
//     <div>
//       <div className="text-xl font-bold my-8 text-center">
//         {!session && (
//           <div className="m-80">
//             You're not sign in! Sign in, please. <br />
//             <button
//               className="w-1/3 mt-10 py-2 justify-center border border-gray-400 rounded-md shadow hover:shadow-md text-lg text-gray-500"
//               onClick={() =>
//                 signIn(null, {
//                   redirect: false,
//                   callbackUrl: "http://localhost:3000/home",
//                 })
//               }
//             >
//               Sign In
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
