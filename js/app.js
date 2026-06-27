// ApexFitness Script Engine
document.addEventListener("DOMContentLoaded", () => {
    
    const targetButtons = document.querySelectorAll(".filter-btn");
    const functionalCards = document.querySelectorAll(".filter-item");

    if (targetButtons.length > 0 && functionalCards.length > 0) {
        targetButtons.forEach(button => {
            button.addEventListener("click", () => {
                
                // 1. Reset button active states
                targetButtons.forEach(btn => {
                    btn.classList.remove("btn-dark", "active");
                    btn.classList.add("btn-outline-dark");
                });
                
                // 2. Highlight selected button
                button.classList.remove("btn-outline-dark");
                button.classList.add("btn-dark", "active");

                // 3. Toggle card display
                const processingFilter = button.getAttribute("data-filter");

                functionalCards.forEach(card => {
                    const trackingCategory = card.getAttribute("data-category");
                    
                    if (processingFilter === "all" || processingFilter === trackingCategory) {
                        card.style.display = "block"; // Show the card
                    } else {
                        card.style.display = "none";  // Hide the card
                    }
                });
            });
        });
    }
});

// Contact Form Interactivity Engine (With Format Checking)
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactGymForm");
    const statusBanner = document.getElementById("formFeedback");

    if (contactForm && statusBanner) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Stop raw form submission refreshes

            // Read individual user parameter entries cleanly
            const nameTxt = document.getElementById("userName").value.trim();
            const emailTxt = document.getElementById("userEmail").value.trim();
            const selectedTrack = document.getElementById("classSelect").value;
            const messageTxt = document.getElementById("userMsg").value.trim();

            // Reset banner status visual states
            statusBanner.className = "d-none alert mb-4 p-3 small";
            statusBanner.innerText = "";

            // 1. Check for blank fields
            if (!nameTxt || !emailTxt || !selectedTrack || !messageTxt) {
                statusBanner.innerText = "Error: Please fill out all configuration blocks completely before submitting.";
                statusBanner.classList.remove("d-none");
                statusBanner.classList.add("alert-danger");
                return;
            }

            // 2. Validate Name format (Must be at least 2 characters, alphabetic spaces allowed)
            const namePattern = /^[a-zA-Z\s]{2,50}$/;
            if (!namePattern.test(nameTxt)) {
                statusBanner.innerText = "Error: Please enter a valid name using only letters (minimum 2 characters).";
                statusBanner.classList.remove("d-none");
                statusBanner.classList.add("alert-danger");
                return;
            }

            // 3. Validate Email format using Regex pattern matching
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(emailTxt)) {
                statusBanner.innerText = "Error: Please enter a valid email address format (e.g., name@example.com).";
                statusBanner.classList.remove("d-none");
                statusBanner.classList.add("alert-danger");
                return;
            }

            // 4. Validate Message length (Ensure meaningful feedback)
            if (messageTxt.length < 10) {
                statusBanner.innerText = "Error: Your message must be at least 10 characters long so our team can help you better.";
                statusBanner.classList.remove("d-none");
                statusBanner.classList.add("alert-danger");
                return;
            }

            // Success configuration pathway
            statusBanner.innerText = `Success! Thank you, ${nameTxt}. Your inquiry has been verified and securely logged.`;
            statusBanner.classList.remove("d-none");
            statusBanner.classList.add("alert-success");

            // Flush the values out of the form fields
            contactForm.reset();
        });
    }
});