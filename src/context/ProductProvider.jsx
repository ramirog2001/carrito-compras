import Swal from "sweetalert2"
import { ProductContext } from "./ProductContext"
import { useEffect, useState } from "react"

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState()

    const fetchData = async () => {

        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Hubo un problema al cargar los productos'
            })
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
}
