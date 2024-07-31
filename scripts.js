document.addEventListener('DOMContentLoaded', () => {
    const walletButton = document.getElementById('walletButton');
    const walletContainer = document.getElementById('walletContainer');
    const addCardForm = document.getElementById('addCardForm');
    const cardList = document.getElementById('cardList');

    let cards = [];

    walletButton.addEventListener('click', () => {
        walletContainer.style.display = walletContainer.style.display === 'none' ? 'block' : 'none';
    });

    addCardForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const cardName = document.getElementById('cardName').value;
        const cardNumber = document.getElementById('cardNumber').value;

        const card = {
            firstName,
            lastName,
            cardName,
            cardNumber
        };

        cards.push(card);
        renderCards();
        addCardForm.reset();
    });

    function renderCards() {
        cardList.innerHTML = '';
        cards.forEach(card => {
            const li = document.createElement('li');
            li.textContent = `${card.firstName} ${card.lastName} - ${card.cardName} (${card.cardNumber})`;
            cardList.appendChild(li);
        });
    }
});
