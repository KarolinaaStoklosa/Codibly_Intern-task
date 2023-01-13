import React from 'react';
import { ProductProps } from '../helpers/interfaces';
import {  TableRow, TableCell } from '@mui/material';

const ProductTable: React.FC<ProductProps> = (product, key) => {
    const bgColor = product.product.color;
    console.log(product.product.color)
    return (
        <TableRow
            key={key} sx={{backgroundColor:bgColor}}
            >
            <TableCell component="th" scope="row" >
                {product.product.id}
            </TableCell>
            <TableCell>{product.product.name}</TableCell>
            <TableCell>{product.product.year}</TableCell>
        </TableRow>

    )
}

export default ProductTable;