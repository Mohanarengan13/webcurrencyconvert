const rates = {
    USD: { USD: 1, EUR: 0.91, GBP: 0.77, INR: 82.25, JPY: 146.77, AUD: 1.49, CAD: 1.35, CHF: 0.90, CNY: 7.18, MXN: 18.32 },
    EUR: { USD: 1.10, EUR: 1, GBP: 0.85, INR: 90.40, JPY: 161.30, AUD: 1.64, CAD: 1.48, CHF: 0.99, CNY: 7.90, MXN: 20.19 },
    GBP: { USD: 1.30, EUR: 1.18, GBP: 1, INR: 106.46, JPY: 189.63, AUD: 1.93, CAD: 1.73, CHF: 1.16, CNY: 9.27, MXN: 23.72 },
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0094, INR: 1, JPY: 1.78, AUD: 0.018, CAD: 0.016, CHF: 0.011, CNY: 0.087, MXN: 0.19 },
    JPY: { USD: 0.0068, EUR: 0.0062, GBP: 0.0053, INR: 0.56, JPY: 1, AUD: 0.010, CAD: 0.0092, CHF: 0.0061, CNY: 0.049, MXN: 0.11 },
    AUD: { USD: 0.67, EUR: 0.61, GBP: 0.52, INR: 55.19, JPY: 98.51, AUD: 1, CAD: 0.85, CHF: 0.61, CNY: 4.62, MXN: 11.23 },
    CAD: { USD: 0.74, EUR: 0.68, GBP: 0.58, INR: 62.43, JPY: 108.45, AUD: 1.18, CAD: 1, CHF: 0.72, CNY: 5.43, MXN: 13.26 },
    CHF: { USD: 1.11, EUR: 1.01, GBP: 0.86, INR: 89.14, JPY: 162.98, AUD: 1.64, CAD: 1.38, CHF: 1, CNY: 7.56, MXN: 18.36 },
    CNY: { USD: 0.14, EUR: 0.13, GBP: 0.11, INR: 11.46, JPY: 20.51, AUD: 0.22, CAD: 0.18, CHF: 0.13, CNY: 1, MXN: 2.43 },
    MXN: { USD: 0.055, EUR: 0.049, GBP: 0.042, INR: 5.22, JPY: 9.03, AUD: 0.089, CAD: 0.075, CHF: 0.054, CNY: 0.41, MXN: 1 }
};

function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    
    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = 'Please enter a valid amount.';
        return;
    }

    const rate = rates[fromCurrency][toCurrency];
    const result = amount * rate;
    
    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}
