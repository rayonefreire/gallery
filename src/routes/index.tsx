import { useContext } from "react"

import { Context } from "../context"
import { HomeRoutes } from "./app.routes";
import { SingInRoutes } from "./signin.routes";

export function AppRoutes() {
  const { isAuthentication } = useContext(Context);

  return !isAuthentication ? <SingInRoutes /> : <HomeRoutes />
}