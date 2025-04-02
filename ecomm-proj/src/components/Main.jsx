import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { productList } from "../redux/productAction";
import "./Main.css";
const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div className="all-btns">
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
      </div>
      <div></div>
      <div className="product-container">
        {data.map((item) => (
          <div className="product-item" key={item.id}>
            <img src={item.img} alt={item.name} />
            <div>Name : {item.name}</div>
            <div>Color : {item.color}</div>
            <div>Brand : {item.brand}</div>
            <div>Price : {item.price}</div>
            <div>Category : {item.category}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
