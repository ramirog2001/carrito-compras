import { useTheme } from "@emotion/react"
import { ShoppingCart } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { grey } from "@mui/material/colors"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from "../context/CartContext"

export const NavBarComponent = () => {

    const { shoppingList } = useContext(CartContext)

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark sticky-top" data-bs-theme='dark'>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to='/'>Tienda</NavLink>
                <NavLink className="nav-link active" aria-current="page" to='/cart' style={{ color: 'white' }}>
                    <Badge badgeContent={shoppingList?.reduce((prev, act) => prev + act.quantity, 0)} color='info'>
                        Carrito
                        <ShoppingCart />
                    </Badge>
                </NavLink>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup" />
            </div>
        </nav>
    )
}
