import {BrowserRouter} from "react-router-dom";

//import { AppUserRoutes } from "./app.user.routes";
//import { AppAdminRoutes } from "./app.admin.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes(){
  return(
    <BrowserRouter>
      <AuthRoutes/>
    </BrowserRouter>
  )
}

