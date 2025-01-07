// script.js
function showProductList() {
    const productInterest = document.getElementById('product-interest').value;
    const productListContainer = document.getElementById('product-list-container');
    const specificProduct = document.getElementById('specific-product');

    if (productInterest) {
        productListContainer.style.display = 'block';
    } else {
        productListContainer.style.display = 'none';
    }

    // Clear previous selection if product interest changes
    specificProduct.value = '';
}
