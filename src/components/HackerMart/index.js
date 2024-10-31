import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import products from "../../data/products";
import Cart from "../Cart";
import Navbar from "../Navbar";
import "./index.css";

function HackerMart() {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		if (!cart.some(item => item.id === product.id)) {
			setCart([...cart, product]);
		}
	};

	const removeFromCart = (productId) => {
		setCart(cart.filter(item => item.id !== productId));
	};

	return (
		<div className="hacker-mart">
			<div className="layout-column align-items-center justify-content-start">
				<Navbar data-testid="header" />
				<Routes>
					<Route element={<Home addToCart={addToCart} />} />
					<Route element={<Cart cartItems={cart} removeFromCart={removeFromCart} />} />
				</Routes>
			</div>
		</div>
	);
}

export default HackerMart;
