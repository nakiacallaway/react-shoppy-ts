import React from 'react';
import {Link, useHistory} from 'react-router-dom';

interface CardProps {
    product: Product;
}

const ProductCard:React.FC<CardProps> = ({product}) => {
    const history = useHistory();
    return (
        <div className="card h-100 product-card-hover d-flex flex-column justify-content-between">
            <span className='bob' onClick={()=>history.push(`/products/${product.id}`)}>
            <div className="sh-card-img">
                <div className="sh-bg-img" style={{backgroundImage: `url(${product.image})`}}></div>
                    <div className="card-body">
                        <h5 className='card-title'><Link to={`/products/${product.id}`}> {product.title}</Link> </h5>
                                <div className='d-flex justify-content-between align-items-center'>
                                            <strong>${product.price}</strong>
                                            <span className="badge-warning">{product.category}</span>
                                        </div>
                                    </div>   
</div>

                                    </span>

                                    <div className="card-footer">
                                        <button className="btn btn-block btn-primary">Add to cart</button>
                                    </div>        
                              
                                
                            </div>
    )
}

export default ProductCard