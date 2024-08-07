function generateVinylPrice(min, max) {
    const minPrice = min;
    const maxPrice = max;
    const randomPrice = Math.random() * (maxPrice - minPrice) + minPrice;
    return `${randomPrice.toFixed(2).replace(".", ",")}`;
}

export default generateVinylPrice;