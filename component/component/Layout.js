import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div className="mx-auto w-9/12">
      <h1 className="text-6xl font-bold my-8 text-center">My Blog</h1>
      <NavBar />
      {children}
    </div>
  );
}
