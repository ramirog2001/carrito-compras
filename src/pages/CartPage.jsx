import { useContext } from "react"
import { TableComponent } from "../components/TableComponent"
import { CartContext } from "../context/CartContext"
import Swal from "sweetalert2"

export const CartPage = () => {

  const { shoppingList, addProduct, removeProduct, removeAllProduct } = useContext(CartContext)

  const calculateTotal = () => shoppingList.reduce((prev, act) => prev + (act.price * act.quantity), 0).toFixed(2)

  const handlePurchase = () => {
    Swal.fire({
      title: `Total: $${calculateTotal()}`,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#0288d1",
      cancelButtonColor: "#dc3545",
      confirmButtonText: "Finalizar compra",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Compra realizada!",
          text: "Se ha enviado un correo con más detalles de como recibir sus productos.",
          icon: "success",
          confirmButtonColor: "#0288d1"
        });
      }
    });
  }

  return (
    <div className="container p-0">
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col-3">Nombre</th>
            <th scope="col-2">Imagen</th>
            <th scope="col-1">Cantidad</th>
            <th scope="col-2">Precio</th>
            <th width='5%' scope="col-3"></th>
            <th width='5%' scope="col-3"></th>
            <th width='5%' scope="col-3"></th>
          </tr>
        </thead>
        <tbody>
          {
            shoppingList.map(item =>
              <TableComponent
                key={item.id}
                product={item}
                addProduct={() => addProduct(item)}
                removeProduct={() => removeProduct(item)}
                removeAllProduct={() => removeAllProduct(item)}
              />
            )
          }
        </tbody>
      </table>

      <h2 className="text-end">${calculateTotal()}</h2>

      <div className="d-grid">
        <button className="btn btn-primary" onClick={handlePurchase}>Comprar</button>
      </div>
    </div>
  )
}
