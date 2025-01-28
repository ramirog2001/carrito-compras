import { useContext } from "react"
import { ProductComponent } from "../components/ProductComponent"
import { ProductContext } from "../context/ProductContext"
import { CartContext } from "../context/CartContext"

export const ProductsPage = () => {
  const products = useContext(ProductContext)
  const { shoppingList, addProduct, removeProduct, removeAllProduct } = useContext(CartContext)
  
  return (
    <div className="container text-center">

      <h1>Productos</h1>
      <hr />
      <div className="container text-center">
        <div className="row justify-content-center gap-3 gap-md-2 gap-xl-0">
          {products?.map(product => {

            const quantity = shoppingList.filter(shoppingListItem => shoppingListItem.id == product.id)[0]?.quantity

            console.log(product)

            return <ProductComponent
              key={product.id}
              product={product}
              quantity={quantity}
              addProduct={() => addProduct(product)}
              removeProduct={() => removeProduct(product)}
              removeAllProduct={() => removeAllProduct(product)}
            />
          }
          )}
        </div>
      </div>
    </div>
  )
}
