import React from 'react';
import { useForm } from 'react-hook-form'
import { Input} from '@mui/material';
import { SearchFormData, SearchFormProps } from '../helpers/interfaces';

const SearchBar:React.FC<SearchFormProps> = ({setInputValue}) => {
    const {register, handleSubmit} = useForm<SearchFormData>();
    let inputHandler = (data:SearchFormData) => {
        setInputValue(data.inputValue)
    }
    return (
        <>
            <form
                onChange = {handleSubmit(inputHandler)} >
                <Input 
                {...register("inputValue",{})}
                sx={{width:'25%', display: 'block', mx:'auto', marginTop:'1rem', borderRadius:'.2rem', border:'solid 1px'}} 
                type="number"
                slotProps={{
                    input: {
                        style:{textAlign:'center'},
                        min: 1,
                        max: 12,
                        step: 1,
                    },
                }}
                />
            </form>
        </>
    )
}

export default SearchBar;