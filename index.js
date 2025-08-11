let variable1 = 0;

document.getElementById("add-item").addEventListener("click", function() {
    variable1 = variable1 + 1;
    console.log(variable1);
    console.log("Item added to cart");
});

document.getElementById("show-qty").addEventListener("click", function() {
    console.log("cart Quantity is " + variable1);
    document.getElementById("cart-quantity").innerText = "Total Items in cart: " + variable1;

});
document.getElementById("increase-qty2").addEventListener("click", function(){

    variable1 = variable1 + 2;
    console.log(variable1);
    console.log("Item added to cart");
});

document.getElementById("increase-qty3").addEventListener("click", function(){
    variable1 = variable1 + 3;
    console.log(variable1);
    console.log("Item added to cart");

});

document.getElementById("reset-cart").addEventListener("click", function(){
    variable1 = 0;
    console.log(variable1);
    console.log("Cart is empty now");
})