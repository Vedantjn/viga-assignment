// In src/services/priceCalculator.js
function calculatePrice(baseDistance, kmPrice, fixPrice, totalDistance) {
    const distanceBeyondBase = totalDistance - baseDistance;
    let totalPrice = fixPrice * 100; // Convert fixPrice to cents

    if (distanceBeyondBase > 0) {
        const additionalPrice = distanceBeyondBase * kmPrice * 100; // Convert kmPrice to cents
        totalPrice += additionalPrice;
    }

    return totalPrice / 100; // Convert back to euros
}

module.exports = { calculatePrice };
