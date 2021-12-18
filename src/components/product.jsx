import './product.css';
import QuantityPicker from './quantityPicker';


function Product(){
    return(
        <div className='product'>
            <img src="https://picsum.photos/200/300
            " alt=""></img>

            <h2>Title Here</h2>
            <label>$Price</label>
            <label>$Total</label>
            <QuantityPicker></QuantityPicker>
            <button>Add</button>
        </div>
    );
}


export default Product;