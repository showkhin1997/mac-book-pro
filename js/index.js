function itemsCost(extraItemCostId, number) {
    document.getElementById('total-price').innerText = parseInt(document.getElementById('total-price').innerText) - parseInt(document.getElementById(extraItemCostId).innerText);
    const previousCost = document.getElementById(extraItemCostId);
    const memoryCost = parseInt(previousCost.innerText);
    const fixedCost = number;
    previousCost.innerText = fixedCost;
    const PreviousTotalPrice = document.getElementById('total-price');
    const total = parseInt(PreviousTotalPrice.innerText);
    let totalPrice = total + fixedCost;
    PreviousTotalPrice.innerText = totalPrice;
    const previousTotalPriceWithDiscount = document.getElementById('total-amount-withdiscount');
    previousTotalPriceWithDiscount.innerText = totalPrice;
}



// 8bg button handler
document.getElementById('memory-button-8gb').addEventListener('click', function () {
    itemsCost("extra-memory-cost", 0);
});
// 16gb button handaler
document.getElementById('memory-button-16gb').addEventListener('click', function () {
    itemsCost("extra-memory-cost", 180);
});


// ssd storage 256GB button
document.getElementById('ssd-storage-256GB').addEventListener('click', function () {
    itemsCost("extra-storage-cost", 0);
});
// ssd storage 512GB button
document.getElementById('ssd-storage-512GB').addEventListener('click', function () {
    itemsCost("extra-storage-cost", 100);
});
// ssd storage 1TB button
document.getElementById('ssd-storage-1TB').addEventListener('click', function () {
    itemsCost("extra-storage-cost", 180);
});



// free delevery button
document.getElementById('free-delevery').addEventListener('click', function () {
    itemsCost("delivery-charge", 0);
});

// paid delivery button
document.getElementById('paid-delivery').addEventListener('click', function () {
    itemsCost("delivery-charge", 20);
});




