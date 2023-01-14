import React from 'react';
import { ItemProps } from '../helpers/interfaces';
import {  TableRow, TableCell, Modal, Box, Typography } from '@mui/material';

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
    

const ItemTable: React.FC<ItemProps> = (item, key) => {

    const {id, name, year, color, pantone_value} = item.item
    modalStyle.bgcolor = color

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <TableRow data-testid="table-row"
                key={key} sx={{bgcolor: color}} onClick={handleOpen}
                >
                <TableCell component="th" scope="row" >{id}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{year}</TableCell>
            </TableRow>
            <Modal
                data-testid="modal"
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={modalStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        id: {id}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        name: {name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        year: {year}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        color: {color}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        pantone value: {pantone_value}
                    </Typography>
                </Box>
            </Modal>
        </>

    )
}

export default ItemTable;