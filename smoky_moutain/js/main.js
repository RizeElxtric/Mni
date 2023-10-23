// main.js
document.getElementById('header').innerHTML = `
    <h1>Welcome to the Vape Shop</h1>
    <nav>
        <ul>
            <li><a href="../public/index.html">Home</a></li>
            <li><a href="../src/vape-devices.html">Vape Devices</a></li>
            <li><a href="../src/vaping-juices.html">Vaping Juices</a></li>
            <li><a href="cart.html">Cart</a></li>
            <li><a href="login.html">Login/Register</a></li>
            <li><a href="logout.html">Logout</a></li>
        </ul>
    </nav>
`;

document.getElementById('footer').innerHTML = `
    <div id="about-section">
        <h2>About Us</h2>
        <p>Visit us at:</p>
        <p>123 Vape Street</p>
        <p>City, Country</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Follow us on social media:</p>
        <p><a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a></p>
    </div>
    <p>&copy; 2023 Vape Shop</p>
`;
