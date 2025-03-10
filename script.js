// Wait for the page to fully load before running any code
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the HTML elements we need to work with
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const resultsContainer = document.getElementById('results-container');
    const siteTitle = document.querySelector('header h1');
    
    // Add click event to the search button
    searchButton.addEventListener('click', performSearch);
    
    // Also trigger search when Enter key is pressed in the search box
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
    
    // Function to perform the search
    function performSearch() {
        // Get the search term and convert to lowercase for easier matching
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        // Clear previous search results
        resultsContainer.innerHTML = '';
        
        // If the search box is empty, show a message
        if (searchTerm === '') {
            resultsContainer.innerHTML = '<div class="initial-message">Please enter a surname to search</div>';
            return;
        }
        
        // Search for matches in our database
        const results = surnameDatabase.filter(entry => 
            entry.surname.toLowerCase().includes(searchTerm)
        );
        
        // If no results found, show a message
        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="initial-message">
                    <p>No surnames found matching "${searchInput.value}"</p>
                    <p class="search-tip">Try a different spelling or a more common Indian surname</p>
                </div>
            `;
            return;
        }
        
        // Display number of results found
        const resultsCount = document.createElement('div');
        resultsCount.className = 'results-count';
        resultsCount.innerHTML = `<p>Found ${results.length} surname${results.length > 1 ? 's' : ''} matching your search</p>`;
        resultsContainer.appendChild(resultsCount);
        
        // Display each result
        displaySurnameCards(results);
    }
    
    // Modified performSearch function to work with filters
    function performSearchWithFilters() {
        // Apply the advanced filters which will handle both search term and filters
        applyAdvancedFilters();
    }
    
    // Function to integrate advanced filtering into the existing page
    function integrateAdvancedFiltering() {
        // Initialize filters when the page loads
        initializeFilters();
        
        // Add advanced filtering to the search button
        const searchButton = document.getElementById('search-button');
        if (searchButton) {
            // Add a new click listener for advanced filtering
            searchButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                performSearchWithFilters();
            });
        }
        
        // Add advanced filtering to the search input's Enter key press
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            // Add a new keypress listener for advanced filtering
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    e.stopPropagation();
                    performSearchWithFilters();
                }
            });
        }
    }
    
    // Initialize advanced filtering
    integrateAdvancedFiltering();
    
    // Add suggestions feature - show possible matches as user types
    let currentFocusIndex = -1; // Track which suggestion is currently focused
    
    searchInput.addEventListener('input', function() {
        const inputValue = searchInput.value.trim().toLowerCase();
        
        // Remove existing suggestions box
        const existingSuggestions = document.querySelector('.suggestions-box');
        if (existingSuggestions) {
            existingSuggestions.remove();
        }
        
        // Reset the focus index when input changes
        currentFocusIndex = -1;
        
        // Only show suggestions if user has typed at least 2 characters
        if (inputValue.length < 2) return;
        
        // Find potential matches
        const suggestions = surnameDatabase
            .filter(entry => entry.surname.toLowerCase().includes(inputValue))
            .map(entry => entry.surname)
            .slice(0, 5); // Limit to 5 suggestions
            
        // If we have suggestions and the input is still focused, show them
        if (suggestions.length > 0 && document.activeElement === searchInput) {
            // Create suggestions box
            const suggestionsBox = document.createElement('div');
            suggestionsBox.className = 'suggestions-box';
            
            // Add each suggestion
            suggestions.forEach((suggestion, index) => {
                const suggestionItem = document.createElement('div');
                suggestionItem.className = 'suggestion-item';
                suggestionItem.setAttribute('data-index', index);
                
                // Highlight the matching part of the suggestion
                const regex = new RegExp(`(${inputValue})`, 'i');
                const highlightedText = suggestion.replace(regex, '<strong>$1</strong>');
                suggestionItem.innerHTML = highlightedText;
                
                // When a suggestion is clicked, use it and perform search
                suggestionItem.addEventListener('click', function() {
                    searchInput.value = suggestion;
                    suggestionsBox.remove();
                    performSearch();
                });
                
                suggestionsBox.appendChild(suggestionItem);
            });
            
            // Position and append the suggestions box
            const searchContainer = document.querySelector('.search-container');
            searchContainer.appendChild(suggestionsBox);
        }
    });
    
    // Handle keyboard navigation for suggestions
    searchInput.addEventListener('keydown', function(e) {
        const suggestionsBox = document.querySelector('.suggestions-box');
        if (!suggestionsBox) return; // No suggestions visible
        
        const suggestionItems = suggestionsBox.querySelectorAll('.suggestion-item');
        if (!suggestionItems.length) return; // No suggestion items
        
        // Handle arrow up/down keys
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault(); // Prevent cursor from moving in input field
            
            // Update the focus index
            if (e.key === 'ArrowDown') {
                currentFocusIndex = (currentFocusIndex < suggestionItems.length - 1) ? currentFocusIndex + 1 : 0;
            } else {
                currentFocusIndex = (currentFocusIndex > 0) ? currentFocusIndex - 1 : suggestionItems.length - 1;
            }
            
            // Remove active class from all suggestions
            suggestionItems.forEach(item => item.classList.remove('active'));
            
            // Add active class to the focused suggestion
            if (currentFocusIndex >= 0) {
                suggestionItems[currentFocusIndex].classList.add('active');
                searchInput.value = suggestionItems[currentFocusIndex].textContent;
            }
        }
        
        // Handle Enter key to select the currently focused suggestion
        else if (e.key === 'Enter' && currentFocusIndex >= 0) {
            e.preventDefault();
            suggestionItems[currentFocusIndex].click();
        }
        
        // Handle Escape key to close suggestions
        else if (e.key === 'Escape') {
            suggestionsBox.remove();
            currentFocusIndex = -1;
        }
    });
    
    // Hide suggestions when clicking elsewhere
    document.addEventListener('click', function(event) {
        if (event.target !== searchInput) {
            const suggestionsBox = document.querySelector('.suggestions-box');
            if (suggestionsBox) suggestionsBox.remove();
        }
    });
    
    // Add functionality to reset the page when clicking on the title
    siteTitle.addEventListener('click', function() {
        // Clear the search input
        searchInput.value = '';
        
        // Reset the results container to show initial message
        resultsContainer.innerHTML = `
            <div class="initial-message">
                Enter a surname above to see its details
                <br><br>
                <button class="random-button">Explore a Random Surname</button>
            </div>
        `;
        
        // Add event listener to the newly created random button
        const randomButton = document.querySelector('.random-button');
        if (randomButton) {
            randomButton.addEventListener('click', function() {
                // Select a random surname from the database
                const randomIndex = Math.floor(Math.random() * surnameDatabase.length);
                searchInput.value = surnameDatabase[randomIndex].surname;
                performSearchWithFilters();
            });
        }
        
        // Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Show a toast message
        showToast('Welcome back to the homepage!');
    });
    
    // Make the title cursor indicate it's clickable
    siteTitle.style.cursor = 'pointer';
    
    // Add hover effect to title
    siteTitle.addEventListener('mouseenter', function() {
        this.style.textShadow = '2px 2px 8px rgba(255, 255, 255, 0.5)';
    });
    
    siteTitle.addEventListener('mouseleave', function() {
        this.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.2)';
    });
    
    // Add random surname explorer feature
    const initialMessage = document.querySelector('.initial-message');
    if (initialMessage) {
        const randomButton = document.createElement('button');
        randomButton.className = 'random-button';
        randomButton.textContent = 'Explore a Random Surname';
        randomButton.addEventListener('click', function() {
            // Select a random surname from the database
            const randomIndex = Math.floor(Math.random() * surnameDatabase.length);
            searchInput.value = surnameDatabase[randomIndex].surname;
            performSearchWithFilters();
        });
        
        initialMessage.appendChild(document.createElement('br'));
        initialMessage.appendChild(document.createElement('br'));
        initialMessage.appendChild(randomButton);
    }
    
    // Add a back-to-top button
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '↑';
    backToTopButton.title = 'Back to top';
    document.body.appendChild(backToTopButton);
    
    // Show/hide the back-to-top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Scroll to top when the button is clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Function to show toast notifications
    function showToast(message) {
        // Create toast element if it doesn't exist
        let toast = document.querySelector('.toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        
        // Set message and show toast
        toast.textContent = message;
        toast.classList.add('show');
        
        // Hide toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
    
    // Add donation button functionality
    function setupDonationButton() {
        const donateButton = document.getElementById('donate-button');
        if (!donateButton) return;
        
        donateButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create modal if it doesn't exist
            let donationModal = document.getElementById('donation-modal');
            if (!donationModal) {
                donationModal = document.createElement('div');
                donationModal.id = 'donation-modal';
                donationModal.className = 'modal';
                
                // Create modal content
                donationModal.innerHTML = `
                    <div class="modal-content">
                        <span class="close-button">&times;</span>
                        <h2>Support the Indian Surname Explorer</h2>
                        <p>Thank you for considering a donation to help maintain and expand this educational resource.</p>
                        
                        <div class="donation-options">
                            <a href="#" class="donation-amount" data-amount="500">₹500</a>
                            <a href="#" class="donation-amount" data-amount="1000">₹1000</a>
                            <a href="#" class="donation-amount" data-amount="2500">₹2500</a>
                            <a href="#" class="donation-amount custom" data-amount="custom">Custom</a>
                        </div>
                        
                        <div id="custom-amount-container" style="display: none;">
                            <input type="number" id="custom-amount" placeholder="Enter amount in ₹" min="1">
                        </div>
                        
                        <button id="proceed-donation" class="donation-proceed-button">Proceed to Payment</button>
                        
                        <div class="payment-methods">
                            <p>Secure payment via:</p>
                            <div class="payment-icons">
                                <span class="payment-icon">UPI</span>
                                <span class="payment-icon">Cards</span>
                                <span class="payment-icon">Net Banking</span>
                                <span class="payment-icon">Wallet</span>
                            </div>
                        </div>
                    </div>
                `;
                
                document.body.appendChild(donationModal);
                
                // Add event listeners for modal functionality
                const closeButton = donationModal.querySelector('.close-button');
                closeButton.addEventListener('click', function() {
                    donationModal.style.display = 'none';
                });
                
                // Handle donation amount selection
                const amountButtons = donationModal.querySelectorAll('.donation-amount');
                const customAmountContainer = document.getElementById('custom-amount-container');
                
                amountButtons.forEach(button => {
                    button.addEventListener('click', function(e) {
                        e.preventDefault();
                        
                        // Remove active class from all buttons
                        amountButtons.forEach(btn => btn.classList.remove('active'));
                        
                        // Add active class to clicked button
                        this.classList.add('active');
                        
                        // Show/hide custom amount input
                        if (this.dataset.amount === 'custom') {
                            customAmountContainer.style.display = 'block';
                        } else {
                            customAmountContainer.style.display = 'none';
                        }
                    });
                });
                
                // Handle proceed button
                const proceedButton = document.getElementById('proceed-donation');
                proceedButton.addEventListener('click', function() {
                    const selectedAmount = donationModal.querySelector('.donation-amount.active');
                    
                    if (!selectedAmount) {
                        showToast('Please select a donation amount');
                        return;
                    }
                    
                    let amount;
                    
                    if (selectedAmount.dataset.amount === 'custom') {
                        amount = document.getElementById('custom-amount').value;
                        if (!amount || isNaN(amount) || amount <= 0) {
                            showToast('Please enter a valid amount');
                            return;
                        }
                    } else {
                        amount = selectedAmount.dataset.amount;
                    }
                    
                    // Initiate Razorpay payment
                    initiateRazorpayPayment(amount);
                    
                    // Close the modal
                    donationModal.style.display = 'none';
                });
            }
            
            // Display the modal
            donationModal.style.display = 'block';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('donation-modal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    // Function to initiate Razorpay payment
    function initiateRazorpayPayment(amount) {
        // Replace with your actual Razorpay key ID when you sign up
        var options = {
            "key": "rzp_test_YOUR_KEY_ID", // Replace with your actual key when you sign up
            "amount": amount * 100, // Razorpay takes amount in paise
            "currency": "INR",
            "name": "Indian Surname Explorer",
            "description": "Donation to support the project",
            "image": "images/favicon.png", // Use your favicon as logo
            "handler": function (response) {
                // Handle successful payment
                showToast("Thank you for your donation! Receipt: " + response.razorpay_payment_id);
            },
            "prefill": {
                "name": "",
                "email": ""
            },
            "theme": {
                "color": "#FF8C00"
            }
        };
        
        var rzp = new Razorpay(options);
        rzp.open();
    }
    
    // Call donation setup function
    setupDonationButton();
    
    // Helper function to display surname cards
    function displaySurnameCards(surnames) {
        const resultsContainer = document.getElementById('results-container');
        
        // Display each result
        surnames.forEach(surname => {
            const surnameCard = document.createElement('div');
            surnameCard.className = 'surname-card';
            
            // Format regions and religions as comma-separated lists
            const regions = surname.regions.join(', ');
            const religions = surname.religions.join(', ');
            const notablePeople = surname.notable_people.join(', ');
            
            // Check if user has already upvoted this surname
            const upvotedSurnames = JSON.parse(localStorage.getItem('upvotedSurnames') || '{}');
            const hasUpvoted = upvotedSurnames[surname.surname] || false;
            const upvoteCount = surname.upvotes || 0;
            
            // Build the HTML for this surname card
            surnameCard.innerHTML = `
                <div class="surname-header">
                    <h2>${surname.surname}</h2>
                    <div class="upvote-container">
                        <button class="upvote-button ${hasUpvoted ? 'upvoted' : ''}" data-surname="${surname.surname}" ${hasUpvoted ? 'disabled' : ''}>
                            <span class="upvote-icon">${hasUpvoted ? '★' : '☆'}</span>
                            <span class="upvote-count">${upvoteCount}</span>
                        </button>
                    </div>
                </div>
                
                <div class="info-row">
                    <div class="label">Origin:</div>
                    <div class="value">${surname.origin}</div>
                </div>
                
                <div class="info-row">
                    <div class="label">Meaning:</div>
                    <div class="value">${surname.meaning}</div>
                </div>
                
                <div class="info-row">
                    <div class="label">Caste Association:</div>
                    <div class="value">${surname.caste_association}</div>
                </div>
                
                <div class="info-row">
                    <div class="label">Regions:</div>
                    <div class="value">${regions}</div>
                </div>
                
                <div class="info-row">
                    <div class="label">Religions:</div>
                    <div class="value">${religions}</div>
                </div>
                
                <div class="info-row">
                    <div class="label">Historical Significance:</div>
                    <div class="value">${surname.historical_significance}</div>
                </div>
                
                <div class="info-row">
                    <div class="label">Notable People:</div>
                    <div class="value">${notablePeople}</div>
                </div>
            `;
            
            // Add this card to the results container
            resultsContainer.appendChild(surnameCard);
            
            // Add upvote functionality
            const upvoteButton = surnameCard.querySelector('.upvote-button');
            upvoteButton.addEventListener('click', function(e) {
                e.preventDefault();
                const surnameName = this.getAttribute('data-surname');
                
                // Store upvoted status in localStorage
                const upvotedSurnames = JSON.parse(localStorage.getItem('upvotedSurnames') || '{}');
                if (!upvotedSurnames[surnameName]) {
                    // Update the UI
                    this.classList.add('upvoted');
                    this.disabled = true;
                    const upvoteIcon = this.querySelector('.upvote-icon');
                    upvoteIcon.textContent = '★';
                    
                    // Update count in the UI
                    const upvoteCountElement = this.querySelector('.upvote-count');
                    const currentCount = parseInt(upvoteCountElement.textContent);
                    upvoteCountElement.textContent = currentCount + 1;
                    
                    // Update local storage
                    upvotedSurnames[surnameName] = true;
                    localStorage.setItem('upvotedSurnames', JSON.stringify(upvotedSurnames));
                    
                    // Find the surname in the database and increment its upvote count
                    const surnameIndex = surnameDatabase.findIndex(s => s.surname === surnameName);
                    if (surnameIndex !== -1) {
                        if (!surnameDatabase[surnameIndex].upvotes) {
                            surnameDatabase[surnameIndex].upvotes = 0;
                        }
                        surnameDatabase[surnameIndex].upvotes++;
                    }
                    
                    // Show feedback toast
                    showToast(`Thank you for upvoting ${surnameName}!`);
                }
            });
        });
        
        // Animate the cards to fade in one by one
        const cards = document.querySelectorAll('.surname-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150); // Stagger the animations
        });
    }
    
    // Function to apply all selected filters
    function applyAdvancedFilters() {
        // Get references to filter elements
        const searchInput = document.getElementById('search-input');
        const regionFilter = document.getElementById('region-filter');
        const religionFilter = document.getElementById('religion-filter');
        const originFilter = document.getElementById('origin-filter');
        const casteFilter = document.getElementById('caste-filter');
        const resultsContainer = document.getElementById('results-container');
        
        // Get search term
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        // Get selected values
        const selectedRegions = Array.from(regionFilter.selectedOptions)
            .map(option => option.value)
            .filter(value => value !== 'all');
        
        const selectedReligions = Array.from(religionFilter.selectedOptions)
            .map(option => option.value)
            .filter(value => value !== 'all');
        
        const selectedOrigin = originFilter.value;
        const selectedCaste = casteFilter.value;
        
        // Check if any filters are applied
        const isFilterActive = selectedRegions.length > 0 || 
                            selectedReligions.length > 0 || 
                            selectedOrigin !== 'all' || 
                            selectedCaste !== 'all';
        
        // Filter the surnames based on all criteria
        const results = surnameDatabase.filter(surname => {
            // Initial search term match (if one exists)
            const matchesSearchTerm = !searchTerm || surname.surname.toLowerCase().includes(searchTerm);
            if (!matchesSearchTerm) return false;
            
            // Check regions (if selected)
            const matchesRegion = selectedRegions.length === 0 || 
                (Array.isArray(surname.regions) && 
                surname.regions.some(region => selectedRegions.includes(region)));
            if (!matchesRegion) return false;
            
            // Check religions (if selected)
            const matchesReligion = selectedReligions.length === 0 || 
                (Array.isArray(surname.religions) && 
                surname.religions.some(religion => selectedReligions.includes(religion)));
            if (!matchesReligion) return false;
            
            // Check origin (if selected)
            const matchesOrigin = selectedOrigin === 'all' || surname.origin === selectedOrigin;
            if (!matchesOrigin) return false;
            
            // Check caste (if selected)
            const matchesCaste = selectedCaste === 'all' || surname.caste_association === selectedCaste;
            if (!matchesCaste) return false;
            
            // If all conditions pass, include this surname
            return true;
        });
        
        // Display the filtered results
        displayResults(results, isFilterActive);
    }
    
    // Function to display results with active filter indicators
    function displayResults(results, isFilterActive) {
        const resultsContainer = document.getElementById('results-container');
        
        // Clear previous results
        resultsContainer.innerHTML = '';
        
        // If no results found, show a message
        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="initial-message">
                    <p>No surnames found matching your criteria</p>
                    <p class="search-tip">Try different search terms or filters</p>
                </div>
            `;
            return;
        }
        
        // Display number of results found
        const resultsCount = document.createElement('div');
        resultsCount.className = 'results-count';
        resultsCount.innerHTML = `<p>Found ${results.length} surname${results.length > 1 ? 's' : ''}</p>`;
        resultsContainer.appendChild(resultsCount);
        
        // If filters are active, show which ones
        if (isFilterActive) {
            // Get the filter values
            const regionFilter = document.getElementById('region-filter');
            const religionFilter = document.getElementById('religion-filter');
            const originFilter = document.getElementById('origin-filter');
            const casteFilter = document.getElementById('caste-filter');
            
            // Get selected values
            const selectedRegions = Array.from(regionFilter.selectedOptions)
                .map(option => option.value)
                .filter(value => value !== 'all');
            
            const selectedReligions = Array.from(religionFilter.selectedOptions)
                .map(option => option.value)
                .filter(value => value !== 'all');
            
            const selectedOrigin = originFilter.value !== 'all' ? originFilter.value : null;
            const selectedCaste = casteFilter.value !== 'all' ? casteFilter.value : null;
            
            // Create active filters display
            const activeFilters = document.createElement('div');
            activeFilters.className = 'active-filters';
            activeFilters.innerHTML = '<strong>Active Filters:</strong> ';
            
            // Add filter tags
            if (selectedRegions.length > 0) {
                selectedRegions.forEach(region => {
                    const tag = document.createElement('span');
                    tag.className = 'filter-tag';
                    tag.innerHTML = `Region: ${region}`;
                    activeFilters.appendChild(tag);
                });
            }
            
            if (selectedReligions.length > 0) {
                selectedReligions.forEach(religion => {
                    const tag = document.createElement('span');
                    tag.className = 'filter-tag';
                    tag.innerHTML = `Religion: ${religion}`;
                    activeFilters.appendChild(tag);
                });
            }
            
            if (selectedOrigin) {
                const tag = document.createElement('span');
                tag.className = 'filter-tag';
                tag.innerHTML = `Origin: ${selectedOrigin}`;
                activeFilters.appendChild(tag);
            }
            
            if (selectedCaste) {
                const tag = document.createElement('span');
                tag.className = 'filter-tag';
                tag.innerHTML = `Caste: ${selectedCaste}`;
                activeFilters.appendChild(tag);
            }
            
            resultsContainer.appendChild(activeFilters);
        }
        
        // Display each result
        displaySurnameCards(results);
    }
    
    // Function to initialize filter dropdowns
    function initializeFilters() {
        // Get references to filter elements
        const regionFilter = document.getElementById('region-filter');
        const religionFilter = document.getElementById('religion-filter');
        const originFilter = document.getElementById('origin-filter');
        const casteFilter = document.getElementById('caste-filter');
        const toggleFiltersBtn = document.getElementById('toggle-filters');
        const filterOptions = document.getElementById('filter-options');
        const applyFiltersBtn = document.getElementById('apply-filters');
        const resetFiltersBtn = document.getElementById('reset-filters');
        
        // If any filter elements don't exist, return early
        if (!regionFilter || !religionFilter || !originFilter || !casteFilter) {
            console.error("Filter elements not found. Advanced filtering disabled.");
            return;
        }
        
        // Toggle filter visibility
        toggleFiltersBtn.addEventListener('click', function() {
            const isHidden = filterOptions.style.display === 'none';
            filterOptions.style.display = isHidden ? 'block' : 'none';
            toggleFiltersBtn.textContent = isHidden ? 'Advanced Filters ▲' : 'Advanced Filters ▼';
        });
        
        // Collect unique values for each filter from the database
        const regions = new Set();
        const religions = new Set();
        const origins = new Set();
        const castes = new Set();
        
        surnameDatabase.forEach(surname => {
            // Add origin
            origins.add(surname.origin);
            
            // Add caste
            castes.add(surname.caste_association);
            
            // Add regions (may be an array)
            if (Array.isArray(surname.regions)) {
                surname.regions.forEach(region => {
                    regions.add(region);
                });
            }
            
            // Add religions (may be an array)
            if (Array.isArray(surname.religions)) {
                surname.religions.forEach(religion => {
                    religions.add(religion);
                });
            }
        });
        
        // Populate region filter
        regions.forEach(region => {
            const option = document.createElement('option');
            option.value = region;
            option.textContent = region;
            regionFilter.appendChild(option);
        });
        
        // Populate religion filter
        religions.forEach(religion => {
            const option = document.createElement('option');
            option.value = religion;
            option.textContent = religion;
            religionFilter.appendChild(option);
        });
        
        // Populate origin filter (after "All Origins" option)
        origins.forEach(origin => {
            const option = document.createElement('option');
            option.value = origin;
            option.textContent = origin;
            originFilter.appendChild(option);
        });
        
        // Populate caste filter (after "All Caste Associations" option)
        castes.forEach(caste => {
            const option = document.createElement('option');
            option.value = caste;
            option.textContent = caste;
            casteFilter.appendChild(option);
        });
        
        // Apply filters
        applyFiltersBtn.addEventListener('click', function() {
            applyAdvancedFilters();
        });
        
        // Reset filters
        resetFiltersBtn.addEventListener('click', function() {
            // Reset all selections
            regionFilter.querySelectorAll('option').forEach(option => {
                option.selected = option.value === 'all';
            });
            
            religionFilter.querySelectorAll('option').forEach(option => {
                option.selected = option.value === 'all';
            });
            
            originFilter.value = 'all';
            casteFilter.value = 'all';
            
            // Apply the reset (show all results)
            applyAdvancedFilters();
            
            // Show a toast notification
            showToast('Filters have been reset');
        });
    }
});