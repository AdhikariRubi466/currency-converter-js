// NPR to USD conversion rate
const nprToUsdRate = 0.0076; // 1 NPR ≈ 0.0076 USD

document.getElementById('convertBtn').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const from = document.getElementById('fromCurrency').value;
    const to = document.getElementById('toCurrency').value;

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    let converted = 0;

    // Only convert NPR → USD
    if (from === "NPR" && to === "USD") {
        converted = amount * nprToUsdRate;
    } else if (from === "USD" && to === "NPR") {
        converted = amount / nprToUsdRate;
    } else if (from === to) {
        converted = amount; // same currency
    } else {
        alert("This converter only supports NPR ↔ USD.");
        return;
    }

    document.getElementById('result').value = converted.toFixed(2);
});
