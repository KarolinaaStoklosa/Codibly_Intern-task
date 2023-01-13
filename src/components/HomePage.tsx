import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../helpers/interfaces';
import ProductTable from './ProductTable';
import Input from '@mui/joy/Input';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const HomePage = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`https://reqres.in/api/products?per_page=${5}&page=${3}`)
        .then((response) => {
            setProduct(response.data.data)
            console.log(response.data)
            console.log(response.data.data)
        })
    },[])
    return (
        <>
            <Input
            sx={{width:'25%', mx:'auto', marginTop:'1rem'}} 
            type="number"
            defaultValue={0}
            slotProps={{
                input: {
                min: 1,
                max: 12,
                step: 1,
                },
            }}
            />
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
                {product.length!==0 && product.map((el:Product) => {
                    return <ProductTable product = {el} key= {el.id} />})}
                </TableBody>
            </Table>
        </TableContainer>

        </>
    )
        
}

export default HomePage;