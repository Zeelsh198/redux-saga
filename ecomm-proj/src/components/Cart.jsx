import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { data, Link } from "react-router-dom";
import "./Cart.css"; // Importing the CSS file
import { emptyCart } from "../redux/action";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartData);
  let amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Shopping Cart</h1>

        <Link to="/" className="back-link">
          ← Back to Products
        </Link>
      </div>

      {cartData.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-page-container">
          <table className="cart-table">
            {/* ✅ Table Header */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Color</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Category</th>
              </tr>
            </thead>
            {/* ✅ Table Body */}
            <tbody>
              {cartData.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.img} alt={item.name} className="cart-img" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.color}</td>
                  <td>₹{item.price}</td>
                  <td>{item.brand}</td>
                  <td>{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="price-details">
            <div>
              <span>Amount : </span>
              <span>₹{amount}</span>
            </div>
            <div>
              <span>Discount :</span>
              <span>₹{amount / 10}</span>
            </div>

            <div>
              <span>Total :</span>
              <span>₹{amount - amount / 10}</span>
            </div>
          </div>
        </div>
      )}
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
      </div>
    </div>
  );
};

export default Cart;
