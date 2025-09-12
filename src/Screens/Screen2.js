import React, { useState } from "react";
import { ImSpoonKnife } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
const Screen2 = () => {
    const navigate = useNavigate();

    const checkout = () => {

        navigate("/Screen4");
    };
    // Product list
    const products = [
        { id: 1, name: "Hamburger", price: 200, img: "./assets/burger.jpeg" },
        { id: 2, name: "Fries", price: 100, img: "./assets/fries.jpeg" },
        { id: 3, name: "Coke", price: 50, img: "./assets/coke.jpeg" },
        { id: 4, name: "Pepsi", price: 50, img: "./assets/pepsi.jpeg" },
    ];

    // Cart state
    const [cart, setCart] = useState({});
    const [showCart, setShowCart] = useState(false); // toggle for cart box

    // Increment item
    const handleAdd = (id) =>
        setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));

    // Decrement item
    const handleRemove = (id) =>
        setCart((prev) => ({ ...prev, [id]: prev[id] > 0 ? prev[id] - 1 : 0 }));

    // Cart calculations
    const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
    const totalPrice = products.reduce(
        (sum, product) => sum + (cart[product.id] || 0) * product.price,
        0
    );

    return (
        <>
            {/* Navbar */}
            <div className={showCart ? "blur-bg" : ""}>
                <div className="navbar1">
                    <li style={{ marginRight: "-20px" }}>
                        <ImSpoonKnife />
                    </li>
                    <li>Food's Restaurant</li>

                    {/* Cart Icon (toggle box) */}
                    <li
                        style={{ marginLeft: "auto", cursor: "pointer", position: "relative", color: "black" }}
                        onClick={() => setShowCart(!showCart)}
                    >
                        <FaShoppingCart style={{ fontSize: "28px" }} />
                        <span
                            style={{
                                position: "absolute",
                                top: "-10px",
                                right: "-35px",
                                backgroundColor: "grey",
                                color: "white",
                                border: "2px solid white",
                                borderRadius: "50%",
                                padding: "5px",
                                paddingLeft: "9px",
                                fontSize: "13px",
                                fontWeight: "bold",
                                width: "30px"
                            }}
                        >
                            {totalItems}
                        </span>
                    </li>
                </div>

                {/* Products Grid */}
                <section className="main-card--cointainer">
                    {products.map((item) => (
                        <div className="card-container" key={item.id}>
                            <div className="card">
                                <div className="card-body">
                                    <img src={item.img} alt={item.name} className="card-media" />
                                    <span className="card-author subtle">{item.name}</span>
                                    <span className="card-price">Price: ₹{item.price}</span>

                                    <br />
                                    <span style={{ margin: "0 10px", marginLeft: "15px" }}>Total {cart[item.id] || 0}</span>
                                    <div className="main-button">
                                        <button
                                            className="card-button"
                                            onClick={() => handleAdd(item.id)}
                                        >
                                            +
                                        </button>

                                        <button
                                            className="card-button"
                                            onClick={() => handleRemove(item.id)}
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>

            {/* Cart Box */}
            {showCart && (
                <div className="cart-box">
                    <h2>Order Summary</h2>
                    {totalItems === 0 ? (
                        <p>Cart is empty</p>
                    ) : (
                        <ul>
                            {products.map(
                                (item) =>
                                    cart[item.id] > 0 && (
                                        <li
                                            key={item.id}
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                marginBottom: "0px",   // line gap kam
                                                fontSize: "12px",
                                                color: "grey"      // text thoda chhota
                                            }}
                                        >
                                            {/* Product name */}
                                            <span>{item.name}</span>
                                            <span>{cart[item.id]}</span>
                                            {/* Quantity + buttons */}
                                            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                                <button
                                                    className="card-button"
                                                    style={{ padding: "8px 6px", fontSize: "18px", backgroundColor: "red" }}
                                                    onClick={() => handleRemove(item.id)}
                                                >
                                                    -
                                                </button>

                                                <button
                                                    className="card-button"
                                                    style={{ padding: "8px 6px", fontSize: "18px" }}
                                                    onClick={() => handleAdd(item.id)}
                                                >
                                                    +
                                                </button>
                                            </span>
                                        </li>
                                    )
                            )}
                        </ul>
                    )}
                    <h3>Total: ₹{totalPrice}</h3>
                    <button onClick={checkout} style={{ marginLeft: "320px" }}>Save And Checkout</button>
                    <button onClick={() => setShowCart(false)} style={{ backgroundColor: "white", color: "blue" }}>Cancel</button>
                </div>
            )}
        </>
    );
};

export default Screen2;
