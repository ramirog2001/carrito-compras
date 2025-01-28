import { Navigate, Route, Routes } from "react-router-dom"
import { NavBarComponent } from "./components/NavBarComponent"
import { ProductsPage } from "./pages/ProductsPage"
import { CartPage } from "./pages/CartPage"
import { ProductProvider } from "./context/ProductProvider"
import { CartProvider } from "./context/CartProvider"

export const StoreApp = () => {
    return (
        <ProductProvider>
            <CartProvider>
                <NavBarComponent />
                <Routes >
                    <Route path="/" element={<ProductsPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/*" element={<Navigate to='/' />} />
                </Routes>
            </CartProvider>
        </ProductProvider>
    )
}
