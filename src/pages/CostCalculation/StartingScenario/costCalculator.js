const calculateTotalCost = (data, calcType) => {
  const {
    quantity,
    quantityUnit,
    avgPrice,
    quantityCycle,
    priceCycle,
    priceUnit,
    totalCost,
  } = data;

  if (calcType === "compute" || calcType === "managed") {
    const total = (quantity * 8760 * avgPrice).toFixed(2);
    return total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  if (calcType === "other") {
    return totalCost
      .toFixed(2)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  if (calcType === "storage") {
    const total = quantity * 1024 * avgPrice * 12;
    return total
      .toFixed(2)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  if (calcType === "network") {
    const total = quantity * 1024 * avgPrice * 365;
    return total
      .toFixed(2)
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
};

export default calculateTotalCost;
