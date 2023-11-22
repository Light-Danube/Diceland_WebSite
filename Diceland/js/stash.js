document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to all delete buttons
    var deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            deleteProduct(button);
            updateTotalPrice();
        });
    });

    // Add event listener to all quantity inputs
    var quantityInputs = document.querySelectorAll('.product-quantity-input');
    quantityInputs.forEach(function (input) {
        input.addEventListener('input', function () {
            updateProductPrice(input);
            updateTotalPrice();
        });
    });

    // Function to delete a product
    function deleteProduct(button) {
        var productContainer = button.closest('.product');
        productContainer.remove();
    }

    // Function to update product price based on quantity
    function updateProductPrice(input) {
        var productContainer = input.closest('.product');
        var priceElement = productContainer.querySelector('.product-price');
        var quantity = parseInt(input.value);
        var unitPrice = parseFloat(priceElement.dataset.unitPrice); // Use data attribute to store unit price

        var newPrice = quantity * unitPrice;
        priceElement.textContent = newPrice.toFixed(2) + ' грн';
    }

    // Function to update total price
    function updateTotalPrice() {
        var totalPriceElement = document.querySelector('.total-price');
        var productPrices = document.querySelectorAll('.product-price');

        var total = 0;
        productPrices.forEach(function (priceElement) {
            var price = parseFloat(priceElement.textContent.replace(' грн', '').replace(' ', ''));
            total += price;
        });

        totalPriceElement.textContent = total.toFixed(2) + ' грн';
    }
});

