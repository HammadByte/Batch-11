// Sample JavaScript for fetching restaurant data
document.addEventListener('DOMContentLoaded', function() {
    // Simulated restaurant data (can be fetched from an API)
    const restaurants = [
        { id: 1, name: "Restaurant A", cuisine: "Italian" },
        { id: 2, name: "Restaurant B", cuisine: "Mexican" },
        { id: 3, name: "Restaurant C", cuisine: "Asian" }
    ];

    const restaurantsSection = document.getElementById('restaurants');

    // Function to display restaurants
    function displayRestaurants() {
        restaurantsSection.innerHTML = '';
        restaurants.forEach(restaurant => {
            const restaurantCard = document.createElement('div');
            restaurantCard.classList.add('restaurant-card');
            restaurantCard.innerHTML = `
                <h2>${restaurant.name}</h2>
                <p>Cuisine: ${restaurant.cuisine}</p>
                <button onclick="addToCart(${restaurant.id})">Add to Cart</button>
            `;
            restaurantsSection.appendChild(restaurantCard);
        });
    }

    displayRestaurants();

    // Function to simulate adding to cart
    function addToCart(restaurantId) {
        // Logic to add item to cart (can be expanded with real functionality)
        alert(`Added restaurant with ID ${restaurantId} to cart.`);
        
    }
});
