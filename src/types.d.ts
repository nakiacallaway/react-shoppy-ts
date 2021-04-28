type Product = {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}


type InitialStateType = {
    products: Product[];
    cart: Product[];
    getProducts: () => void;
}

