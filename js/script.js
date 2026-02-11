/**
 * KEYCHAIN STUDIO - Main Script
 * Handles WhatsApp Integration, UI Interactions, and Navigation
 */

/**
 * 1. WhatsApp Order Logic
 * Opens a chat with a pre-filled message based on the product selected.
 */
function orderWhatsApp(productName) {
    // 91 is the country code for India, followed by your number 7205049701
    const phoneNumber = "917205049701"; 
    
    // Customizes the message based on the button clicked
    const message = `Hi! I'm interested in ordering: "${productName}". Can you tell me more about it?`;
    
    // Encodes the message to be URL-safe
    const encodedMessage = encodeURIComponent(message);
    
    // Construct the final URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab/app
    window.open(whatsappUrl, '_blank');
}

/**
 * 2. UI Event Listeners
 * Runs once the HTML document is fully loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Show More Products Logic ---
    const showMoreBtn = document.getElementById('showMoreBtn');
    const hiddenProducts = document.getElementById('hiddenProducts');
    const noMoreProducts = document.getElementById('noMoreProducts');

    if (showMoreBtn && hiddenProducts) {
        showMoreBtn.addEventListener('click', () => {
            // Reveals the hidden grid
            hiddenProducts.classList.add('show');
            
            // Hides the "Show More" button
            showMoreBtn.style.display = 'none';
            
            // Shows the "Stay Tuned" message if it exists
            if (noMoreProducts) {
                noMoreProducts.classList.remove('hidden');
            }
        });
    }

    // --- Smooth Scrolling for Navigation ---
    // Ensures clicking "Reviews", "Story", etc. scrolls smoothly down the page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});

console.log("Keychain Studio JS loaded successfully. 🚀");
