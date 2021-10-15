import { useRouter } from "next/router";
import { useEffect } from "react";
import { signIn, useSession } from "next-auth/client";

export function AuthGuard({ children }) {
  const router = useRouter();
  const [session, loading] = useSession(false);

  useEffect(() => {
    if (session) {
      console.log("in site1");
      router.push("/home");
    } else if (!session || loading) {
      console.log("out site1");
      router.push("/");
    }
  }, [session]);

  if (loading) return null;
  if (!session) {
    console.log("out site2");
    return (
      <div className="text-xl font-bold my-8 text-center">
        <div className="m-80">
          You're not sign in! Sign in, please. <br />
          <button
            className="w-1/3 mt-10 py-2 justify-center border border-gray-400 rounded-md shadow hover:shadow-md text-lg text-gray-500"
            onClick={() =>
            signIn(null, {
              redirect: false,
              callbackUrl: "http://localhost:3000/home",
            })
            }
          >
          Sign In
          </button>
          </div>
            </div>
    );
  } else {
    console.log("in site2");
    return <>{children}</>;
  }
}
