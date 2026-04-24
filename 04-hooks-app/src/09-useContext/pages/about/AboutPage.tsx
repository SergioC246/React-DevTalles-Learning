import { UserContext } from "@/09-useContext/context/UserContext";
import { Button } from "@base-ui/react";
import { use } from "react";
import { Link } from "react-router";


export const AboutPage = () => {

  const { isAuthenticated, logout } = use(UserContext)



  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Página sobre mi</h1>
      <hr />

      <div className="flex flex-col gap-2">
        {
          isAuthenticated && (
            <Link to="/profile" className="hover:text-blue-500 underline text-2xl">
              Perfil
            </Link>
          )}

        <Link to="/profile" className="hover:text-blue-500 underline text-2xl">
          Perfil
        </Link>
        {
          isAuthenticated ? (
            <Button
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded cursor-pointer" onClick={logout}>
              Salir
            </Button>
          ) : (
            <Link to="/login" className="hover:text-blue-500 underline text-2xl">
              Inciar Sesión
            </Link>
          )}
      </div>
    </div>
  )
};
