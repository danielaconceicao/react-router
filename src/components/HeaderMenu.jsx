import { NavLink } from 'react-router-dom'

export default function HeaderMenu() {
    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/ricette">Ricette</NavLink>
                <NavLink to="/aboutUs">AboutUs</NavLink>
            </nav>
        </>
    )
}