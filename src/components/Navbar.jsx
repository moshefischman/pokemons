import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink className="btn btn-outline-primary" to="/">
                    Home
                </NavLink>
                <NavLink className="btn btn-outline-primary" to="/pokemons">
                    Pokemons
                </NavLink>
                <NavLink className="btn btn-outline-primary" to="/blog">
                    Blog
                </NavLink>
                <NavLink className="btn btn-outline-primary" to="/about">
                    About me
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar
