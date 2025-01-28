import { Delete } from "@mui/icons-material"
import { Badge } from "@mui/material"

export const ProductComponent = ({ product, quantity, addProduct, removeProduct, removeAllProduct }) => {


    return (
        <>

            <div className="card col-12 col-md-5 col-xl-3 pb-3 px-3 d-flex-column justify-content-between">
                <div className="row g-0 align-items-center">
                    <div className="col-4">
                        <img src={product.image} alt={product.title} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <Badge badgeContent={quantity} color="info">
                                <h5 className="card-title">{product.title.slice(0, 20)}</h5>
                            </Badge>
                            <p className="card-text">{product.description.slice(0, 100)}</p>
                            <p className="card-text" style={{ fontWeight: 'bold' }}>${product.price.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    {
                        quantity
                            ? <div className="d-flex flex-fill justify-content-end">
                                <button className="btn btn-danger mx-1" onClick={removeAllProduct}><Delete /></button>
                                <button className="btn btn-primary btn-card flex-fill mx-1" onClick={removeProduct}>-1</button>
                                <button className="btn btn-primary btn-card flex-fill mx-1" onClick={addProduct}>+1</button>
                            </div>

                            : <button className="btn btn-primary btn-card flex-fill" onClick={addProduct}>Agregar</button>
                    }
                </div>
            </div >
        </>
    )
}
