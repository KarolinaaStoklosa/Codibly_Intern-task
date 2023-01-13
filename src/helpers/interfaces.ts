export interface Product {
    id: number,
    name: string,
    year: number,
    color: string,
    panotne_value: string
}

export interface ProductProps {
    product: Product,
    key: number
}