const buyBtns = document.querySelectorAll('.buy-btn');

buyBtns.forEach(buyBtn => {
    buyBtn.addEventListener('click', () => {
        const productName = buyBtn.dataset.product;
        alert(`You have bought ${productName}`);
    });
});
