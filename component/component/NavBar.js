import Link from "next/link";
import { signOut, useSession } from "next-auth/client";

export default function NavBar() {
  const [session, loading] = useSession(true);

  return (
    <div>
      <ul className="flex flex-row justify-center space-x-4">
        <li>
          <Link href="/home">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/home/blogs">
            <a>Blogs</a>
          </Link>
        </li>
        {session && (
          <li>
            <button
              onClick={() =>
                signOut({ callbackUrl: "http://localhost:3000/" })
              }
            >
              signOut
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
