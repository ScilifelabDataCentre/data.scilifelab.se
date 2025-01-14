document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  fetch('/search/index.json')
    .then(response => response.json())
    .then(data => {
      // Initialize Fuse.js with weighted keys and adjusted threshold
      const fuse = new Fuse(data, {
        keys: [
          { name: 'permalink', weight: 0.4 },  // Highest priority
          { name: 'title', weight: 0.3 },     // Second priority
          { name: 'tags', weight: 0.2 },      // Lower priority
          { name: 'summary', weight: 0.1 },   // Least priority
        ],
        threshold: 0.2, // Allows some fuzziness but favors close matches
        useExtendedSearch: true, // Enable exact phrase matching
        ignoreLocation: true,    // Ignore the position of the query in the field
        includeScore: true       // Include scores to sort exact matches explicitly
      });

      searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim();
        searchResults.innerHTML = '';

        if (query) {
          let results = fuse.search(query);
          // console.log('Search results:', results);

          if (results.length === 0) {
            searchResults.innerHTML = '<p class="text-muted">No results found.</p>';
          } else {
            // Filter and sort by exact matches first, then by score and priority
            const exactMatches = results.filter(result =>
              isExactMatch(result.item, query)
            );
            const otherMatches = results.filter(result =>
              !isExactMatch(result.item, query)
            );

            results = [
              ...exactMatches.sort((a, b) => getPriority(a.item) - getPriority(b.item)),
              ...otherMatches.sort((a, b) => getPriority(a.item) - getPriority(b.item)),
            ];

            // Display all results
            results.forEach(({ item }) => {
              const resultDiv = document.createElement('div');
              resultDiv.classList.add('mb-4', 'pb-3', 'border-bottom');
              resultDiv.innerHTML = `
                <span class="mb-1">
                  <a href="${item.permalink}">${item.title}</a>
                </span>
              `;
              searchResults.appendChild(resultDiv);
            });
          }
        } else {
          searchResults.innerHTML = '<p class="text-muted">Start typing to see results ...</p>';
        }
      });

      /**
       * Checks if the query is an exact match for any of the prioritized keys.
       */
      function isExactMatch(item, query) {
        const lowerQuery = query.toLowerCase();
        return (
          (item.permalink && item.permalink.toLowerCase() === lowerQuery) ||
          (item.title && item.title.toLowerCase() === lowerQuery) ||
          (item.tags && item.tags.some(tag => tag.toLowerCase() === lowerQuery)) ||
          (item.summary && item.summary.toLowerCase() === lowerQuery)
        );
      }

      /**
       * Function to calculate priority based on field presence.
       * Higher priority = Lower numerical value.
       */
      function getPriority(item) {
        const lowerQuery = searchInput.value.toLowerCase();
        if (item.permalink && item.permalink.toLowerCase().includes(lowerQuery)) return 1;
        if (item.title && item.title.toLowerCase().includes(lowerQuery)) return 2;
        if (item.tags && item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))) return 3;
        if (item.summary && item.summary.toLowerCase().includes(lowerQuery)) return 4;
        return 5; // Lowest priority if no match
      }
    })
    .catch(error => {
      console.error('Error fetching search index:', error);
      searchResults.innerHTML = '<p class="text-danger">Failed to load search results. Please try again later.</p>';
    });
});
