import {useState, useEffect, useContext} from 'react';
import ProductCard from '../componennts/ProductCard';
import {Link} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalContext';
import '../App.css';


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
            
                {products.map((product, i) => {
                    return (
                        <div className="col-sm-12 col-md-3 mb-3" key={i}>
                            <ProductCard product={product} />
                        </div>)
                })}
           
        </div>
    </div>
    )
}

export default HomePage;