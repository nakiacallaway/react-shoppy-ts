import {useState, useEffect, useContext} from 'react';
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
                            <div className="card h-100">
                                <div className="sh-card-img">
                                    <div className="sh-bg-img" style={{backgroundImage: `url(${product.image})`}}>
                                    </div>
                                    <div className="card-body">
                                        <h5 className='card-title'><Link to={`/products/${product.id}`}> {product.title}</Link> </h5>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <strong>${product.price}</strong>
                                            <span className="badge-warning">{product.category}</span>
                                        </div>
                                    </div>    
                                    <div className="card-footer">
                                        <button className="btn btn-block btn-primary">Add to cart</button>
                                    </div>        
                                </div>
                            </div>
                        </div>)
                })}
           
        </div>
    </div>
    )
}

export default HomePage;