import {Switch, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import ProductPage from '../pages/ProductPage';
import Navbar from '../componennts/Navbar';


const AppRoutes = () => {
    return (
    <div>
        <Navbar />
        <div className="container-fluid">
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/products/:productId' component={ProductPage} />
                <Route path='/cart' component={CartPage}/>
                <Route path='/checkout' component={CheckoutPage}/>
           </Switch>

        </div>
    </div>
    )
}

export default AppRoutes;
