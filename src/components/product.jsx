import './product.css';
import QuantityPicker from './quantityPicker';


const Product = () => {
    return(
        <div className='product'>
            <img className="product-img" src="https://picsum.photos/200/300
            " alt=""></img>

            <h2>Title Here</h2>

            <div>
                <label className="total">$Total</label>
                <label className="price">$Price</label>
            </div>
            

            <QuantityPicker></QuantityPicker>
            <button className="btn btn-sm btn-info checkoutBtn">
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
             </button>
        </div>
    );
}


export default Product;