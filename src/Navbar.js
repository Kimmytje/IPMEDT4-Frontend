import { Link } from "react-router-dom";


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <li className="links">
                <Link to="/">Home</Link>
                <Link to="/User">User</Link>
                <Link to="/Settings">Settings</Link>
            </li> 
        </nav>
     );
}
 
export default Navbar;