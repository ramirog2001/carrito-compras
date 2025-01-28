import { Delete } from '@mui/icons-material'
import React from 'react'
import './TableComponent.css'

export const TableComponent = ({ product, addProduct, removeProduct, removeAllProduct }) => {

    console.log(product)

    return (
        <tr>
            <th scope="row">{product.title}</th>
            <td ><img src={product.image} className='table-image' alt={product.title} /></td>
            <td >{product.quantity}</td>
            <td >${product.price.toFixed(2)}</td>
            <td className='table-delete-button' onClick={removeAllProduct}><Delete sx={{ color: 'white' }} /></td>
            <td className='table-modify-button' onClick={removeProduct}>-1</td>
            <td className='table-modify-button' onClick={addProduct}>+1</td>
        </tr >
    )
}
