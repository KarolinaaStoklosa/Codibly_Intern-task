export interface Item {
    id: number,
    name: string,
    year: number,
    color: string,
    pantone_value: string
}

export interface ItemProps {
    item: Item,
    key: number,
}

export interface SearchFormProps {
    setInputValue: (value:number)=>void;
}
export interface SearchFormData {
    inputValue: number;
}
