document.addEventListener('DOMContentLoaded', function () {
    const chocolateOptions = [
        { name: 'Milk Chocolate', price: 2.00 },
        { name: 'Dark Chocolate', price: 3.50 },
        { name: 'Munch', price: 3.00 },
        { name: 'Kit Kat', price: 4.50 },
        { name: 'Ferrero Rocher', price: 6.00 },
        { name: 'Dairy Milk', price: 2.50 },
        { name: 'Kinder Bueno', price: 4.00 },
        { name: 'Snickers', price: 2.00 },
        
        
    ];

    const selectedChocolates = [];

    const chocolateOptionsContainer = document.getElementById('chocolate-options');
    const selectedChocolatesContainer = document.getElementById('selected-chocolates');
    const totalPriceElement = document.getElementById('total-price');
    const itemCountElement = document.getElementById('item-count');

    chocolateOptions.forEach(chocolate => {
        const chocolateDiv = document.createElement('div');
        chocolateDiv.innerHTML = `<input type="checkbox" data-name="${chocolate.name}" data-price="${chocolate.price}">${chocolate.name} - $${chocolate.price.toFixed(2)}`;
        chocolateOptionsContainer.appendChild(chocolateDiv);
    });

    chocolateOptionsContainer.addEventListener('change', function (event) {
        const checkbox = event.target;
        const name = checkbox.dataset.name;
        const price = parseFloat(checkbox.dataset.price);

        if (checkbox.checked) {
            if (selectedChocolates.length < 8) {
                selectedChocolates.push({ name, price });
            } else {
                alert('You can only select up to 8 chocolates.');
                checkbox.checked = false;
            }
        } else {
            const index = selectedChocolates.findIndex(choco => choco.name === name);
            selectedChocolates.splice(index, 1);
        }

        displaySelectedChocolates();
        calculateTotalPrice();
        updateItemCount();
    });

    function displaySelectedChocolates() {
        selectedChocolatesContainer.innerHTML = '';
        selectedChocolates.forEach(chocolate => {
            const li = document.createElement('li');
            li.textContent = `${chocolate.name} x 1 - $${chocolate.price.toFixed(2)}`;
            selectedChocolatesContainer.appendChild(li);
        });
    }

    function calculateTotalPrice() {
        const totalPrice = selectedChocolates.reduce((total, chocolate) => total + chocolate.price, 0);
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }
    
    function updateItemCount() {
        itemCountElement.textContent = selectedChocolates.length;
    }
});
