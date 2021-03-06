import React, {createContext, useReducer} from 'react';
import instance from '../api/apiConfig';

const initialState = {
    products: [],
    cart: [],
    getProducts: () => {},
}

const appReducer = (state:any, action:any) => {
    switch(action.type) {
        case 'GET_PRODUCTS': 
            return {...state, products: action.payload};
        default: 
            return state;    
    }
}

export const GlobalContext = createContext<InitialStateType>(initialState); 

export const GlobalProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const getProducts = async () => {
        try {
            let {data} = await instance.get('/products')
            dispatch({type: 'GET_PRODUCTS', payload:data})
        }

        catch (e) {
            console.log(e);
        }
    }

    return (
        <GlobalContext.Provider value={{ products: state.products, cart: state.cart, getProducts}}>
            {children}

        </GlobalContext.Provider>

    );
};




