// Efek Partikel Kursor
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        size: { value: 3 },
        move: { speed: 2 },
        line_linked: { enable: true, opacity: 0.5 }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" }
        }
    }
});

// Keranjang
let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.product} - Rp ${item.price.toLocaleString()}`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = `Rp ${total.toLocaleString()}`;
}

// Dark Mode
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// Efek Klik
document.addEventListener("click", function (event) {
    event.target.classList.add("clicked");
    setTimeout(() => event.target.classList.remove("clicked"), 300);
});

// Efek Scroll
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 0, 0, 0.9)";
    } else {
        navbar.style.background = "rgba(0, 0, 0, 0.7)";
    }
});