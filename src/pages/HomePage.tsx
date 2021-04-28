import {useState, useEffect, useContext} from 'react';
import {GlobalContext} from '../context/GlobalContext';

const HomePage = () => {
    const {products, getProducts} = useContext(GlobalContext);
    
    

    useEffect(() => {
        getProducts();
    }, []);
     

    return (
    <div id='home'>
        <div className="row text-center">
            <div className="col">
                <h2>Home Page</h2>
                <h3>You have {products.length} to choose from</h3> 
            </div>
        </div>
        <div className="row">
            
        </div>
        <div className="row">
            <ul className="list-group">
                {products.map((product, index) => {
                    return (
                        <li className="list-group-item" key={index}>{product.title}</li>
                    )
                })}
            </ul>
        </div>
    </div>
    )
}

export default HomePage;
