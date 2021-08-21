

// 8bg button handler
document.getElementById('memory-button-8gb').addEventListener('click', function () {
    const previousMemoryCost = document.getElementById('extra-memory-cost');
    const memoryCost = parseInt(previousMemoryCost.innerText);
    const fixedCost = 0;
    previousMemoryCost.innerText = fixedCost;
    const previousTotalPrice = document.getElementById('total-price');
    const totalPrice = parseInt(previousTotalPrice.innerText);
    let price = totalPrice + fixedCost;
    previousTotalPrice.innerText = price;
    if (totalPrice == 1479) {
        let price = totalPrice - 180;
        previousTotalPrice.innerText = price;
    }
});

// 16gb button handaler
document.getElementById('memory-button-16gb').addEventListener('click', function () {
    const previousMemoryCost = document.getElementById('extra-memory-cost');
    const memoryCost = parseInt(previousMemoryCost.innerText);
    const fixedCost = 180;
    previousMemoryCost.innerText = fixedCost;
    const prviousTotalPrice = document.getElementById('total-price');
    const totalPrice = parseInt(prviousTotalPrice.innerText);
    if (totalPrice == 1299) {
        let price = totalPrice + fixedCost;
        prviousTotalPrice.innerText = price;
    }

});

// ssd storage 256GB button
document.getElementById('ssd-storage-256GB').addEventListener('click', function () {
    const previousStorageCost = document.getElementById('extra-storage-cost');
    const storageCost = parseInt(previousStorageCost.innerText);
    const fixedCost = 0;
    previousStorageCost.innerText = fixedCost;
    const previousTotalPrice = document.getElementById('total-price');
    const totalPrice = parseInt(previousTotalPrice.innerText);
    if (totalPrice == 1399) {
        let price = totalPrice - 100;
        previousTotalPrice.innerText = price;
    }
    if (totalPrice == 1479) {
        let price = totalPrice - 180;
        previousTotalPrice.innerText = price;
    }
});


// ssd storage 512GB button
document.getElementById('ssd-storage-512GB').addEventListener('click', function () {
    const previousStorageCost = document.getElementById('extra-storage-cost');
    const storageCost = parseInt(previousStorageCost.innerText);
    const fixedCost = 100;
    previousStorageCost.innerText = fixedCost;
    const previousTotalPrice = document.getElementById('total-price');
    const totalPrice = parseInt(previousTotalPrice.innerText);
    if (totalPrice == 1299) {
        let price = totalPrice + fixedCost;
        previousTotalPrice.innerText = price;
    }
    if (totalPrice == 1479) {
        let price = totalPrice - 180;
        previousTotalPrice.innerText = price + 100;
    }
});
// ssd storage 1TB button
document.getElementById('ssd-storage-1TB').addEventListener('click', function () {
    const previousStorageCost = document.getElementById('extra-storage-cost');
    const storageCost = parseInt(previousStorageCost.innerText);
    const fixedCost = 180;
    previousStorageCost.innerText = fixedCost;
    const previousTotalPrice = document.getElementById('total-price');
    const totalPrice = parseInt(previousTotalPrice.innerText);
    if (totalPrice == 1299) {
        let price = totalPrice + fixedCost;
        previousTotalPrice.innerText = price;
    }
    if (totalPrice == 1399) {
        let price = totalPrice - 100;
        previousTotalPrice.innerText = price + 180;
    }
});


// free delevery button
document.getElementById('free-delevery').addEventListener('click', function () {
    const previousDeliveryCost = document.getElementById('delivery-charge');
    const memoryCost = parseInt(previousDeliveryCost.innerText);
    const fixedCost = 0;
    previousDeliveryCost.innerText = fixedCost;
    const previousTotalPrice = document.getElementById('total-price');
    const totalPrice = parseInt(previousTotalPrice.innerText);
    let price = totalPrice + fixedCost;
    previousTotalPrice.innerText = price;
    if (totalPrice == 1319) {
        let price = totalPrice - 20;
        previousTotalPrice.innerText = price;
    }
});


// paid delivery button
document.getElementById('paid-delivery').addEventListener('click', function () {
    const previousDeliveryCost = document.getElementById('delivery-charge');
    const memoryCost = parseInt(previousDeliveryCost.innerText);
    const fixedCost = 20;
    previousDeliveryCost.innerText = fixedCost;
    const previousTotalPrice = document.getElementById('total-price');
    const totalPrice = parseInt(previousTotalPrice.innerText);
    let price = totalPrice + fixedCost;
    previousTotalPrice.innerText = price;
    if (totalPrice == 1299) {
        let price = totalPrice + fixedCost;
        previousTotalPrice.innerText = price;
    }
});


