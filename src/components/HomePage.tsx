import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Item } from '../helpers/interfaces';
import ItemTable from './ItemTable'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, TablePagination } from '@mui/material';
import SearchBar from './SearchBar';

const HomePage = () => {

    const [page, setPage] = useState(0);
    const rowsPerPage= 5;
  
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };

    const [inputValue, setInputValue] = useState(0);

    const [item, setItem] = useState<Item[]>([]);
    const [totalItemsValue, setTotalItemsValue] = useState(0);

    useEffect(() => {
        if (inputValue>0) {
            axios.get(`https://reqres.in/api/products/${inputValue}`)
        .then((response) => {
            setItem(response.data.data)
            setTotalItemsValue(1)
            console.log(response)
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
            setItem(response.data.data)
            setTotalItemsValue(response.data.total)
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
                    {item.length >1 && item.map((el:Item) => {
                        return <ItemTable item={el} key = {el.id} />
                     } ) }
                     {/* // TODO: remove unknown */}
                    {inputValue>0 && <ItemTable item ={item as unknown as Item} key = {0} /> }
                </TableBody>
            </Table>
            </TableContainer>
            <TablePagination
            sx={{width:'25%', mx:'auto'}}
            rowsPerPageOptions={[5]}
            component="div"
            count={totalItemsValue}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            /> 
        </>
    )
        
}

export default HomePage;