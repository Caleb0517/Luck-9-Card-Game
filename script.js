function drawCards() {
    const numOfCards = document.getElementById('numCards').value;
    if (numOfCards < 1 || numOfCards > 2) {
        alert("You can only draw 1 or 2 cards.");
        return;
    }
    const cardResult = document.getElementById('cardResult');
    const cardImages = document.getElementById('cardImages');
    let values = [];
    let images = [];
    let totalValue = 0;

    for (let i = 0; i < numOfCards; i++) {
        let value = Math.floor(Math.random() * 10) + 1; // Cards from 1 to 10
        values.push(value);
        totalValue += value;
        images.push(`<img src="back.jpg" class="card" data-value="${value}">`);
    }

    totalValue = totalValue % 10;
    cardResult.textContent = '';
    cardImages.innerHTML = images.join('');

    let clickedCards = 0;
    let currentTotal = 0;

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function () {
            if (this.src.includes('back.jpg')) {
                this.src = `Cards/${this.dataset.value}.svg`;
                clickedCards++;
                currentTotal += parseInt(this.dataset.value);
                if (clickedCards === 1) {
                    cardResult.textContent = `Score: ${this.dataset.value}`;
                    if (numOfCards == 1) {
                        currentTotal = currentTotal % 10;
                        cardResult.textContent = `cards: ${values.join(', ')} | Score: ${currentTotal}`;
                        setTimeout(() => {
                            if (currentTotal === 0) {
                                alert("Talo ka! HAHAHAHA");
                            } else if (currentTotal === 9) {
                                alert("You've got the winning score");
                            }
                        }, 100);
                    }
                } else if (clickedCards === 2) {
                    currentTotal = currentTotal % 10;
                    cardResult.textContent = `cards: ${values.join(', ')} | Score: ${currentTotal}`;
                    setTimeout(() => {
                        if (currentTotal === 0) {
                            alert("Talo ka! HAHAHAHA");
                        } else if (currentTotal === 9) {
                            alert("You've got the winning score");
                        }
                    }, 100);
                }
            }
        });
    });
}