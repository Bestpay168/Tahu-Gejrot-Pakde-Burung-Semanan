/* ==========================================
   SCRIPT.JS
   BAGIAN 5A
   TAHU GEJROT PAKDE BURUNG
========================================== */

document.addEventListener("DOMContentLoaded", () => {
    const produkItems = document.querySelectorAll(".menu-item");
    const cart = document.getElementById("cart");
    const subtotalEl = document.getElementById("subtotal");
    const ongkirEl = document.getElementById("ongkir");
    const totalEl = document.getElementById("total");
    const deliveryMethod = document.getElementById("deliveryMethod");
    const paymentSelect = document.getElementById("payment");
    const paymentInfo = document.getElementById("payment-info");

    if (!produkItems.length) return;

    function rupiah(n) {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }).format(n);
    }

    function showPaymentInfo() {
        const value = paymentSelect.value;

        const info = {
            cod: "Bayar saat barang diterima.",
            qris: "Silakan scan QRIS saat checkout.",
            dana: "Pembayaran via DANA.",
            gopay: "Pembayaran via GoPay.",
            ovo: "Pembayaran via OVO.",
            transfer: "Transfer bank sesuai instruksi."
        };

        paymentInfo.innerHTML = value
            ? `<strong>Info Pembayaran:</strong><p>${info[value] || ""}</p>`
            : "";
    }

    function updateCart() {
        let subtotal = 0;
        let html = "";

        produkItems.forEach((item) => {
            const name = item.dataset.name;
            const price = Number(item.dataset.price) || 0;
            const qtyInput = item.querySelector(".qty");
            const qty = Number(qtyInput.value) || 0;

            if (qty > 0) {
                const totalItem = price * qty;
                subtotal += totalItem;
                html += `<div style="display:flex;justify-content:space-between;gap:10px;margin-bottom:8px;">
                            <span>${name} x${qty}</span>
                            <strong>${rupiah(totalItem)}</strong>
                         </div>`;
            }
        });

        const ongkir = deliveryMethod.value === "delivery" ? 10000 : 0;
        const total = subtotal + ongkir;

        cart.innerHTML = html || "<p>Keranjang masih kosong.</p>";
        subtotalEl.textContent = rupiah(subtotal);
        ongkirEl.textContent = rupiah(ongkir);
        totalEl.textContent = rupiah(total);
    }

    produkItems.forEach((item) => {
        const plus = item.querySelector(".plus");
        const minus = item.querySelector(".minus");
        const qty = item.querySelector(".qty");

        plus.addEventListener("click", () => {
            qty.value = Number(qty.value) + 1;
            updateCart();
        });

        minus.addEventListener("click", () => {
            qty.value = Math.max(0, Number(qty.value) - 1);
            updateCart();
        });
    });

    deliveryMethod.addEventListener("change", updateCart);
    paymentSelect.addEventListener("change", showPaymentInfo);

    showPaymentInfo();
    updateCart();
});