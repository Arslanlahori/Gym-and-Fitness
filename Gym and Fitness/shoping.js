/* get cart total from session on load */
// const button1 = document.getElementById("Button1");
// const button2 = document.getElementById("checkout");
// const button3 = document.getElementById("emptycart");

// // Add a click event listener to Button1
// button1.addEventListener("click", () => {
//     // Enable Button2
//     button2.disabled = false;
// });

// // Add a click event listener to Button3
// button3.addEventListener("click", () => {
//     // Disable Button2
//     button2.disabled = true;
// });
// Get references to the buttons
const addBtn = document.getElementById("Button1");
const checkoutBtn = document.getElementById("checkout");
const emptyBtn = document.getElementById("emptycart");


// Add click event listeners to all three buttons
addBtn.addEventListener("click", toggleCheckoutButton);
checkoutBtn.addEventListener("click", toggleCheckoutButton);
emptyBtn.addEventListener("click", toggleCheckoutButton);

// Function to toggle Checkout button
function toggleCheckoutButton() {
    // Enable Checkout button if Add to Cart button is clicked
    if (addBtn.disabled) {
        checkoutBtn.disabled = false;
    } else {
        // Disable Checkout button if Empty button is clicked
        checkoutBtn.disabled = true;
    }
}

// Add a click event listener to Add to Cart button
// addBtn.addEventListener("click", () => {
//     // Enable Checkout button and disable Add to Cart button and Empty button
//     checkoutBtn.disabled = false;
//     addBtn.disabled = false;
//     emptyBtn.disabled = false;
// });

// // Add a click event listener to Empty button
// emptyBtn.addEventListener("click", () => {
//     // Disable Checkout button and enable Add to Cart button and Empty button
//     checkoutBtn.disabled = true;
//     addBtn.disabled = false;
//     emptyBtn.disabled = false;
// });
// addBtn.addEventListener("click", () => {
//     // Enable Checkout button and disable Add to Cart button and Empty button
//     checkoutBtn.disabled = false;
//     addBtn.disabled = false;
//     emptyBtn.disabled = false;
// });

// Add a click event listener to Checkout button
// checkoutBtn.addEventListener("click", () => {
//     // Disable Checkout button and enable Add to Cart button and Empty button
//     checkoutBtn.disabled = true;
//     addBtn.disabled = false;
//     emptyBtn.disabled = true;
// });

updateCartTotal();

/* button event listeners */
document.getElementById("emptycart").addEventListener("click", emptyCart);
var btns = document.getElementsByClassName('addtocart');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () { addToCart(this); });
}

/* ADD TO CART functions */

function addToCart(elem) {
    //init
    var sibs = [];
    var getprice;
    var getproductName;
    var cart = [];
    var stringCart;
    //cycles siblings for product info near the add button
    while (elem = elem.previousSibling) {
        if (elem.nodeType === 3) continue; // text node
        if (elem.className == "price") {
            getprice = elem.innerText;
        }
        if (elem.className == "productname") {
            getproductName = elem.innerText;
        }
        sibs.push(elem);
    }
    //create product object
    var product = {
        productname: getproductName,
        price: getprice
    };
    //convert product data to JSON for storage
    var stringProduct = JSON.stringify(product);
    /*send product data to session storage */

    if (!sessionStorage.getItem('cart')) {
        //append product JSON object to cart array
        cart.push(stringProduct);
        //cart to JSON
        stringCart = JSON.stringify(cart);
        //create session storage cart item
        sessionStorage.setItem('cart', stringCart);
        addedToCart(getproductName);
        updateCartTotal();
    }
    else {
        //get existing cart data from storage and convert back into array
        cart = JSON.parse(sessionStorage.getItem('cart'));
        //append new product JSON object
        cart.push(stringProduct);
        //cart back to JSON
        stringCart = JSON.stringify(cart);
        //overwrite cart data in sessionstorage 
        sessionStorage.setItem('cart', stringCart);
        addedToCart(getproductName);
        updateCartTotal();
    }
}
/* Calculate Cart Total */
function updateCartTotal() {
    //init
    var total = 0;
    var price = 0;
    var items = 0;
    var productname = "";
    var carttable = "";
    if (sessionStorage.getItem('cart')) {
        //get cart data & parse to array
        var cart = JSON.parse(sessionStorage.getItem('cart'));
        //get no of items in cart 
        items = cart.length;
        //loop over cart array
        for (var i = 0; i < items; i++) {
            //convert each JSON product in array back into object
            var x = JSON.parse(cart[i]);
            //get property value of price
            price = parseFloat(x.price.split('$')[1]);
            productname = x.productname;
            //add price to total
            carttable += "<tr><td>" + productname + "</td><td>$" + price.toFixed(2) + "</td></tr>";
            total += price;
        }

    }
    //update total on website HTML
    document.getElementById("total").innerHTML = total.toFixed(2);
    //insert saved products to cart table
    document.getElementById("carttable").innerHTML = carttable;
    //update items in cart on website HTML
    document.getElementById("itemsquantity").innerHTML = items;
}
//user feedback on successful add
function addedToCart(pname) {
    var message = pname + " was added to the cart";
    var alerts = document.getElementById("alerts");
    alerts.innerHTML = message;
    if (!alerts.classList.contains("message")) {
        alerts.classList.add("message");
    }
}

/* User Manually empty cart */
function emptyCart() {
    //remove cart session storage object & refresh cart totals
    if (sessionStorage.getItem('cart')) {
        sessionStorage.removeItem('cart');
        updateCartTotal();
        //clear message and remove class style
        var alerts = document.getElementById("alerts");
        alerts.innerHTML = "";
        if (alerts.classList.contains("message")) {
            alerts.classList.remove("message");
        }
    }
}
const myForm = document.getElementById("myForm");

// Add an event listener to reset the form when the page is loaded
window.addEventListener("load", () => {
    myForm.reset();
});