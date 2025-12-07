document.addEventListener('DOMContentLoaded', () => {
    // 1. Data for the Menu (Simulating an API call/database)
    const menuData = [
        { name: "Caprese Skewers", description: "Fresh mozzarella, cherry tomatoes, and basil drizzled with balsamic glaze.", price: 12 },
        { name: "Truffle Mushroom Risotto", description: "Creamy arborio rice with wild mushrooms and white truffle oil.", price: 28 },
        { name: "Pan-Seared Salmon", description: "Served with roasted asparagus and lemon-dill sauce.", price: 35 },
        { name: "Chocolate Lava Cake", description: "Warm chocolate cake with a molten center, served with vanilla bean ice cream.", price: 10 }
    ];

    const menuItemsContainer = document.getElementById('menu-items');

    // Function to render the menu items
    function renderMenu() {
        // Clear the placeholder content
        menuItemsContainer.innerHTML = ''; 

        menuData.forEach(item => {
            const menuItemDiv = document.createElement('div');
            menuItemDiv.classList.add('menu-item');
            
            menuItemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span>$${item.price.toFixed(2)}</span>
            `;
            
            menuItemsContainer.appendChild(menuItemDiv);
        });
    }

    // Call the function to display the menu on load
    renderMenu();

    // 2. Event Listener for the CTA button
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('click', () => {
        // Scroll smoothly to the menu section
        document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    });

    // 3. Form Submission Handler for Reservations
    const reservationForm = document.getElementById('reservation-form');
    const reservationMessage = document.getElementById('reservation-message');

    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop the default form submission
        
        // Get form values
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        
        // Simple validation
        if (!name || !date || !time || !guests) {
            reservationMessage.textContent = 'Please fill in all fields.';
            reservationMessage.style.color = 'red';
            return;
        }

        // Simulate sending data to a server
        console.log('Reservation Data:', { name, date, time, guests });
        
        // Display success message
        reservationMessage.textContent = `Thank you, ${name}! Your reservation for ${guests} on ${date} at ${time} has been confirmed.`;
        reservationMessage.style.color = 'green';
        
        // Clear the form after a successful submission
        reservationForm.reset();

        // Optional: Hide the message after a few seconds
        setTimeout(() => {
            reservationMessage.textContent = '';
        }, 5000);
    });
});