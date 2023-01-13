import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../helpers/interfaces';
import ProductTable from './ProductTable';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import SearchBar from './SearchBar';

const HomePage = () => {
    const [inputValue, setInputValue] = useState(0);

    const [product, setProduct] = useState<Product[]>([]);
    console.log (product)

    useEffect(() => {
        axios.get(`https://reqres.in/api/products?per_page=${5}&page=${1}`)
        .then((response) => {
            setProduct(response.data.data)
        })
        .catch((err) => {
            if (err.response.status < 500) {
                alert(err.message)
            } else if (err.response.status >= 500 ) { 
                alert(err.message)
            } 
        })
    },[])
    return (
        <>
            <SearchBar setInputValue={setInputValue}/>
            <TableContainer component={Paper} sx={{width:'25%', mx:'auto', border:'solid 1px', marginTop:'1rem'}}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow >
                        <TableCell>id</TableCell>
                        <TableCell>name</TableCell>
                        <TableCell>year</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {product.length >1 && product.map((el:Product) => {
                        return <ProductTable product={el} key = {el.id} />
                     } ) }
                </TableBody>
            </Table>
        </TableContainer>

        </>
    )
        
}

export default HomePage;