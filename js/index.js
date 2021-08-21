

// 8bg button handler
document.getElementById('memory-button-8gb').addEventListener('click', function () {
    const previousMemoryCost = document.getElementById('extra-memory-cost');
    const memoryCost = parseInt(previousMemoryCost.innerText);
    const fixedCost = 0;
    // let totalMemoryCost = memoryCost + fixedCost;
    previousMemoryCost.innerText = fixedCost;
    const previousTotalPrice = document.getElementById('total-price');
    const totalPrice = parseInt(previousTotalPrice.innerText);
    let price = totalPrice + fixedCost;
    previousTotalPrice.innerText = price;

});

// 16gb button handaler
document.getElementById('memory-button-16gb').addEventListener('click', function () {
    const previousMemoryCost = document.getElementById('extra-memory-cost');
    const memoryCost = parseInt(previousMemoryCost.innerText);
    const fixedCost = 180;
    // let totalMemoryCost = memoryCost + fixedCost;
    previousMemoryCost.innerText = fixedCost;
    const prviousTotalPrice = document.getElementById('total-price');
    const totalPrice = parseInt(prviousTotalPrice.innerText);
    let price = totalPrice + fixedCost;
    prviousTotalPrice.innerText = price;
});

// ssd storage 256GB button
document.getElementById('ssd-storage-256GB').addEventListener('click', function () {
    const previousStorageCost = document.getElementById('extra-storage-cost');
    const storageCost = parseInt(previousStorageCost.innerText);
    const fixedCost = 0;
    let totalStorageCost = storageCost + fixedCost;
    previousStorageCost.innerText = totalStorageCost;
    const previousTotalPrice = document.getElementById('total-price');
    const totalPrice = parseInt(previousTotalPrice.innerText);
    let price = totalPrice + totalStorageCost;
    previousTotalPrice.innerText = price;
});


// ssd storage 512GB button
document.getElementById('ssd-storage-512GB').addEventListener('click', function () {
    const previousStorageCost = document.getElementById('extra-storage-cost');
    const storageCost = parseInt(previousStorageCost.innerText);
    const fixedCost = 100;
    let totalStorageCost = storageCost + fixedCost;
    previousStorageCost.innerText = totalStorageCost;
    const previousTotalPrice = document.getElementById('total-price');
    const totalPrice = parseInt(previousTotalPrice.innerText);
    let price = totalPrice + totalStorageCost;
    previousTotalPrice.innerText = price;
});


// ssd storage 1TB button
document.getElementById('ssd-storage-1TB').addEventListener('click', function () {
    const previousStorageCost = document.getElementById('extra-storage-cost');
    const storageCost = parseInt(previousStorageCost.innerText);
    const fixedCost = 180;
    let totalStorageCost = storageCost + fixedCost;
    previousStorageCost.innerText = totalStorageCost;
    const previousTotalPrice = document.getElementById('total-price');
    const totalPrice = parseInt(previousTotalPrice.innerText);
    let price = totalPrice + totalStorageCost;
    previousTotalPrice.innerText = price;
});


// free delevery button
document.getElementById('free-delevery').addEventListener('click', function () {
    const previousDeliveryCost = document.getElementById('delivery-charge');
    const deliveryCost = parseInt(previousDeliveryCost.innerText);
    const fixedCost = 0;
    let totalStorageCost = deliveryCost + fixedCost;
    previousDeliveryCost.innerText = totalStorageCost;
    const previousTotalPrice = document.getElementById('total-price');
    const totalPrice = parseInt(previousTotalPrice.innerText);
    let price = totalPrice + totalStorageCost;
    previousTotalPrice.innerText = price;
});


// paid delivery button
document.getElementById('paid-delivery').addEventListener('click', function () {
    const previousDeliveryCost = document.getElementById('delivery-charge');
    const deliveryCost = parseInt(previousDeliveryCost.innerText);
    const fixedCost = 20;
    let totalStorageCost = deliveryCost + fixedCost;
    previousDeliveryCost.innerText = totalStorageCost;
    const previousTotalPrice = document.getElementById('total-price');
    const totalPrice = parseInt(previousTotalPrice.innerText);
    let price = totalPrice + totalStorageCost;
    previousTotalPrice.innerText = price;
});


