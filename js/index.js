// memory event by cliking buttons
function extraMemoryCost(number) {
    const updateStorageCost = number;
    const previousMemoryCost = document.getElementById('extra-memory-cost');
    const memoryCost = previousMemoryCost.innerText;
    previousMemoryCost.innerText = updateStorageCost;
    return updateStorageCost;
}

// storage event by cliking buttons
function extraStorageCost(number) {
    const updateStorageCost = number;
    const previousStorageCost = document.getElementById('extra-storage-cost');
    const storageCost = previousStorageCost.innerText;
    previousStorageCost.innerText = updateStorageCost;
    return updateStorageCost;
}

// delivery event by clicking buttons
function deliveryCharge(number) {
    const updateDeliveryCost = number;
    const previousDeliveryCost = document.getElementById('delivery-charge');
    const deliveryCost = previousDeliveryCost.innerText;
    previousDeliveryCost.innerText = updateDeliveryCost;
    return updateDeliveryCost
}


// button for 8gb memory
document.getElementById('memory-button-8gb').addEventListener('click', function () {
    extraMemoryCost(0);

});
// button for 16gb memory
document.getElementById('memory-button-16gb').addEventListener('click', function () {
    extraMemoryCost(180);
});


// button for 256GB storage
document.getElementById('ssd-storage-256GB').addEventListener('click', function () {
    extraStorageCost(0);
});
// button for 512GB storage
document.getElementById('ssd-storage-512GB').addEventListener('click', function () {
    extraStorageCost(100);
});
// button for 1TB storage
document.getElementById('ssd-storage-1TB').addEventListener('click', function () {
    extraStorageCost(180);
});


//Free Prime Delevery
document.getElementById('free-delevery').addEventListener('click', function () {
    deliveryCharge(0);
});
//Free Prime Delevery
document.getElementById('paid-delivery').addEventListener('click', function () {
    deliveryCharge(20);
});