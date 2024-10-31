import React from "react";
import "./index.css";
import productsData from '../../data/products';

function Home({ addToCart }) {

    const [products] = React.useState(productsData);
    return (
        <div className="layout-column align-items-center justify-content-start" data-testid="home">
            <h3 data-testid="home-heading">Home</h3>
            <div className="products" data-testid="featured-products">
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
                            {products.map((product) => (
                                <tr key={`row-${product.id}`}>
                                    <td data-testid={`product-name-${product.id}`}>{product.name}</td>
                                    <td data-testid={`product-description-${product.id}`}>{product.description}</td>
                                    <td data-testid={`product-cost-${product.id}`}>{`$${product.price?.toFixed(2)}`}</td>
                                    <td>
                                        <button
                                            data-testid={`add-to-cart-button-${product.id}`}
                                            onClick={() => addToCart(product)}
                                        >
                                            Add to cart
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;
