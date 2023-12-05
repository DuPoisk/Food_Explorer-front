import { Routes, Route, Navigate} from "react-router-dom"; /*"Routes" vai envolver todas as minhas "Route" */


import { Home } from "../pages/UserHome";
import { UserMenu } from "../pages/UserMenu";
// import { Details } from "../pages/Details";
import { DishDescription } from "../pages/DishDescription";
import { DishNew } from "../pages/DishNew";
import { DishEdit } from "../pages/DishEdit";

export function AppRoutes(){
  return(
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<UserMenu />} />
      <Route path="/new" element={<DishNew />} />
      <Route path="/description" element={<DishDescription />} />
      <Route path="/new" element={<DishNew />} />
      <Route path="/edit/:id" element={<DishEdit />} />
      {/* <Route path="/details/:id" element={<Details />} /> */}


      
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )
}
/*
<Route path="/" significa qual o endereço
        element={<Home />} />   significa qual elemento quero renderizar, qual elemento quero exibir
*/ 