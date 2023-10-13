const calculateTotalCost = (data, calcType) => {
  const { quantity, avgPrice, totalCost } = data;
  let total;
  if (calcType === "compute" || calcType === "managed") {
    total = (quantity * 8760 * avgPrice).toFixed(2).replace(/\.00$/, "");
  }

  if (calcType === "other") {
    total = totalCost.toFixed(2).replace(/\.00$/, "");
  }

  if (calcType === "storage") {
    total = quantity * 1024 * avgPrice * 12;
    total = total.toFixed(2).replace(/\.00$/, "");
  }

  if (calcType === "network") {
    total = quantity * 1024 * avgPrice * 365;
    total = total.toFixed(2).replace(/\.00$/, "");
  }
  return Number(total);
};

export default calculateTotalCost;
