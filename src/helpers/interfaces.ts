export interface Product {
    id: number,
    name: string,
    year: number,
    color: string,
    pantone_value: string
}

export interface ProductProps {
    product: Product,
    key: number,
}

export interface SearchFormProps {
    setInputValue: (value:number)=>void;
}
export interface SearchFormData {
    inputValue: number;
}