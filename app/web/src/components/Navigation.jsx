import { Link, NavLink } from "react-router-dom";
export default function Navigation() {
   const activity = {
      textDecoration: 'underline'
   }
   return (
      <nav className="gap-8 font-medium hidden md:flex">
         <NavLink
            to="/"
            className={`hover:underline`}
            style={({ isActive }) => isActive ? activity : null}
         >
            Acceuil
         </NavLink>
         <NavLink
            to="/location"
            className={`hover:underline`}
            style={({ isActive }) => isActive ? activity : null}
         >
            Achat
         </NavLink>
         <NavLink
            to="/location"
            className={`hover:underline`}
            style={({ isActive }) => isActive ? activity : null}
         >
            Location
         </NavLink>
         <NavLink
            to={'/dashboard'}
            className={`hover:underline`}
            style={({ isActive }) => isActive ? activity : null}
         >
            Dashboard
         </NavLink>
      </nav>
   );
}