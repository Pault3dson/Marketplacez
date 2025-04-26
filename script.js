// Firebase Configuration (replace with your config from Firebase Console)
const firebaseConfig = <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA-da_89Z3Qk2n3Wob1uWkYz2t0RM9cu4E",
    authDomain: "marketplacez.firebaseapp.com",
    projectId: "marketplacez",
    storageBucket: "marketplacez.firebasestorage.app",
    messagingSenderId: "406337316611",
    appId: "1:406337316611:web:d54efdb5570aa42e622b36"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>
    apiKey: "your-api-key",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Load listings from Firestore and display them
document.addEventListener('DOMContentLoaded', function() {
    const listingsContainer = document.getElementById('listingsContainer');
    db.collection('listings').orderBy('title').onSnapshot(snapshot => {
        listingsContainer.innerHTML = ''; // Clear existing listings
        snapshot.forEach(doc => {
            const listing = doc.data();
            const listItem = document.createElement('li');
            listItem.textContent = `${listing.title} - $${listing.price}: ${listing.description} (Added by: ${listing.userEmail})`;
            listingsContainer.appendChild(listItem);
        });
    }, error => {
        console.error('Error fetching listings:', error);
        alert('Failed to load listings. Please try again later.');
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
    const price = parseFloat(document.getElementById('listingPrice').value);
    const userEmail = document.getElementById('userEmail').value || 'anonymous@example.com'; // Fallback email if auth not used

    if (!title || !description || !price || !userEmail) {
        alert('Please fill in all fields, including your email in the profile form.');
        return;
    }

    // Add listing to Firestore
    db.collection('listings').add({
        title: title,
        description: description,
        price: price,
        userEmail: userEmail
    })
    .then(() => {
        alert('Listing added successfully!');
        this.reset(); // Reset the form
    })
    .catch(error => {
        console.error('Error adding listing:', error);
        alert('Failed to add listing. Please try again.');
    });
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
