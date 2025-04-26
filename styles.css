// Load existing listings from localStorage when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const listings = JSON.parse(localStorage.getItem('userListings')) || [];
    const listingsContainer = document.getElementById('listingsContainer');
    listings.forEach(listing => {
        const listItem = document.createElement('li');
        listItem.textContent = `${listing.title} - $${listing.price}: ${listing.description}`;
        listingsContainer.appendChild(listItem);
    });
});

// Handle profile form submission
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Profile created successfully! You can now add listings.');
    this.reset();
});

// Handle listing form submission
document.getElementById('listingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('listingTitle').value;
    const description = document.getElementById('listingDescription').value;
    const price = document.getElementById('listingPrice').value;

    if (!title || !description || !price) {
        alert('Please fill in all fields.');
        return;
    }

    // Store in localStorage
    const listing = { title, description, price };
    let listings = JSON.parse(localStorage.getItem('userListings')) || [];
    listings.push(listing);
    localStorage.setItem('userListings', JSON.stringify(listings));

    // Display the listing
    const listingsContainer = document.getElementById('listingsContainer');
    const listItem = document.createElement('li');
    listItem.textContent = `${listing.title} - $${listing.price}: ${listing.description}`;
    listingsContainer.appendChild(listItem);

    // Reset the form
    this.reset();
});

// Back to Top button functionality
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
