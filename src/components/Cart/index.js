import React from "react";
import "./index.css";

function Cart({ cartItems, removeFromCart }) {

    const totalCost = cartItems.reduce((total, item) => total + item.cost, 0).toFixed(2);

    return (
        <div className="layout-column align-items-center justify-content-start" data-testid="shopping-cart">
            <h3 data-testid="cart-heading">Cart</h3>
            <div className="cart" data-testid="cart">
                <div className="card w-200 pt-30 pb-8 mt-10">
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Description</th>
                                <th>Cost</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody data-testid="products">
                            {cartItems.map((item) => (
                                <tr key={`row-${item.id}`}>
                                    <td data-testid={`product-name-${item.id}`}>{item.name}</td>
                                    <td data-testid={`product-description-${item.id}`}>{item.description}</td>
                                    <td data-testid={`product-cost-${item.id}`}>${item.cost.toFixed(2)}</td>
                                    <td>
                                        <button
                                            data-testid={`remove-from-cart-button-${item.id}`}
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Remove from cart
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <section className="layout-row align-items-center justify-content-center mt-30">
                    <label className="cart-total" data-testid="cart-total">{totalCost}</label>
                </section>
            </div>
        </div>
    );
}

export default Cart;
