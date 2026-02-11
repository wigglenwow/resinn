/**
 * KEYCHAIN STUDIO - Main Script
 * Handles WhatsApp Integration and UI Interactions
 */

/**
 * 1. WhatsApp Order Logic
 * Opens a chat with a pre-filled message based on the product selected.
 */
function orderWhatsApp(productName) {
    // 91 is the country code for India, followed by your number 7205049701
    const phoneNumber = "917205049701"; 
    
    // Customizes the message based on the button clicked
    const message = `Hi! I'm interested in ordering the "${productName}" keychain from your shop. Could you please provide more details on how to customize and pay?`;
    
    // Encodes the message to be URL-safe (converts spaces to %20, etc.)
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
            
            // Shows the "Stay Tuned" message
            if (noMoreProducts) {
                noMoreProducts.classList.remove('hidden');
            }
        });
    }

    // --- Smooth Scrolling for Navigation ---
    // (Optional: Tailwind's scroll-behavior: smooth handles most of this,
    // but this ensures all anchor links work perfectly.)
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

/**
 * 3. Future Expansion Placeholder
 * (You can add logic here for a shopping cart or dark mode later)
 */
console.log("Keychain Studio JS loaded successfully. 🚀");


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
