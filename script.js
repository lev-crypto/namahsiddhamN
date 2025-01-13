function showProductList() {
    const productInterest = document.getElementById('product-interest').value;
    const productListContainer = document.getElementById('product-list-container');
    const specificProduct = document.getElementById('specific-product');
    const allOptions = specificProduct.querySelectorAll('option');

    if (productInterest) {
        productListContainer.style.display = 'block';
        allOptions.forEach(option => {
            option.style.display = 'none'; // Hide all options first
            if ((productInterest === 'Industrial Solvent' && option.classList.contains('industrial')) ||
                (productInterest === 'Retail Wholesale Solvent' && option.classList.contains('retail'))) {
                option.style.display = 'block'; // Show only relevant options
            }
        });
    } else {
        productListContainer.style.display = 'none';
    }

    // Clear previous selection
    specificProduct.value = '';
}