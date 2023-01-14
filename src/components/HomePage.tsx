import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../helpers/interfaces';
import ProductTable from './ProductTable';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, TablePagination, Box } from '@mui/material';
import SearchBar from './SearchBar';

const HomePage = () => {

    const [page, setPage] = useState(0);
    const rowsPerPage= 5;
  
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
    console.log(page)


    const [inputValue, setInputValue] = useState(0);

    const [product, setProduct] = useState<Product[]>([]);
    console.log (product)

    useEffect(() => {
        if (inputValue>0) {
            axios.get(`https://reqres.in/api/products/${inputValue}`)
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
        } else {
        axios.get(`https://reqres.in/api/products?per_page=${rowsPerPage}&page=${page+1}`)
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
        }
    },[inputValue,page])
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
                     {/* // TODO: remove unknown */}
                    {inputValue>0 && <ProductTable product ={product as unknown as Product} key = {0} /> }
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            sx={{width:'25%', mx:'auto'}}
            rowsPerPageOptions={[5]}
            component="div"
            count={12}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
        /> 
        </>
    )
        
}

export default HomePage;