

// document.getElementById('searchForm').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     // Get the search input value
//     const searchQuery = document.getElementById('searchInput').value.toLowerCase();

//     // Redirect based on search query
//     switch (searchQuery) {
//         case 'nature':
//             window.location.href = 'ShopNatureLandscapes.html';
//             break;
//         case 'ohrid':
//             window.location.href = 'ShopOhrid.html';
//             break;
//         case 'macedonia':
//             window.location.href = 'ShopMacedonia.html';
//             break;
//         // Add more cases for different categories
//         default:
//             alert('No matching category found.'); // Optional: Show alert if no match is found
//             break;
//     }
// });


// document.getElementById('searchForm').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     // Get the search input value
//     const searchQuery = document.getElementById('searchInput').value.toLowerCase();

//     // Define possible search terms and their corresponding URLs
//     const searchOptions = [
//         { term: 'nature', url: 'ShopNatureLandscapes.html' },
//         { term: 'ohrid', url: 'ShopOhrid.html' },
//         { term: 'macedonia', url: 'ShopMacedonia.html' },
//         // Add more options as needed
//     ];

//     // Filter options based on the search query
//     const matchedOptions = searchOptions.filter(option => option.term.includes(searchQuery));

//     // If there is only one match, redirect to the corresponding page
//     if (matchedOptions.length === 1) {
//         window.location.href = matchedOptions[0].url;
//     } else if (matchedOptions.length > 1) {
//         // If there are multiple matches, display them (example: alert or render on the page)
//         let resultText = 'Multiple matches found:\n';
//         matchedOptions.forEach(option => {
//             resultText += `${option.term} - ${option.url}\n`;
//         });
//         alert(resultText); // Example: Display results in an alert, you can render them differently
//     } else {
//         alert('No matching category found.');
//     }
// });






document.addEventListener('DOMContentLoaded', function() {
    // Get search query from URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('query') ? urlParams.get('query').toLowerCase() : '';

    // Update the search query in the title
    const searchQueryElement = document.getElementById('searchQuery');
    if (searchQuery && searchQueryElement) {
        searchQueryElement.textContent = searchQuery;
    } else if (searchQueryElement) {
        searchQueryElement.textContent = "No query provided.";
    }

    // Load search results based on the query
    if (searchQuery) {
        loadSearchResults(searchQuery);
    }
});

function loadSearchResults(query) {
    const searchResultsContainer = document.getElementById('searchResults');
    const resultsCountElement = document.getElementById('resultsCount');
    searchResultsContainer.innerHTML = ''; // Clear previous results
    let totalResultsFound = 0; // Initialize counter

    // URLs of the pages to search
    const pages = [
        { url: 'ShopNatureLandscapes.html', category: 'nature' },
        { url: 'ShopOhrid.html', category: 'ohrid' },
        { url: 'ShopMacedonia.html', category: 'macedonia' },
        { url: 'Blog.html', category: 'blog' },
        { url: 'Home.html', category: 'home' },
        { url: 'Shop.html', category: 'shop' },
    ];

    // Create an array of promises for fetching page results
    const fetchPromises = pages.map(page => 
        fetchPageResults(page.url, query, searchResultsContainer, page.category)
            .then(foundResults => {
                if (foundResults > 0) {
                    totalResultsFound += foundResults; // Add to total count
                    resultsCountElement.textContent = `${totalResultsFound} products found`; // Update count in DOM
                }
            })
            .catch(error => console.error('Error loading page:', error))
    );

    // Wait for all fetch operations to complete
    Promise.all(fetchPromises).then(() => {
        // If no results were found after all pages are searched
        if (totalResultsFound === 0) {
            searchResultsContainer.innerHTML = '<p>No results found for your search query.</p>';
        }
    });
}

function fetchPageResults(pageUrl, query, searchResultsContainer, pageCategory) {
    return fetch(pageUrl)
        .then(response => response.text())
        .then(html => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            

            // Select items like products and blog entries
            const productItems = tempDiv.querySelectorAll('.product-item, .testimonial-slider, .popular-product,  .thumbnail, .img-fluid2, .blog-section');
            let foundResults = 0;

            productItems.forEach(item => {
                const titleElement = item.querySelector('h3');
                const discountBadge = item.querySelector('span');
                
                if (titleElement) {
                    const title = titleElement.textContent.toLowerCase();

                    // If the category or title matches the query, append the item
                    if (pageCategory.includes(query) || title.includes(query)) {
                        searchResultsContainer.appendChild(item.cloneNode(true));
                        foundResults++; // Increment count of found results
                    }
                }
            });

            return foundResults; // Return number of found results
        })
        .catch(error => {
            console.error('Error loading page:', error);
            return 0; // Return 0 in case of an error
        });
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the search input value
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    
    // Redirect to Search.html with the query as a parameter
    window.location.href = `Search.html?query=${encodeURIComponent(searchQuery)}`;
});



// ova 


 